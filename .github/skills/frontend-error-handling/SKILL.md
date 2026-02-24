---
name: frontend-error-handling
description: Guide for adding error handling to frontend fetch calls with Bootstrap visual feedback. Use this when asked to handle API errors in the Astro frontend.
---

When adding error handling to frontend API calls, follow this pattern:

## Steps

1. Wrap the `fetch` call in a `try/catch` block
2. Check `response.ok` before parsing JSON
3. On error, create a Bootstrap alert and prepend it to the page
4. Use Bootstrap's dismissible alert pattern for user-friendly feedback

## Template

```typescript
try {
  const response = await fetch('http://localhost:3000/todos', {
    method: 'METHOD',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ /* data */ }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Server error');
  }

  const data = await response.json();
  // Handle success
  window.location.reload();
} catch (error) {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-danger alert-dismissible fade show';
  alertDiv.role = 'alert';
  alertDiv.innerHTML = `
    ${error instanceof Error ? error.message : 'An error occurred'}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  document.querySelector('.container')?.prepend(alertDiv);
}
```

## Conventions

- Always check `response.ok` before calling `response.json()`
- Use Bootstrap alert classes: `alert-danger` for errors, `alert-success` for confirmations
- Include a dismiss button using `alert-dismissible` and `btn-close`
- Display the server error message when available, fall back to a generic message
- Prepend alerts to `.container` so they appear at the top of the page

## Example: Error Handling on Todo Creation

```typescript
const form = document.getElementById('todo-form') as HTMLFormElement;
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('todo-text') as HTMLInputElement;
  const text = input.value.trim();

  if (!text) return;

  try {
    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create todo');
    }

    window.location.reload();
  } catch (error) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger alert-dismissible fade show';
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
      ${error instanceof Error ? error.message : 'An error occurred'}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.querySelector('.container')?.prepend(alertDiv);
  }
});
```
