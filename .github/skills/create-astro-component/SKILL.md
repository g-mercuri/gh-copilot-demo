---
name: create-astro-component
description: Guide for creating new Astro components with typed Props, Bootstrap styling, and TypeScript. Use this when asked to create a new UI component.
---

When creating a new Astro component in `frontend/src/components/`, follow this pattern:

## Steps

1. Define a TypeScript `Props` interface in the frontmatter block
2. Destructure props from `Astro.props`
3. Write HTML markup using Bootstrap 5 classes
4. Add a `<script>` block for client-side interactivity (TypeScript)
5. Add a `<style>` block only for component-specific styles not covered by Bootstrap

## Template

```astro
---
interface Props {
    // Define typed props here
}

const { /* destructure props */ } = Astro.props;
---

<div class="...Bootstrap classes...">
    <!-- Component markup using Bootstrap 5 -->
</div>

<script>
    // Client-side TypeScript logic
    // Use document.querySelectorAll for event delegation
    // Call API at http://localhost:3000 for data operations
</script>

<style>
    /* Only for styles Bootstrap doesn't cover, such as custom
       animations, precise margins on project-specific elements,
       or hover transitions (e.g., .todo-item:hover .btn-group). */
</style>
```

## Conventions

- Use Bootstrap 5 utility classes for layout (`d-flex`, `justify-content-between`, etc.)
- Use Bootstrap component classes for UI (`card`, `btn`, `form-control`, etc.)
- Use Bootstrap Icons with `<i class="bi bi-icon-name"></i>`
- Type-cast DOM elements in scripts (e.g., `as HTMLInputElement`)
- Reload page after API mutations: `window.location.reload()`

## Example: Stats Component

```astro
---
interface Props {
    total: number;
    completed: number;
}

const { total, completed } = Astro.props;
const pending = total - completed;
---

<div class="card mb-3">
    <div class="card-body d-flex justify-content-around text-center">
        <div>
            <h5 class="card-title">{total}</h5>
            <p class="text-muted">Total</p>
        </div>
        <div>
            <h5 class="card-title text-success">{completed}</h5>
            <p class="text-muted">Completed</p>
        </div>
        <div>
            <h5 class="card-title text-warning">{pending}</h5>
            <p class="text-muted">Pending</p>
        </div>
    </div>
</div>
```
