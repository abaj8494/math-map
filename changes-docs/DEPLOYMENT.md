# GitHub Pages Deployment Guide

## ✅ Build Complete

The static site has been successfully built to the `docs` folder and is ready for GitHub Pages deployment.

## 📦 What Was Done

1. **Updated svelte.config.js**
   - Changed output directory from `build` to `docs`
   - Added base path configuration for GitHub Pages: `/math-map`
   - This assumes your repository name is `math-map`

2. **Built the Production Site**
   - Ran `NODE_ENV=production npm run build`
   - Output: `docs` folder with all static files
   - Added `.nojekyll` file to prevent Jekyll processing

## 🚀 Deploy to GitHub Pages

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Build and deploy math-map to GitHub Pages"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/docs`
4. Click **Save**

### Step 3: Access Your Site

After a few minutes, your site will be available at:
```
https://[your-username].github.io/math-map/
```

## 🔧 If Repository Name is Different

If your repository is named something other than `math-map`, update `svelte.config.js`:

```javascript
paths: {
    base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
}
```

Then rebuild:
```bash
NODE_ENV=production npm run build
```

## 📝 Local Preview

To preview the production build locally:

```bash
npm run preview
```

Note: This will preview without the base path, so some assets may not load correctly. The actual GitHub Pages deployment will work properly.

## ✨ Features Deployed

- 3D Mathematical Topics Visualization with Three.js
- Interactive cards with contributor information
- Timeline axis with Pure/Applied Math separation
- Search functionality for finding paths between topics
- List view with sorting options
- Clickable cards from any distance
- Back button navigation
- Contributor detail popups with photos and dates
- Mobile responsive design

## 🔄 Future Updates

To deploy updates:

1. Make your changes
2. Run the build command:
   ```bash
   NODE_ENV=production npm run build
   ```
3. Commit and push:
   ```bash
   git add docs
   git commit -m "Update deployment"
   git push origin main
   ```

GitHub Pages will automatically update within a few minutes.

