---
name: create-rest-endpoint
description: Guide for creating new REST API endpoints in the Express.js backend. Use this when asked to add a new API route or endpoint.
---

When creating a new REST endpoint in `backend/index.js`, follow this pattern:

## Steps

1. Choose the appropriate HTTP method (`GET`, `POST`, `PUT`, `DELETE`)
2. Define the route path following RESTful conventions
3. Add input validation before any database operation
4. Use parameterized SQLite queries (`?`) — never concatenate user input into SQL
5. Handle errors with the correct status code (400 for bad input, 404 for not found, 500 for server errors)
6. Return JSON responses

## Template

```javascript
// METHOD /path - Description of the endpoint
app.method('/path', (req, res) => {
  // 1. Extract and validate input
  const { field } = req.body; // or req.params, req.query
  if (!field) {
    res.status(400).json({ error: 'Field is required' });
    return;
  }

  // 2. Database operation with parameterized query
  db.all('SELECT * FROM todos WHERE column = ?', [field], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});
```

## SQLite Methods

- `db.all()` — SELECT queries returning multiple rows
- `db.get()` — SELECT queries returning a single row
- `db.run()` — INSERT, UPDATE, DELETE (use `function()` callback for `this.lastID` or `this.changes`)

## Example: Search Endpoint

```javascript
// GET /todos/search - Search todos by keyword
app.get('/todos/search', (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.status(400).json({ error: 'Query parameter "q" is required' });
    return;
  }

  db.all('SELECT * FROM todos WHERE text LIKE ?', [`%${q}%`], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});
```
