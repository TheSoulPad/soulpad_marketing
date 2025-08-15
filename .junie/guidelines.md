Project: SoulPad Beta — Development Guidelines

Audience: Experienced developers working with Gatsby 5 + TypeScript + Jest + React + styled-components + MUI.

1. Build and Configuration

- Node.js version
  - Target Node 18 LTS. Gatsby v5 is tested against Node 18; Node 20 works but some plugins may lag behind. If you must use Node 20, test thoroughly (especially font-loader and Netlify CMS integration).

- Install and bootstrap
  - npm ci to install with the exact lockfile.
  - Useful scripts (package.json):
    - npm run dev: Gatsby develop server (hot-reload).
    - npm run build: Static production build to public/.
    - npm run serve: Serve the production build locally.
    - npm run clean: Clear Gatsby cache (important when altering GraphQL or plugin config).
    - npm run typecheck: TypeScript type-check without emit.
    - npm run format: Prettier for src/**/*.{js,jsx,ts,tsx,json,md}.
    - npm test: Run Jest test suite.
    - npm run fix: typecheck + format + test.

- Gatsby configuration
  - Config at gatsby-config.ts with:
    - Content: gatsby-source-filesystem -> ./src/pages.
    - Styling: styled-components; also MUI with styled-engine-sc wired by dependency (@mui/styled-engine-sc) to avoid emotion.
    - Markdown: gatsby-transformer-remark.
    - CMS: gatsby-plugin-netlify-cms (+ netlify-cms-app dependency).
    - Fonts: gatsby-plugin-google-fonts and gatsby-omni-font-loader (custom + web fonts). The omni loader uses both self-hosted CSS from /static/fonts/... and Google Fonts URLs.
  - GraphQL typegen is enabled (graphqlTypegen: true) for better IDE support. Gatsby will output types into .cache.

- TypeScript configuration
  - tsconfig.json (jsx: react, lib: [dom, esnext], strict mode). The repo compiles via Gatsby/babel; there is no separate tsc build output (tsc used for type checking only).

- Babel/Jest transform
  - jest-preprocess.js uses babel-preset-gatsby and @babel/preset-typescript. This allows importing TS/TSX directly in tests.

2. Testing

- Test tooling overview
  - Runner: Jest 29, Environment: jsdom, React Testing Library is available (@testing-library/react, @testing-library/jest-dom).
  - jest.config.js highlights:
    - transform: ^.+\.[jt]sx?$ -> jest-preprocess.js (babel-jest).
    - transformIgnorePatterns: allow-transforms for gatsby, gatsby-script, gatsby-link.
    - moduleNameMapper:
      - CSS modules -> identity-obj-proxy.
      - Asset files -> <rootDir>/__mocks__/file-mock.js (NOTE: this mock file is not present by default; see below).
    - testPathIgnorePatterns: node_modules, .cache, public.
    - testEnvironment: jsdom with url http://localhost.

- Running tests
  - All tests: npm test
  - Single test file (recommended when iterating): npx jest path/to/file.test.(ts|tsx|js)
  - Pattern by name: npx jest -t "test name substring"
  - Watch mode: npx jest --watch (or npm test -- --watch)

- Adding new tests
  - Discovery: Jest will find tests in any of:
    - __tests__/** with .test or .spec extensions.
    - Files named *.test.(js|jsx|ts|tsx) or *.spec.(js|jsx|ts|tsx).
  - Prefer colocating tests under src/**/__tests__ for component suites, or use a top-level __tests__ for utility tests.
  - For React components:
    - Use @testing-library/react render and @testing-library/jest-dom matchers.
    - Avoid importing Gatsby-specific modules (gatsby, Link) unless you mock them (see Mocks below).

- Mocks and common pitfalls (Gatsby + Jest)
  - Asset/file mocks: jest.config.js maps assets to <rootDir>/__mocks__/file-mock.js but the file isn’t present. If a test (or component under test) imports images/fonts/etc., add the mock file temporarily for your test session:
    - File: __mocks__/file-mock.js
      module.exports = "test-file-stub";
    - You can also add a style mock if needed (already handled by identity-obj-proxy for css/scss, etc.).
  - Gatsby module mocks: If you test components that import gatsby (e.g., Link), add a Gatsby mock:
    - File: __mocks__/gatsby.js
      module.exports = {
        ...jest.requireActual('gatsby'),
        graphql: jest.fn(),
        StaticQuery: jest.fn(),
        useStaticQuery: jest.fn(),
        Link: ({ to, ...rest }) => require('react').createElement('a', { href: to, ...rest }),
      };
  - jsdom URL: jest.config sets a default URL. If tests rely on window.location or URL APIs, they will be defined.
  - transformIgnorePatterns: Only gatsby* packages are transformed. If you import other un-transpiled ESM from node_modules, you may need to extend transformIgnorePatterns to include them.

- Example: simple test used to validate the setup
  - During this session, we validated the Jest setup with a pure TS module import (no assets):
    - Temporary test file: __tests__/colors.test.js
      const { colors } = require('../src/styles/retro00/colors.ts');
      describe('colors theme', () => {
        it('contains expected purple value', () => {
          expect(colors.text01).toBe('#781acd');
        });
      });
    - It passes when run individually: npx jest __tests__/colors.test.js
  - Note: Running the full suite (npm test) currently reports failing tests in src/__tests__/AboutPage.test.tsx and src/__tests__/PageNavigation.test.tsx. If you need green CI, address those suites or temporarily filter to the specific tests you’re iterating on (e.g., by path or name) while developing.

3. Development Notes and Conventions

- Styling
  - The app primarily uses styled-components v6. MUI is configured to use the styled-components engine (@mui/styled-engine-sc). Avoid mixing emotion-based styling unless you explicitly configure interop.
  - There is an existing theme-like palette in src/styles/retro00/colors.ts. Prefer consuming that object in components where appropriate to keep consistent visuals.

- Fonts and performance
  - gatsby-omni-font-loader is configured with both web and custom fonts. When modifying fonts:
    - Keep mode: 'async' and enableListener: true to manage FOUT.
    - For self-hosted fonts, place assets under static/fonts and reference via /fonts/... URLs.

- CMS
  - gatsby-plugin-netlify-cms + netlify-cms-app are included. If you build locally and CMS scripts are referenced in public/admin, ensure the paths remain consistent with Netlify deploy context.

- GraphQL
  - graphqlTypegen: true helps with TS IntelliSense. If you add GraphQL queries, run npm run dev at least once to regenerate typings under .cache.

- Caching and gotchas
  - When you change gatsby-config.ts, run npm run clean to clear the cache and then run dev/build again. Stale cache often causes unexpected plugin or GraphQL behavior.

- Code quality
  - Use npm run typecheck before commits to catch TS issues early.
  - Use npm run format to keep consistent formatting; CI/CD may assume formatted code.

4. Debugging Tips

- Jest
  - If a test fails due to ESM in node_modules, extend transformIgnorePatterns to allow transforming that package.
  - For components importing gatsby or window-dependent APIs, provide targeted mocks or guard those imports (e.g., dynamic import in useEffect).

- Gatsby runtime
  - For SSR issues, confirm code doesn’t access window/document at module top level. Wrap such access in effects or check typeof window !== 'undefined'.

5. Reproducible Steps Summary

- Dev server: npm ci && npm run dev
- Production build: npm run build && npm run serve
- Type checking: npm run typecheck
- Run entire tests: npm test (note: two existing suites currently failing)
- Run a single test (validated in this session): npx jest __tests__/colors.test.js

Housekeeping for this session
- We created a temporary test file to validate the test flow and then removed it after verification, as requested. Only this .junie/guidelines.md is retained.
