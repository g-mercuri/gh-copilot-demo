Add a dark/light mode toggle to the application layout at [frontend/src/layouts/Layout.astro](../../frontend/src/layouts/Layout.astro).

Requirements:
- Add a toggle button in the navbar, next to the "Todo List" brand
- Use Bootstrap 5's `data-bs-theme` attribute on the `<html>` element to switch themes
- Show `bi-moon-fill` icon in light mode and `bi-sun-fill` icon in dark mode
- Save the user's preference in `localStorage`
- Load the saved preference on page load (before rendering to prevent flash)
- Use Bootstrap classes for the button styling (e.g., `btn btn-outline-light`)
