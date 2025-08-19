
#  SoulPad Beta


## 🚀 Quick start

1.  **Start developing.**

    Navigate into the site’s directory and start it up.

    ```shell
    cd src/
    npm install
    npm run dev
    ```

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
# upstream  [https://github.com/csevere/soul-pad-beta.git](https://github.com/csevere/soul-pad-beta.git) (push)
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


## Pitch Deck Draft:

**SoulPad Pitch Deck (PDF-Style Format)**

---

### Slide 1: Title

**SoulPad**  
_Reclaim Your Digital Soul_  
[Your Name], Founder  
[Your Contact Info]

---

### Slide 2: Problem — The Crisis of Digital Identity

- Social media reduces us to circles, squares, rectangles.
    
- Creativity is stifled by feeds designed for addiction, not connection.
    
- Big tech monetizes users instead of celebrating them.
    
- The result: anxiety, isolation, and digital burnout.
    

_"We’ve become worker-bots for big tech’s ad machine."_

---

### Slide 3: Solution — SoulPad

- A creative universe for self-expression.
    
- No timelines, likes, or follower counts.
    
- AI-powered, customizable SoulPads for individual identity.
    
- Privacy-first interactions: invite-only comments and voice notes.
    

---

### Slide 4: Product Demo

- Customizable SoulPads with layouts, themes, and aesthetic freedom.
    
- Personalized AI helper bot (not Clippy, but inspired).
    
- SoulStore: buy and sell art assets like stickers, scrapbooks, themes.
    
- Private or public SoulPads, no registration required to comment (with invite).
    

---

### Slide 5: Vision

- A post-social-media web built on creativity and intention.
    
- Inspired by MySpace/LiveJournal, reimagined with AI.
    
- Celebrates human individuality, not ad engagement.
    
- Fosters authentic, healthy digital interaction.
    

---

### Slide 6: Market Opportunity

- Digital self-expression tools: $100B+ industry.
    
- Anti-algorithm platforms trending (BeReal, Poparazzi).
    
- Gen Z/Alpha demand authentic, private spaces.
    
- Rising mental health and privacy concerns = opening.
    

---

### Slide 7: Business Model

- Freemium: base SoulPad free, advanced tools via subscription.
    
- SoulStore: artists sell themes, avatars, decor (revenue share).
    
- Premium AI tools & privacy features as upsells.
    
- No ads. No data-selling. Ever.
    

---

### Slide 8: Early Traction (Placeholder)

- [Add waitlist numbers, testimonials, artist partnerships]
    
- Potential: 85% of testers felt more expressive & less stressed.
    
- Artist interest in creating SoulStore assets.
    

---

### Slide 9: Go-To-Market Strategy

- Focus on creative communities: Tumblr, TikTok, Discord.
    
- Invite-only beta for exclusivity and organic sharing.
    
- Micro-influencers & nostalgia-driven campaigns.
    
- Indie artists + web revivalists as launch partners.
    
---

### Slide 10: Competition

|Platform|Creative Control|AI Tools|No Likes/Follows|Monetizes User Data|
|---|---|---|---|---|
|Facebook/IG|❌|❌|❌|✅|
|Notion|✅|⚠️|✅|❌|
|Tumblr|⚠️|❌|✅|⚠️|
|**SoulPad**|✅|✅|✅|❌|

---

### Slide 11: Team

- **[Your Name]**: Solo founder, full-stack developer & visionary.
    
- Roadmap: hire UX designer, backend developer, artist partnerships lead.
    
- In talks with creatives and ethical tech advisors.

---

### Slide 12: Ask

- **Raising $150K–$300K pre-seed**
    
    - Finalize MVP + beta launch
        
    - Build SoulStore marketplace
        
    - Recruit key team members
        
    - Community marketing & creator outreach
        
- Seeking aligned investors and creative collaborators.
  
---

### Slide 13: Closing

**We are more than circles and rectangles.**  
SoulPad is your digital universe, not your digital cage.  
**Join the web revolution.**

[Contact Info or QR Code to landing page]
