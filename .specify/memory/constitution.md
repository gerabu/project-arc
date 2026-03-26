# Project Arc Constitution

## Core Principles

### I. Pragmatism & Over-Engineering

**Rules:**
- Prioritize pragmatism over theoretical purity
- Do not create unnecessary abstractions, excessive boilerplate, or overly complex patterns
- A simpler, more direct solution is preferred when it respects core DDD and SOLID principles
- Balance clean code with the need to deliver functional features efficiently

**Rationale:** This is a POC. Over-engineering delays delivery without proportionate value.

---

### II. Tech Stack Standards

**Rules:**
- Framework: Next.js (Fullstack) MUST be used
- Database & ORM: PostgreSQL with Drizzle ORM MUST be used
- API Layer: TanStack Query communicating via tRPC MUST be used
- Data Validation: Zod MUST be used for all input boundaries (tRPC routers and domain entities)
- Styling: Tailwind CSS combined with Tremor components MUST be used

**Rationale:** Consistency in tooling enables faster onboarding and predictable maintenance.

---

### III. Domain-Driven Design

**Rules:**
- Layers: Strictly separate Domain, Application (Use Cases), Infrastructure, and Presentation (tRPC)
- High Cohesion & Loose Coupling: Domain entities and logic MUST NOT depend on external frameworks, ORMs, or tRPC
- Presentation (tRPC): tRPC routers act ONLY as controllers. They MUST validate input via Zod, delegate execution to pure Application Use Cases, and map domain outputs/errors
- Error Handling: Use Custom Domain Error Classes (e.g., extending a base `DomainError`). The tRPC layer MUST catch these domain exceptions and translate them into standard `TRPCError` instances
- State & Variables: Global variables and unpredictable state mutations are STRICTLY FORBIDDEN

**Rationale:** DDD boundaries isolate business logic from infrastructure concerns, enabling testability and evolution.

---

### IV. Feature-Based Architecture

**Rules:**
- Feature Encapsulation: Code MUST be grouped by feature (e.g., `src/features/{featureName}/`)
- Atomic Design Scope: Implement Atomic Design (atoms, molecules, organisms) strictly WITHIN the scope of each feature
- A `shared` feature folder may exist for truly global UI elements, but its use must be minimized
- React Patterns: You MUST prioritize the React Composition Pattern and Compound Components to avoid "prop drilling" and massive configuration objects

**Rationale:** Feature isolation reduces coupling, clarifies ownership, and enables independent deployment.

---

### V. State Management

**Rules:**
- Client-side state: Use React Context when necessary
- Server state: Rely on TanStack Query cache
- Global variables: STRICTLY FORBIDDEN
- Unpredictable state mutations: STRICTLY FORBIDDEN

**Rationale:** Predictable state flow simplifies debugging and testing.

---

### VI. Testing Standards

**Rules:**
- Frameworks: Vitest + React Testing Library (Unit/Integration) and Playwright or Cypress (E2E)
- Structure: EVERY test MUST strictly follow the AAA pattern: Arrange, Act, Assert
- Add comments `// Arrange`, `// Act`, `// Assert` in test blocks to enforce this structure
- Coverage: All pure domain logic, use cases, and complex UI interactions must be unit-tested

**Rationale:** AAA structure enforces disciplined testing; coverage requirements ensure critical logic is validated.

---

### VII. Prohibited Patterns

**Rules:**
- `useEffect`: STRICTLY PROHIBITED unless absolutely necessary for synchronizing with external non-React systems (e.g., third-party DOM libraries, browser APIs)
- Global variables: STRICTLY FORBIDDEN

**Rationale:** useEffect is a common source of bugs and performance issues; imperative sync with external systems is the only justified exception.

---

## Technology Stack & Constraints

| Component | Technology | Constraint |
|-----------|------------|------------|
| Framework | Next.js | Fullstack required |
| Database | PostgreSQL | With Drizzle ORM |
| API | tRPC | Via TanStack Query |
| Validation | Zod | All input boundaries |
| Styling | Tailwind CSS + Tremor | Components required |
| Unit/Integration Tests | Vitest + RTL | AAA pattern mandatory |
| E2E Tests | Playwright or Cypress | Browser-based |

---

## Development Standards

**React Patterns:**
- Prioritize Composition Pattern and Compound Components
- Avoid prop drilling and massive configuration objects

**Error Handling:**
- Use Custom Domain Error Classes (extend base `DomainError`)
- tRPC layer MUST catch domain exceptions and translate to `TRPCError`

**State:**
- React Context for client-side state when necessary
- TanStack Query cache for server state

---

## Governance

**Amendment Procedure:**
- Amendments require a pull request with the proposed changes
- Single-approver review is sufficient for approval
- Amendments MUST update the constitution version and last amended date

**Versioning Policy:**
- MAJOR: Backward incompatible governance/principle removals or redefinitions
- MINOR: New principle/section added or materially expanded guidance
- PATCH: Clarifications, wording, typo fixes, non-semantic refinements

**Compliance:**
- All code reviews MUST verify alignment with these principles
- Complexity must be justified; simpler alternatives should be documented if rejected

**Version**: 1.0.0 | **Ratified**: 2026-03-26 | **Last Amended**: 2026-03-26

<!--
# Sync Impact Report
- Version change: N/A → 1.0.0 (initial creation)
- Added principles: I. Pragmatism, II. Tech Stack, III. DDD, IV. Feature-Based, V. State Management, VI. Testing, VII. Prohibited Patterns
- Added sections: Technology Stack & Constraints, Development Standards, Governance
- Templates requiring updates: ✅ All templates compliant (no updates needed)
- Follow-up TODOs: None
-->
