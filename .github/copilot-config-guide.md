# Guide to GitHub Copilot Configuration Files

This guide explains what the GitHub Copilot configuration files in the `.github/` folder are for and when they should be used.

---

## Overview

GitHub Copilot can be customized at the repository level through configuration files in the `.github/` folder. These files provide context, instructions, and conventions that Copilot will use to generate more accurate code that is consistent with the project.

| File | Purpose | When to use it |
|------|---------|----------------|
| `copilot-instructions.md` | General coding instructions | Always active, read automatically |
| `architecture.md` | Architecture documentation | When Copilot needs to understand the structure |
| `agents.md` | Definition of specialized agents | For specific tasks with dedicated context |
| `skills.md` | Reusable templates and actions | To automate repetitive patterns |
| `prompt.md` | Ready-to-use prompt library | As a reference for effective prompts |

---

## `copilot-instructions.md`

### What it is for
This is the main Copilot configuration file for the repository. It contains the **general instructions** that Copilot should follow when generating code, suggestions, or responses in this project.

### When to use it
- **Always**: it is automatically read by Copilot in every interaction.
- When you want to define **code conventions** (style, language, patterns).
- When you want to specify the **technologies and frameworks** used in the project.
- When you want to set **security rules** or **best practices** to follow.

### What to include
- Language for comments (e.g., English).
- Naming and code style conventions.
- Project technologies and frameworks with versions.
- File and folder structure.
- Security rules (input validation, SQL injection, etc.).
- Preferred testing frameworks.

### Example use case
> A new developer opens the project and asks Copilot to generate a new API endpoint. Thanks to `copilot-instructions.md`, Copilot knows it should use Express.js, parameterized queries, error handling with appropriate status codes, and comments in English.

---

## `architecture.md`

### What it is for
Describes the **project architecture**: folder structure, main components, data flow, technologies used, and how the different parts of the application communicate with each other.

### When to use it
- When working on **features that involve multiple parts** of the system (frontend + backend).
- When you need to understand **how components interact** with each other.
- When a new team member needs to **get oriented** in the project.
- When asking Copilot to make **architectural changes** (adding a new service, changing the database, etc.).

### What to include
- Architecture diagram (even in ASCII format).
- Description of main components.
- API endpoints with request/response details.
- Database schema.
- End-to-end data flow.
- Commands to run the project.

### Example use case
> You want to add an authentication system. Copilot reads `architecture.md`, understands that the frontend communicates with the backend via REST API on port 3000, and can suggest where to add the authentication middleware and how to modify the Astro components to handle login.

---

## `agents.md`

### What it is for
Defines **custom Copilot agents**, which are specialized profiles with specific context and instructions for certain areas of the project. Each agent has a dedicated "role."

### When to use it
- When the project has **distinct functional areas** (backend, frontend, database, testing).
- When you want Copilot to respond with **specialized knowledge** for a specific area.
- When different developers work on different parts of the project and need **targeted assistance**.

### What to include
- Agent name (e.g., `@todo-backend`).
- Specific context for the area (files, technologies, conventions).
- Response guidelines.
- Concrete usage examples.

### Example use case
> You are working only on the backend and write `@todo-backend Add a search endpoint for todos`. The agent already knows it should use Express.js, parameterized queries, and the SQLite database, without needing to specify it every time.

---

## `skills.md`

### What it is for
Defines **reusable skills**, which are standardized templates and actions that Copilot can perform to automate recurring tasks in the project.

### When to use it
- When you have **repetitive patterns** in the code (e.g., creating a new endpoint, a new component, a new test).
- When you want to **standardize** how certain types of code are generated.
- When you want new developers to produce code **consistent** with existing conventions.
- When you want to **speed up** common tasks with ready-made templates.

### What to include
- Skill name and description.
- Required parameters.
- Generated code template.
- At least one complete practical example.

### Example use case
> You need to add 5 new REST endpoints. Instead of describing the structure each time, you use the "Create REST Endpoint" skill that automatically generates the code with the correct structure (validation, error handling, parameterized queries).

---

## `prompt.md`

### What it is for
It is a **prompt library** organized by category. It contains tested and optimized prompts to get the best results from Copilot in the specific context of the project.

### When to use it
- As a **quick reference** when you don't know how to phrase a request to Copilot.
- When you want to **share effective prompts** with the team.
- During **pair programming sessions** or workshops with Copilot.
- When you want to ensure you get **consistent, high-quality results**.

### What to include
- Prompts organized by category (backend, frontend, tests, DevOps, etc.).
- Specific prompts with references to project files.
- Prompts for common and recurring tasks.

### Example use case
> A new developer needs to write tests for an endpoint. They open `prompt.md`, find the "Backend tests" prompt, and paste it into Copilot Chat, immediately getting a complete test suite that conforms to the project conventions.

---

## General Best Practices

1. **Keep files up to date**: When you add new features or change the architecture, also update the Copilot configuration files.

2. **Be specific**: The more context you provide, the better Copilot's suggestions will be. Include file names, ports, technologies, and specific versions.

3. **Use practical examples**: Templates and concrete examples help Copilot understand exactly the style and conventions you want to follow.

4. **Organize by area**: Separate instructions by area (backend, frontend, tests) to make navigation and maintenance easier.

5. **Document non-obvious conventions**: Conventions like "comments in English" or "variable names in English" cannot be inferred from code alone — document them explicitly.

6. **Iterate and improve**: Try the prompts, evaluate the results, and refine the instructions over time to get increasingly accurate responses.
