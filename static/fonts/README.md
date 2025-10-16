Place self-hosted font files here and reference them in gatsby-config via gatsby-omni-font-loader `custom` entries.

Example structure:

static/fonts/my-font/css/styles.css
static/fonts/my-font/woff2/my-font-regular.woff2

In `gatsby-config.ts`:

custom: [
{
name: 'My Font',
file: '/fonts/my-font/css/styles.css'
}
]

Note: When you add font files, commit them to your repository so they are available in production builds.
