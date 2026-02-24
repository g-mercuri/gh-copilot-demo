Create a new Astro component in `frontend/src/components/`.

The component should:
- Define a TypeScript `Props` interface in the frontmatter
- Use Bootstrap 5 classes for all styling
- Use Bootstrap Icons (`bi bi-*`) for any icons
- Include a `<script>` block with TypeScript for client-side interactivity
- Call the backend API at `http://localhost:3000` for any data operations
- Handle fetch errors gracefully

Follow the structure of the existing components:
- [TodoItem.astro](../../frontend/src/components/TodoItem.astro) for interactive components
- [Layout.astro](../../frontend/src/layouts/Layout.astro) for the base layout
