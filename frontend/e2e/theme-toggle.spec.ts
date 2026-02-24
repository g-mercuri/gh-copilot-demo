import { test, expect } from '@playwright/test';

test.describe('Dark/Light mode toggle', () => {
    test.beforeEach(async ({ page }) => {
        // Clear localStorage before each test so tests are isolated
        await page.context().addInitScript(() => localStorage.clear());
        await page.goto('/');
    });

    test('toggle button is visible in the navbar', async ({ page }) => {
        const toggleButton = page.locator('#theme-toggle');
        await expect(toggleButton).toBeVisible();
        await expect(toggleButton).toHaveAttribute('aria-label', 'Toggle dark/light mode');
    });

    test('defaults to light mode when system preference is light', async ({ browser }) => {
        const context = await browser.newContext({ colorScheme: 'light' });
        const page = await context.newPage();
        await page.context().addInitScript(() => localStorage.clear());
        await page.goto('/');

        await expect(page.locator('html')).toHaveAttribute('data-bs-theme', 'light');

        // Moon icon is shown in light mode
        await expect(page.locator('#theme-icon')).toHaveClass(/bi-moon-fill/);

        await context.close();
    });

    test('defaults to dark mode when system preference is dark', async ({ browser }) => {
        const context = await browser.newContext({ colorScheme: 'dark' });
        const page = await context.newPage();
        await page.context().addInitScript(() => localStorage.clear());
        await page.goto('/');

        await expect(page.locator('html')).toHaveAttribute('data-bs-theme', 'dark');

        // Sun icon is shown in dark mode
        await expect(page.locator('#theme-icon')).toHaveClass(/bi-sun-fill/);

        await context.close();
    });

    test('clicking toggle switches from light to dark mode', async ({ page }) => {
        await expect(page.locator('html')).toHaveAttribute('data-bs-theme', 'light');

        await page.locator('#theme-toggle').click();

        await expect(page.locator('html')).toHaveAttribute('data-bs-theme', 'dark');
        await expect(page.locator('#theme-icon')).toHaveClass(/bi-sun-fill/);
    });

    test('clicking toggle twice returns to light mode', async ({ page }) => {
        await page.locator('#theme-toggle').click();
        await expect(page.locator('html')).toHaveAttribute('data-bs-theme', 'dark');

        await page.locator('#theme-toggle').click();

        await expect(page.locator('html')).toHaveAttribute('data-bs-theme', 'light');
        await expect(page.locator('#theme-icon')).toHaveClass(/bi-moon-fill/);
    });

    test('theme is persisted in localStorage after toggle', async ({ page }) => {
        await page.locator('#theme-toggle').click();

        const stored = await page.evaluate(() => localStorage.getItem('theme'));
        expect(stored).toBe('dark');

        await page.locator('#theme-toggle').click();
        const storedLight = await page.evaluate(() => localStorage.getItem('theme'));
        expect(storedLight).toBe('light');
    });

    test('persisted dark theme is restored on page reload', async ({ browser }) => {
        // Use a fresh context without the localStorage-clearing init script
        // so localStorage genuinely persists across the reload
        const context = await browser.newContext({ colorScheme: 'light' });
        const page = await context.newPage();
        await page.goto('/');

        // Switch to dark mode
        await page.locator('#theme-toggle').click();
        await expect(page.locator('html')).toHaveAttribute('data-bs-theme', 'dark');

        // Reload: localStorage survives since no init script is clearing it
        await page.reload();

        // Theme should still be dark after reload
        await expect(page.locator('html')).toHaveAttribute('data-bs-theme', 'dark');
        await expect(page.locator('#theme-icon')).toHaveClass(/bi-sun-fill/);

        await context.close();
    });

    test('localStorage preference overrides system preference', async ({ browser }) => {
        // Simulate a user who prefers dark at OS level but previously saved "light"
        const context = await browser.newContext({ colorScheme: 'dark' });
        const page = await context.newPage();
        await page.context().addInitScript(() => localStorage.setItem('theme', 'light'));
        await page.goto('/');

        await expect(page.locator('html')).toHaveAttribute('data-bs-theme', 'light');

        await context.close();
    });
});
