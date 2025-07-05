# 🧱 Monorepo with Turborepo, Next.js, Storybook, and Shared Packages

This monorepo is powered by [Turborepo](https://turbo.build/repo) and includes a modern web stack featuring Next.js for the web application, Storybook for UI component development, and shared packages for consistent configurations and UI components.

## ✨ Features

- 🧱 **Turborepo** — high-performance build system for JavaScript and TypeScript monorepos
- ⚡️ **Next.js** — full-stack React framework for the `web` app
- 📕 **Storybook** — UI component development and documentation
- 🎨 **shadcn/ui** — beautifully designed and accessible components
- 🧹 **Prettier** — consistent code formatting across the entire repo
- ✅ **ESLint** — unified linting with shared rules
- 🛠️ **TypeScript** — type safety with shared configs
- 📦 **pnpm** — fast and efficient package management
- 🪝 **Husky & lint-staged** — modern native Git hooks
- 🐳 **Docker** — containerization for consistent development and production environments

## 📦 Repository Structure

```
apps/
├── web/           # Next.js application
└── storybook/     # Storybook for UI components

packages/
├── eslint-config/     # Shared ESLint configuration
├── typescript-config/ # Shared TypeScript configuration
└── ui/                # Shared UI components (built with shadcn/ui)
```

## 🛠️ Getting Started

1. **Install dependencies**

```bash
pnpm install
```

2. **Run the development server**

To start all apps in parallel:

```bash
pnpm dev
```

Or start individually:

```bash
# Web app
pnpm --filter web dev
```

## 📚 Adding new shadcn/ui components

To add new components using shadcn/ui, follow these steps:

1. **Move to the `ui` package directory:** `cd packages/ui`
2. **Run the shadcn CLI to generate a new component:** `pnpx shadcn add ...`

## 📖 Available Scripts

- **Start** all apps in development mode: `pnpm run dev`
- **Start** the web app in development mode: `pnpm run dev --filter web`
- Start **Storybook**: `pnpm run storybook`
- **Build all** apps: `pnpm run build`
- **Build Storybook**: `pnpm run storybook:build`
- **Lint** the codebase: `pnpm run lint`
- **Fix linting** issues: `pnpm run lint:fix`
- **Format** the codebase: `pnpm run format`

## 📁 Shared Packages

- `eslint-config`: Centralized ESLint configuration used across all apps
- `typescript-config`: Shared `tsconfig` base for consistent type-checking
- `ui`: Common UI components built with shadcn/ui and Tailwind CSS

## 🤝 Contributing

We welcome contributions!

If you'd like to contribute, please read our [Contribution Guidelines](CONTRIBUTING.md) first.  
It covers everything from setting up the project to creating a pull request.

### Quick steps:

- Create a feature branch (`feat/your-feature-name`)
- Make your changes following our linting and formatting rules
- Test your updates in both `web` and `storybook`
- Run `pnpm lint` and `pnpm format`
- Open a pull request with a clear description

Thanks for helping make this project better! 🙌
