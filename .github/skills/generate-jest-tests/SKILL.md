---
name: generate-jest-tests
description: Guide for generating Jest test suites for Express.js API endpoints using supertest. Use this when asked to write tests for the backend.
---

When creating tests for the backend API, follow this pattern:

## Steps

1. Set up the test file in a `__tests__` or `tests` directory
2. Import `supertest` and the Express app
3. Create an in-memory SQLite database for test isolation
4. Write `beforeAll` / `afterAll` hooks for setup and teardown
5. Test each endpoint with both success and error cases

## Template

```javascript
const request = require('supertest');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// Set up a test app with an in-memory database.
// Note: backend/index.js couples the app with a file-based DB,
// so for test isolation, recreate the app with an in-memory DB.
let app;
let db;

beforeAll((done) => {
  db = new sqlite3.Database(':memory:');
  db.run(`CREATE TABLE todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    completed BOOLEAN DEFAULT 0
  )`, () => {
    app = express();
    app.use(express.json());

    // Register the same routes as backend/index.js, using the test db
    app.get('/todos', (req, res) => {
      db.all('SELECT * FROM todos', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
      });
    });
    // ... repeat for POST, PUT, DELETE routes
    done();
  });
});

afterAll((done) => {
  db.close(done);
});

describe('METHOD /endpoint', () => {
  it('should return 200 with valid data', async () => {
    const res = await request(app)
      .method('/endpoint')
      .send({ /* valid body */ });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('expectedField');
  });

  it('should return 400 with invalid data', async () => {
    const res = await request(app)
      .method('/endpoint')
      .send({});
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
```

## Conventions

- One `describe` block per endpoint
- Test names should clearly describe the expected behavior
- Always verify: status code, response body structure, specific field values
- Clean up test data between tests if needed with `beforeEach`
- Use `:memory:` SQLite database for speed and isolation

## Example: POST /todos Tests

```javascript
describe('POST /todos', () => {
  it('should create a new todo with valid text', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ text: 'Buy groceries' });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.text).toBe('Buy groceries');
    expect(res.body.completed).toBe(false);
  });

  it('should return 400 when text is missing', async () => {
    const res = await request(app)
      .post('/todos')
      .send({});
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Text is required');
  });
});
```
