
#  SoulPad Beta


## 🚀 Quick start

1.  **Start developing.**

    Navigate into the site’s directory and start it up.

    ```shell
    cd src/
    npm install
    npm run dev
    ```

### Node.js version

- Target Node 22 LTS for development and builds (primary target for Gatsby 5 in this repo).
- If you use nvm, this project includes an `.nvmrc`. Run:

  ```bash
  nvm use
  # if Node 22 isn't installed yet
  nvm install
  ```

- Note: Gatsby v5 is tested against Node 18, but Node 22 is recommended here. If you encounter plugin issues (e.g., font loaders or Netlify CMS), check for updates or compatibility notes.

#### Node 22 caveats
- package.json enforces Node 22 via engines: "node": ">=22 <24". Use Node 22.x locally and in CI (nvm, Volta, or CI matrix).
- Some Gatsby plugins may lag on Node 22 support. If you hit build/runtime errors:
  - Update the plugin to the latest version and check its changelog/issues for Node 22 notes (common: font loaders and Netlify CMS integration).
  - Clear Gatsby cache after config/plugin changes: `npm run clean`.
  - If Jest fails due to ESM in dependencies, adjust `transformIgnorePatterns` in `jest.config.js` to allow transforming that package (gatsby* are already allowed).
- After changing gatsby-config.ts, always run `npm run clean` before `npm run dev` to avoid stale GraphQL/types.
- Prefer `npm ci` over `npm install` to match the exact lockfile when setting up in CI or fresh clones.

2.  **Open the code and start customizin!**

    The site is now running at http://localhost:8000

    Edit `src/pages/index.tsx` to real-time updates

3.  **Run linting and test before creating PR\***
    cmd: `npm run fix`

## **Technology Stack**

- **Front-End:**
  React, TypeScript

- **Back-End:**

  - Node.js
  - Nim
  - GraphQL for handling communication between front-end and back-end

- **Database:**

  - SQL to store user information, website data, templates, etc.

- **File Storage:**

  - Linode

- **Hosting & Cloud Infrastructure:**
  - Linode for cloud infrastructure



## 🧑‍💻 Development Workflow

To keep our project history clean and manageable, please follow this workflow for all contributions. This ensures that pull requests can be reviewed and merged smoothly.

### Step 1: Fork and Configure Your Remotes (One-Time Setup)

If you haven't already, configure your local repository to track the original "upstream" repository. This allows you to pull in changes from the main project.

```bash
# Add the main repository as a remote named "upstream"
git remote add upstream [https://github.com/csevere/soul-pad-beta.git](https://github.com/csevere/soul-pad-beta.git)

# Verify the remotes are configured
git remote -v
# origin    [https://github.com/csevere/soul-pad-beta.git](https://github.com/csevere/soul-pad-beta.git) (fetch)
# origin    [https://github.com/your-username/soul-pad-beta.git](https://github.com/your-username/soul-pad-beta.git) (fetch)
# origin    [https://github.com/your-username/soul-pad-beta.git](https://github.com/your-username/soul-pad-beta.git) (push)
# upstream  [https://github.com/csevere/soul-pad-beta.git](https://github.com/csevere/soul-pad-beta.git) (fetch)
# Set origin to your fork (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/soul-pad-beta.git

# Add the main repository as a remote named "upstream"
git remote add upstream https://github.com/csevere/soul-pad-beta.git

# Verify the remotes are configured
git remote -v
# origin    https://github.com/YOUR-USERNAME/soul-pad-beta.git (fetch)
# origin    https://github.com/YOUR-USERNAME/soul-pad-beta.git (push)
# upstream  https://github.com/csevere/soul-pad-beta.git (fetch)
# upstream  https://github.com/csevere/soul-pad-beta.git (push)
```

### Step 2: Sync Your Fork Before Starting New Work

Before creating a new branch, always make sure your `main` branch is up-to-date with the `upstream` repository.

```bash
# Switch to your local main branch
git checkout main

# Fetch the latest changes from the upstream repository
git fetch upstream

# Merge the upstream changes into your local main branch
git merge upstream/main
```

### Step 3: Create and Work on a Feature Branch

Create a new branch for your task from your updated `main` branch.

```bash
# Create a new branch with a descriptive name
git checkout -b my-awesome-feature
```

Now, make your code changes and commit them.

### Step 4: Rebase to Include Upstream Changes

Before you submit a pull request, other changes may have been merged into the `upstream/main` branch. You need to incorporate these changes into your feature branch using **rebase**.



This rewrites your branch's history to place your commits on top of the latest `main` branch commits, avoiding a "merge bubble" and keeping history linear.

```bash
# Make sure you are on your feature branch
git checkout my-awesome-feature

# Fetch the latest upstream changes
git fetch upstream

# Rebase your branch on top of the latest changes from upstream/main
git rebase upstream/main
```

**If you encounter conflicts** during the rebase, Git will pause and ask you to resolve them.
1.  Fix the conflicting files in your editor.
2.  Stage the resolved files: `git add .`
3.  Continue the rebase: `git rebase --continue`
4.  If you get stuck, you can abort: `git rebase --abort`

### Step 5: Push and Create a Pull Request

After a successful rebase, you will need to "force push" your changes to your fork (`origin`). Because rebase rewrites history, a normal `git push` will be rejected. Use `--force-with-lease` as a safer alternative to `--force`.

```bash
# Push the rebased branch to your fork.
git push --force-with-lease origin my-awesome-feature
```

Now you can go to GitHub and open a pull request from your `my-awesome-feature` branch! 🎉
