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

- **Preview**: Uses `preview: true`, posts URL as PR comment
- **Staging**: Uses `preview: true` for non-production URL
- **Production**: Deploys to the main GitHub Pages site

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

| Issue                             | Fix                                      |
| --------------------------------- | ---------------------------------------- |
| Build fails with missing `VITE_*` | Add the secret to repo settings          |
| Site doesn't update after deploy  | Confirm Pages source is "GitHub Actions" |
| Need hotfix deploy                | Use "Run workflow" or publish a release  |
