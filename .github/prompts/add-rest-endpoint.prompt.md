Add a new REST API endpoint to `backend/index.js`.

The endpoint should:
- Follow the existing Express.js pattern in the project
- Use parameterized SQLite queries (`?`) for all database operations
- Validate input and return 400 errors with descriptive messages
- Handle database errors and return 500 with the error message
- Return JSON responses

Refer to the existing endpoints in [backend/index.js](../../backend/index.js) for the coding style and error handling pattern.
