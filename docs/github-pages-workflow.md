# GitHub Pages Deployment Workflow

This project uses three workflows that share a common build process:

```
.github/workflows/
├── _build.yml     # Reusable build workflow
├── preview.yml    # PR previews
├── staging.yml    # Staging on main
└── release.yml    # Production deploys
```

## Triggers

| Workflow      | Event                            | Environment  |
| ------------- | -------------------------------- | ------------ |
| `preview.yml` | PR to `main` or `Updates-Branch` | preview      |
| `staging.yml` | Push to `main`                   | staging      |
| `release.yml` | Release published or manual      | github-pages |

## How It Works

### Build (`_build.yml`)

All workflows call this reusable workflow which:

- Checks out the repo
- Sets up Node.js 24 with npm caching
- Runs `npm ci` and `npm run build`
- Uploads `dist/` as a GitHub Pages artifact

### Deploy

Each workflow has its own deploy job:

- **Preview**: Uses `rossjrw/pr-preview-action` to deploy to `pr-preview/pr-[number]/` subdirectory
  - Automatically posts preview URL as PR comment
  - Auto-cleans up when PR closes
- **Staging**: Uses `peaceiris/actions-gh-pages` to deploy to `staging/` subdirectory
  - Deploys to separate staging URL for preview before production
  - Triggers on push to `main` or `Updates-Branch`
- **Production**: Uses `peaceiris/actions-gh-pages` to deploy to gh-pages branch root
  - Updates main site URL on release or manual trigger
  - Only deploys the production build to root

## Deployment URLs

- **Production**: `https://it-siciliamia.github.io/BlueHouse_New/`
- **Staging**: `https://it-siciliamia.github.io/BlueHouse_New/staging/`
- **PR previews**: `https://it-siciliamia.github.io/BlueHouse_New/pr-preview/pr-[number]/`

## GitHub Pages Configuration

The repository must be configured for **branch-based deployment**:

1. Go to `Settings > Pages`
2. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** / **root**
3. Save changes

This configuration allows:

- Production deploys to the root site (main website)
- Staging deploys to `/staging/` subdirectory (preview before production)
- PR previews deploy to `/pr-preview/pr-[number]/` subdirectories (isolated per PR)
- Each environment is isolated and doesn't interfere with others
- Automatic cleanup of PR previews when PRs close

## Required Secrets

Add these in Settings → Secrets and variables → Actions:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

Missing secrets will fail the build early.

## Troubleshooting

| Issue                                   | Fix                                                             |
| --------------------------------------- | --------------------------------------------------------------- |
| Build fails with missing `VITE_*`       | Add the secret to repo settings                                 |
| Site doesn't update after deploy        | Confirm Pages source is "Deploy from a branch" (gh-pages)       |
| PR preview not deploying                | Check workflow has `contents: write` and `pull-requests: write` |
| PR preview URL conflicts with main site | Ensure staging/production use `exclude_assets: 'pr-preview/**'` |
| Need hotfix deploy                      | Use "Run workflow" on staging.yml or publish a release          |
