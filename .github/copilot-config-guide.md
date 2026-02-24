# Guide to GitHub Copilot Customization

This guide explains the different ways you can customize GitHub Copilot's behavior in a repository. Each customization feature serves a different purpose — understanding the differences will help you choose the right one.

---

## Quick Reference

| Feature | What it is | Location | How it activates |
|---------|-----------|----------|-----------------|
| **Custom Instructions** | Always-on context applied to every interaction | `.github/copilot-instructions.md` | Automatic |
| **Path-Specific Instructions** | Instructions scoped to specific file types or directories | `.github/instructions/*.instructions.md` | Automatic (when matching files are involved) |
| **Custom Agents** | Specialist personas with their own instructions and tool access | `.github/agents/*.agent.md` | Manual — select from agent dropdown |
| **Agent Skills** | Folders of instructions and resources Copilot loads when relevant | `.github/skills/<name>/SKILL.md` | Automatic — chosen by Copilot when relevant |
| **Prompt Files** | Reusable, standalone prompt templates | `.github/prompts/*.prompt.md` | Manual — attach in Copilot Chat |

---

## Custom Instructions

**What they are:**
Custom instructions are natural language guidelines stored in Markdown files that Copilot reads automatically. They define your project's coding standards, conventions, and preferences so you don't have to repeat them in every prompt.

**Types:**
- **Repository-wide** (`.github/copilot-instructions.md`): Apply to every Copilot interaction in the repo. Use for general conventions like coding style, preferred frameworks, and security rules.
- **Path-specific** (`.github/instructions/*.instructions.md`): Apply only when Copilot is working on files matching a glob pattern defined in YAML frontmatter. Use for language-specific or directory-specific rules.

**When to use:**
Use custom instructions for standards and guidelines that should apply broadly — things like "use parameterized queries," "prefer `const` over `let`," or "write comments in English."

**Key characteristic:** Custom instructions are **always on**. They're silently included in every request to Copilot within their scope.

---

## Custom Agents

**What they are:**
Custom agents are specialized versions of the Copilot agent, defined as Markdown files with YAML frontmatter. Each agent has its own name, description, system prompt, and optionally restricted tool access. They act like **tailored teammates** that already know the context of a specific area of your project.

**File format:** `.github/agents/<agent-name>.agent.md`

```yaml
---
name: my-agent
description: What this agent specializes in
tools: ["read", "edit", "search"]  # optional, defaults to all tools
---

System prompt with detailed instructions for this agent's behavior...
```

**When to use:**
Use custom agents when your project has distinct areas that need different expertise — for example, a backend agent that knows the API conventions and a frontend agent that knows the UI framework. You select which agent to use from a dropdown in your IDE or on GitHub.com.

**Key characteristic:** Custom agents are **manually selected**. You choose them when you want specialized help for a specific area. They can also restrict which tools are available, making them useful for read-only auditing or documentation tasks.

**How agents differ from instructions:**
- Instructions are **automatic and universal** — they apply to everything.
- Agents are **manual and specialized** — you choose one when you need focused expertise.

---

## Agent Skills

**What they are:**
Agent skills are folders containing a `SKILL.md` file (and optionally scripts and other resources) that teach Copilot how to perform specific, repeatable tasks. Copilot automatically loads a skill when it determines the skill is relevant to what you're asking it to do.

**File format:** `.github/skills/<skill-name>/SKILL.md`

```yaml
---
name: skill-name
description: When and how Copilot should use this skill
---

Step-by-step instructions, templates, and examples...
```

**When to use:**
Use skills for detailed, multi-step procedures that Copilot should follow when performing a specific type of task — like creating a REST endpoint, writing a test suite, or running a database migration. Skills can also include scripts and resources alongside the `SKILL.md` file.

**Key characteristic:** Skills are **automatically selected by Copilot** based on relevance. The `description` field tells Copilot when to load the skill. You don't need to manually reference a skill — Copilot chooses it.

**How skills differ from instructions:**
- Instructions are **broad and always active** (e.g., "use English comments").
- Skills are **detailed and loaded on demand** (e.g., "here's how to create a REST endpoint step by step with templates").

**How skills differ from agents:**
- Agents are **personas** you select to get specialized help for an area.
- Skills are **procedures** that Copilot loads automatically when it recognizes a relevant task.

---

## Prompt Files

**What they are:**
Prompt files are reusable Markdown templates (`.prompt.md`) that you can attach to a Copilot Chat conversation. They work like saved prompts — you write the instructions once and reuse them with different inputs each time. They support YAML frontmatter for specifying agent mode, tools, and description, plus `{{variable}}` placeholders for user input.

**File format:** `.github/prompts/<name>.prompt.md`

```yaml
---
description: "What this prompt does"
agent: "agent"
tools: ["read", "edit", "execute", "search"]
---

Task instructions in Markdown...

## User Input

{{variableName}}
```

Prompt files can reference other files in the repo using relative Markdown links (e.g., `[index.js](../../backend/index.js)`) to provide additional context.

**When to use:**
Use prompt files for focused, single-purpose tasks that you run repeatedly with different inputs — like generating unit tests for an endpoint, creating a component from a spec, or running a code review checklist.

**Key characteristic:** Prompt files are **manually attached** in Copilot Chat. You select them from the attachment picker and optionally add your own message on top.

**How prompt files differ from skills:**
- Skills are **automatically chosen** by Copilot and focus on teaching Copilot *how* to do something.
- Prompt files are **manually selected** by you and focus on *what* you want Copilot to do right now.

**How prompt files differ from instructions:**
- Instructions are **always active** and provide background context.
- Prompt files are **one-time use** and provide a specific task to execute.

---

## Summary: When to Use What

| I want to... | Use |
|--------------|-----|
| Set coding standards that always apply | **Custom Instructions** (`.github/copilot-instructions.md`) |
| Set rules for specific file types (e.g., all `.ts` files) | **Path-Specific Instructions** (`.github/instructions/*.instructions.md`) |
| Get specialized help for a specific area (backend, frontend, testing) | **Custom Agents** (`.github/agents/*.agent.md`) |
| Teach Copilot a repeatable procedure it can auto-apply | **Agent Skills** (`.github/skills/<name>/SKILL.md`) |
| Save a prompt I reuse with different inputs | **Prompt Files** (`.github/prompts/*.prompt.md`) |

---

## Structure in This Repository

This repository contains examples of each customization type:

```
.github/
├── copilot-instructions.md          # Repository-wide coding conventions
├── architecture.md                   # Project architecture documentation
├── copilot-config-guide.md          # This guide
├── instructions/                     # Path-specific instructions (auto-applied)
│   ├── astro-frontend.instructions.md    # Astro + Bootstrap frontend standards
│   ├── express-backend.instructions.md   # Express.js + SQLite backend standards
│   ├── accessibility.instructions.md     # WCAG 2.2 AA accessibility guidelines
│   ├── code-review.instructions.md       # Code review checklist and priorities
│   ├── security.instructions.md          # OWASP-based secure coding guidelines
│   ├── code-comments.instructions.md     # Self-explanatory code commenting rules
│   └── github-actions.instructions.md    # CI/CD workflow best practices
├── agents/                           # Custom agents
│   ├── todo-backend.agent.md         # Express.js backend specialist
│   ├── todo-frontend.agent.md        # Astro frontend specialist
│   ├── todo-testing.agent.md         # Jest (backend) + Playwright (frontend) testing specialist
│   └── todo-database.agent.md        # SQLite database specialist
├── prompts/                          # Reusable prompt files
│   ├── add-rest-endpoint.prompt.md   # Add a new API endpoint
│   ├── create-astro-component.prompt.md  # Create a new UI component
│   ├── generate-backend-tests.prompt.md  # Generate a Jest test suite
│   ├── generate-frontend-tests.prompt.md # Generate Playwright E2E tests
│   ├── add-todo-filtering.prompt.md  # Add todo filter buttons
│   ├── add-dark-mode.prompt.md       # Add dark/light mode toggle
│   └── refactor-routes.prompt.md     # Separate routes into modules
└── skills/                           # Agent skills
    ├── create-rest-endpoint/SKILL.md # How to create REST endpoints
    ├── create-astro-component/SKILL.md   # How to create Astro components
    ├── generate-jest-tests/SKILL.md  # How to write Jest tests (backend only)
    ├── generate-playwright-tests/SKILL.md  # How to write Playwright E2E tests (frontend)
    ├── add-database-migration/SKILL.md   # How to write DB migrations
    └── frontend-error-handling/SKILL.md  # How to handle fetch errors
```

## Further Reading

- [Copilot Customization Cheat Sheet](https://docs.github.com/en/copilot/reference/customization-cheat-sheet)
- [About Custom Agents](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-custom-agents)
- [About Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Creating Custom Agents](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents)
- [Creating Agent Skills](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills)
- [About Customizing Copilot Responses](https://docs.github.com/en/copilot/concepts/prompting/response-customization)
