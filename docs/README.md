# Publish localThemes.json via GitHub Pages

This repository includes a JSON export of the project's themes at `api/localThemes.json`.

To publish the JSON as a public URL using GitHub Pages (no external account or hosting required):

1. Copy `api/localThemes.json` into the `docs/` folder (this repository already provides a script to do that):

   node scripts/publishLocalThemes.js

2. Commit and push the `docs/localThemes.json` file to your repository.

3. In the repository settings on GitHub, go to Pages and set the source to `Deploy from a branch` -> select the branch (e.g., `main` or current branch) and the folder `docs/`.

4. Save — GitHub will publish the site. The JSON will be available at:

   https://<your-username>.github.io/<your-repo>/localThemes.json

Notes:

- If you prefer automated deployment, we can add a GitHub Actions workflow to copy `api/localThemes.json` into `docs/` and push on merge.
- Alternatively, I can create a public gist or deploy a small Netlify site if you want a separate URL.
