# Deploying to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Push to GitHub

First, ensure your code is pushed to a GitHub repository:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** > **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**

That's it! The deployment will happen automatically.

### 3. Configure Repository Name

If your repository name is **NOT** `code-review-v1`, update the `basePath` and `assetPrefix` in `next.config.ts`:

```typescript
basePath: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : '',
```

Replace `YOUR-REPO-NAME` with your actual repository name.

## How It Works

- **Automatic Deployment**: Every push to the `main` branch triggers a deployment
- **GitHub Actions Workflow**: `.github/workflows/deploy.yml` handles the build and deployment
- **Static Export**: Next.js exports the app as static HTML/CSS/JS files
- **50 PR Pages**: Pre-generates PR detail pages for IDs 1-50 (configurable in `app/pr/[id]/page.tsx`)

## Deployment Status

After pushing, you can monitor the deployment:

1. Go to the **Actions** tab in your repository
2. Click on the latest workflow run
3. Once complete, your site will be available at:
   ```
   https://YOUR-USERNAME.github.io/code-review-v1/
   ```

## Local Testing

To test the production build locally:

```bash
# Build the static site
NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1 NODE_ENV=production npm run build

# Serve the out directory with any static server
npx serve out
```

## Troubleshooting

### Build Fails with Font Errors

The `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1` environment variable is required for Google Fonts to load during build. This is already configured in the GitHub Actions workflow.

### Wrong Base Path

If images or links don't work after deployment, double-check that the `basePath` in `next.config.ts` matches your repository name exactly.

### 404 on PR Detail Pages

PR detail pages are pre-generated for IDs 1-50. To add more pages, update the `generateStaticParams()` function in `app/pr/[id]/page.tsx`:

```typescript
export async function generateStaticParams() {
  return Array.from({ length: 100 }, (_, i) => ({ // Change 100 to desired count
    id: String(i + 1),
  }));
}
```

## Project Structure

```
code-review-v1/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── app/
│   ├── pr/
│   │   └── [id]/
│   │       ├── page.tsx        # Server component with generateStaticParams
│   │       └── PRDetailClient.tsx  # Client component with UI logic
│   └── ...
├── next.config.ts              # Next.js config with static export
└── public/
    └── .nojekyll               # Prevents GitHub Pages Jekyll processing
```

## Notes

- The site uses **hash-based routing** for PR IDs to work with static hosting
- All interactive features (tabs, modals, inline comments) work client-side
- Images are served unoptimized (required for static export)
