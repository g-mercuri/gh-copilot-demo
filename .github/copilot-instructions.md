# Copilot Instructions

These are the general instructions for GitHub Copilot in this repository.

## Project Context

This is a full-stack Todo List application composed of:
- **Backend**: RESTful API with Express.js and SQLite database
- **Frontend**: Web application with Astro, Bootstrap, and TypeScript

## Code Conventions

### General
- Write comments in English.
- Use English names for variables and functions.
- Prefer `const` and `let` over `var`.
- Use template literals (`` ` ``) for string concatenation.

### Backend (Express.js)
- Follow the RESTful pattern for API endpoints (`GET`, `POST`, `PUT`, `DELETE`).
- Always handle errors in SQLite database callbacks by returning appropriate status codes (400, 404, 500).
- Use `bodyParser.json()` for request body parsing.
- API responses must be in JSON format.
- The Express server runs on port `3000`.

### Frontend (Astro + Bootstrap)
- Use `.astro` components for the user interface.
- API calls from the frontend point to `http://localhost:3000`.
- Use Bootstrap 5 classes for styling (avoid custom CSS when possible).
- Use Bootstrap Icons for icons.
- TypeScript is preferred for client-side logic inside `<script>` tags.
- The frontend runs on port `4321`.

### Database
- The SQLite database is in the `todos.db` file inside the backend folder.
- Use parameterized queries (`?`) to prevent SQL injection.
- Handle automatic table creation on server startup.

## File Structure

```
backend/index.js         → Express server with all API routes
frontend/src/pages/      → Astro pages
frontend/src/components/ → Reusable Astro components
frontend/src/layouts/    → Shared layouts
```

## Testing

- Use Jest for backend tests.
- Tests should cover all API endpoints.
- Write unit tests for utility functions and integration tests for routes.

## Security

- Always validate user input on the server side.
- Use CORS to handle cross-origin requests.
- Never expose sensitive information in API responses.
- Use parameterized queries to prevent SQL injection.
