const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs/intro',
        permanent: true,
      },
    ]
  },
})
