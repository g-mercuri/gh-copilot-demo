Add todo filtering to the main page at [frontend/src/pages/index.astro](../../frontend/src/pages/index.astro).

Requirements:
- Add three Bootstrap buttons above the todo list: "All", "Active", "Completed"
- Use the Bootstrap `btn-group` pattern for the filter buttons
- Highlight the active filter button using Bootstrap's `active` class
- Implement client-side TypeScript logic to show/hide todos based on the selected filter
- "All" shows every todo, "Active" shows only unchecked, "Completed" shows only checked
- The filter should work without reloading the page

Reference the existing todo rendering in [index.astro](../../frontend/src/pages/index.astro) and the todo item structure in [TodoItem.astro](../../frontend/src/components/TodoItem.astro).
