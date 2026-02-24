# Copilot Skills

This file defines custom skills for GitHub Copilot specific to this Todo List project. Skills are reusable actions that Copilot can perform to automate repetitive tasks.

---

## Skill: Create REST Endpoint

**Description:** Generate a new REST API endpoint for the Express.js backend following the project conventions.

**Parameters:**
- `method`: HTTP method (`GET`, `POST`, `PUT`, `DELETE`)
- `path`: Endpoint path (e.g., `/todos/search`)
- `description`: Description of what the endpoint does

**Template:**

```javascript
// {description}
app.{method}('{path}', (req, res) => {
  // Input validation
  // ...

  // Database operation
  db.{run|all|get}('SQL QUERY', [params], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(result);
  });
});
```

**Practical example:**

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

---

## Skill: Create Astro Component

**Description:** Generate a new Astro component following the project conventions (typed Props, Bootstrap, TypeScript).

**Parameters:**
- `name`: Component name (e.g., `TodoFilter`)
- `props`: Component properties
- `description`: Description of what the component does

**Template:**

```astro
---
interface Props {
    // Define props here
}

const { /* destructure props */ } = Astro.props;
---

<div class="...Bootstrap classes...">
    <!-- Component markup -->
</div>

<script>
    // Client-side logic in TypeScript
</script>

<style>
    /* Component-specific styles */
</style>
```

**Practical example:**

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

---

## Skill: Generate Jest Tests for Endpoint

**Description:** Generate a complete Jest test suite for a backend API endpoint.

**Parameters:**
- `method`: HTTP method of the endpoint
- `path`: Endpoint path
- `description`: What it tests

**Template:**

```javascript
const request = require('supertest');
const express = require('express');
// Test app and database setup

describe('{method} {path}', () => {
  // Success case
  it('should return status 200 with valid data', async () => {
    const res = await request(app)
      .{method}('{path}')
      .send({ /* body */ });
    expect(res.status).toBe(200);
    // Response assertions
  });

  // Error case - invalid input
  it('should return status 400 with invalid data', async () => {
    const res = await request(app)
      .{method}('{path}')
      .send({});
    expect(res.status).toBe(400);
  });
});
```

**Practical example:**

```javascript
const request = require('supertest');

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

  it('should return error 400 without text', async () => {
    const res = await request(app)
      .post('/todos')
      .send({});
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Text is required');
  });

  it('should return error 400 with empty text', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ text: '' });
    expect(res.status).toBe(400);
  });
});
```

---

## Skill: Add Database Migration

**Description:** Generate a migration script to modify the SQLite database schema.

**Parameters:**
- `operation`: Type of operation (`add_column`, `create_table`, `modify_column`)
- `details`: Details of the change

**Template:**

```javascript
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('todos.db');

db.serialize(() => {
  // Check if the migration has already been applied
  // Execute the migration
  // Verify the result
});

db.close();
```

**Practical example:**

```javascript
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('todos.db');

db.serialize(() => {
  // Add priority column to the todos table
  db.run(`ALTER TABLE todos ADD COLUMN priority TEXT DEFAULT 'medium'`, (err) => {
    if (err) {
      if (err.message.includes('duplicate column name')) {
        console.log('Column priority already exists, migration skipped.');
      } else {
        console.error('Error during migration:', err.message);
      }
    } else {
      console.log('Migration complete: priority column added.');
    }
  });

  // Add due_date column to the todos table
  db.run(`ALTER TABLE todos ADD COLUMN due_date TEXT`, (err) => {
    if (err) {
      if (err.message.includes('duplicate column name')) {
        console.log('Column due_date already exists, migration skipped.');
      } else {
        console.error('Error during migration:', err.message);
      }
    } else {
      console.log('Migration complete: due_date column added.');
    }
  });
});

db.close((err) => {
  if (err) {
    console.error('Error closing database:', err.message);
  } else {
    console.log('Migration finished successfully.');
  }
});
```

---

## Skill: Frontend Error Handling

**Description:** Add error handling to a frontend fetch call with visual user feedback.

**Template:**

```typescript
try {
  const response = await fetch('http://localhost:3000/todos', {
    method: '{METHOD}',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ /* data */ }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Server error');
  }

  const data = await response.json();
  // Success operation
  window.location.reload();
} catch (error) {
  // Show error to user
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-danger alert-dismissible fade show';
  alertDiv.innerHTML = `
    ${error instanceof Error ? error.message : 'An error occurred'}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  document.querySelector('.container')?.prepend(alertDiv);
}
```
