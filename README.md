# Deployment (GitHub Pages)

https://it-siciliamia.github.io/BlueHouse_New/

# Project Workflow

## Use Volta for Consistent Node Versions

This repo pins Node `24.11.0` and npm `11.6.2` via Volta (see `package.json`). Volta guarantees everyone runs the same toolchain:

1. **Install Volta once per machine**

   Linux/Mac

   ```bash
   curl https://get.volta.sh | bash
   ```

   Restart your shell so the `volta` binary is available.

   Windows

   ```
   winget install Volta.Volta
   ```

2. **Let Volta auto-manage Node/npm**  
   Inside the repo you do not have to think about versions—running `npm install`, `npm run dev`, etc. will automatically download and use the pinned Node/npm if they are not already cached. If you ever need them globally you can run `volta install node@24.11.0 npm@11.6.2`, but that is optional.

## Fresh Clone Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/it-siciliamia/BlueHouse_New.git
   cd BlueHouse_New
   ```

2. **Install dependencies (with Volta active)**

   ```bash
   npm install
   ```

3. **Create your task branch**

   ```bash
   git checkout -b feature/short-task-name
   ```

4. **Start the Vite dev server**
   ```bash
   npm run dev
   ```
   Vite prints a local URL (default `http://localhost:3000`). Keep this server running while you iterate.

## Collaboration Guidelines

- **Never push directly to `main` or `Final_Changes`** — all work should go through feature branches and PR reviews.
- **Keep branches fresh** — regularly pull from `main` and merge/rebase to avoid large conflict sets:
  ```bash
  git pull origin main
  git merge main   # or git rebase main
  ```
- **Commit early and often** with descriptive messages so reviewers understand the intent of each change.

Following these practices keeps the team on the same Node/npm versions, ensures Vite is the single source of truth for development, and keeps our Git/GitHub flow predictable.
