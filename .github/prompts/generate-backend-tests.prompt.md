Generate a complete Jest test suite for the backend API in [backend/index.js](../../backend/index.js).

The test suite should use `supertest` to test the Express app and cover:

1. **GET /todos** — Returns all todos (200), handles empty list
2. **POST /todos** — Creates a todo with valid text (200), rejects missing text (400)
3. **PUT /todos/:id** — Updates text (200), updates completed status (200), rejects empty body (400)
4. **DELETE /todos/:id** — Deletes a todo (200)

For each endpoint include:
- A success case with valid data
- An error case with invalid or missing data
- Verification of status codes and JSON response structure

Use an in-memory SQLite database for test isolation.
Include `beforeAll` setup and `afterAll` teardown.
