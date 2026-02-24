Refactor the backend by separating routes from the main server file.

Steps:
1. Create `backend/routes/todos.js` using `express.Router()`
2. Move all `/todos` route handlers from [backend/index.js](../../backend/index.js) into the new router file
3. Pass the SQLite database connection (`db`) as a dependency (e.g., via middleware or factory function)
4. Update `backend/index.js` to import and mount the router with `app.use('/todos', todosRouter)`
5. Keep all middleware (cors, bodyParser) in the main file
6. Ensure all existing API behavior is preserved
