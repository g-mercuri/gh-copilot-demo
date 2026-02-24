---
name: add-database-migration
description: Guide for creating SQLite database migration scripts. Use this when asked to modify the database schema or add new columns.
---

When creating a database migration for the SQLite database, follow this pattern:

## Steps

1. Create a migration script in `backend/migrations/` with a numbered prefix (e.g., `001_add_priority.js`)
2. Use `db.serialize()` to ensure operations run sequentially
3. Make the migration idempotent — handle the case where it has already been applied
4. Close the database connection when done

## Template

```javascript
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('todos.db');

db.serialize(() => {
  db.run(`ALTER TABLE todos ADD COLUMN column_name TYPE DEFAULT value`, (err) => {
    if (err) {
      if (err.message.includes('duplicate column name')) {
        console.log('Column already exists, migration skipped.');
      } else {
        console.error('Migration error:', err.message);
      }
    } else {
      console.log('Migration complete: column added.');
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

## Conventions

- Migration files are numbered sequentially: `001_`, `002_`, etc.
- Each migration is idempotent (safe to run multiple times)
- Always handle `duplicate column name` errors gracefully
- Log the result of each operation
- After adding columns, update the corresponding API endpoints to accept the new fields

## Example: Add Priority and Due Date

```javascript
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('todos.db');

db.serialize(() => {
  db.run(`ALTER TABLE todos ADD COLUMN priority TEXT DEFAULT 'medium'`, (err) => {
    if (err && !err.message.includes('duplicate column name')) {
      console.error('Error:', err.message);
    } else {
      console.log('Column "priority" ready.');
    }
  });

  db.run(`ALTER TABLE todos ADD COLUMN due_date TEXT`, (err) => {
    if (err && !err.message.includes('duplicate column name')) {
      console.error('Error:', err.message);
    } else {
      console.log('Column "due_date" ready.');
    }
  });
});

db.close(() => console.log('Migration finished.'));
```
