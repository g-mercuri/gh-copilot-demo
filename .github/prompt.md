# Copilot Prompts

This file contains reusable prompts for GitHub Copilot specific to the Todo List project. They can be used as a reference for interacting effectively with Copilot during development.

---

## Backend Prompts

### Adding new endpoints

```
Add a GET /todos/stats endpoint to the file backend/index.js that returns
a JSON object with the total number of todos, the number of completed ones,
and the number of pending ones. Use a SQL query with COUNT and GROUP BY.
```

### Input validation

```
Add input validation to the POST /todos endpoint in backend/index.js:
- The "text" field must be a non-empty string
- The maximum length must be 255 characters
- Trim leading and trailing whitespace from the text
Return 400 errors with descriptive messages.
```

### Pagination

```
Modify the GET /todos endpoint in backend/index.js to support pagination.
Accept the query parameters "page" (default: 1) and "limit" (default: 10).
Return an object with the fields: todos (array), total (total count),
page (current page), totalPages (total number of pages).
```

### Search

```
Add a GET /todos/search endpoint to backend/index.js that accepts
a query parameter "q" and returns all todos whose text contains
the search string (case-insensitive). Use LIKE with SQLite.
```

---

## Frontend Prompts

### New component

```
Create an Astro component in frontend/src/components/TodoStats.astro that shows
todo statistics in three Bootstrap badges: total (blue), completed (green),
pending (orange). Accept as props: total (number), completed (number).
```

### Todo filtering

```
Add three Bootstrap buttons ("All", "Active", "Completed") to the page
frontend/src/pages/index.astro above the todo list. Implement client-side
logic in TypeScript to filter the visible todos based on the selection.
Use Bootstrap classes to highlight the active button.
```

### Delete confirmation

```
Modify the component frontend/src/components/TodoItem.astro to show
a Bootstrap confirmation modal when the user clicks the delete button.
The modal should display the todo text and ask for confirmation before proceeding.
```

### Dark mode

```
Add a toggle button to Layout.astro in the navbar to switch between
dark mode and light mode. Use the data-bs-theme attributes of Bootstrap 5.
Save the preference in localStorage. The button should show the icon
bi-moon-fill or bi-sun-fill based on the active mode.
```

---

## Testing Prompts

### Backend tests

```
Generate a complete Jest test suite for the file backend/index.js using supertest.
Create tests for every endpoint (GET /todos, POST /todos, PUT /todos/:id, DELETE /todos/:id).
For each endpoint test:
- Success case with valid data
- Error case with invalid or missing data
- Verification of status codes and JSON response structure
Use an in-memory SQLite database for tests.
```

### TodoItem component tests

```
Generate tests to verify the behavior of the TodoItem.astro component:
- Verify that the checkbox reflects the completed state
- Verify that the text is displayed correctly
- Verify that the text is struck through when the todo is completed
- Verify that inline editing works with Enter and cancels with Escape
```

---

## Database and Migration Prompts

### New column

```
Create a Node.js script in backend/migrations/001_add_priority.js that adds
a "priority" column (TEXT, default 'medium') to the todos table.
The script must be idempotent and handle the case where the column already exists.
Also update the POST /todos endpoint to accept the "priority" field.
```

### Migration to PostgreSQL

```
Generate a Node.js script to migrate all data from the todos table
in the SQLite database (todos.db) to a PostgreSQL database.
The script must:
1. Create the table in PostgreSQL if it does not exist
2. Read all records from SQLite
3. Insert them into PostgreSQL preserving the original IDs
4. Print a migration summary
```

---

## DevOps and Deployment Prompts

### GitHub Actions CI

```
Create a GitHub Actions workflow in .github/workflows/ci.yml that:
1. Triggers on push and pull request to the main branch
2. Installs Node.js dependencies for backend and frontend
3. Runs backend tests with Jest
4. Builds the frontend with Astro
```

### Deploy to Azure

```
Create an azure.yaml file for Azure Developer CLI (azd) that configures:
- An App Service for the Express.js backend
- A Static Web App for the Astro frontend
- A PostgreSQL database as a replacement for SQLite in production
Include the environment variables needed for the database connection.
```

### Dockerfile

```
Create a multi-stage Dockerfile for the project:
- Stage 1: Build the Astro frontend
- Stage 2: Set up the Express.js backend with production dependencies
- Stage 3: Final image with nginx for the frontend and Node.js for the backend
Configure health checks and environment variables.
```

---

## Refactoring Prompts

### Route separation

```
Refactor backend/index.js by separating the routes into a dedicated file
backend/routes/todos.js. Use express.Router() to define the routes
and import them in the main file. Keep the database connection
as an injected dependency.
```

### Centralized error handling

```
Create a centralized error handling middleware for the Express.js backend
in backend/middleware/errorHandler.js. The middleware should:
- Catch all unhandled errors
- Log the error to the console
- Return a JSON response with an appropriate status code and message
- Distinguish between validation errors (400) and server errors (500)
```

### Environment variables

```
Refactor the project to use environment variables with dotenv:
- Move the server port, database URL, and frontend URL to a .env file
- Create a .env.example file with default values
- Update backend/index.js to read environment variables
- Add .env to .gitignore
```
