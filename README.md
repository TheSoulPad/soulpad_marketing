<h1 align="center">
  SoulPad Beta
</h1>

## 🚀 Quick start

1.  **Start developing.**

    Navigate into the site’s directory and start it up.

    ```shell
    cd soul-pad-beta/
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
