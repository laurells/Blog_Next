const siteMetadata = {
    title: 'Blog | Laurels Ozy Echichinwo',
    author: 'Laurels Ozy Echichinwo',
    headerTitle: 'Tech',
    description: 'My personal blog where I share my journey in technology',
    snippets: 'Reuseable code snippets collected by Laurels',
    language: 'en-us',
    theme: 'system', // system, dark or light
    siteUrl: '#',
    siteRepo: '#',
    siteLogo: '#',
    image: '/static/images/avatar.png',
    socialBanner: '/static/images/twitter-card.png',
    email: 'laurels.echichinwojr@gmail.com',
    github: 'https://github.com/laurells',
    twitter: '#',
    linkedin: 'https://www.linkedin.com/in/codewithlaurels/',
    website: '#',
    locale: 'en-US',
    analytics: {
      plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
      simpleAnalytics: false, // true or false
      umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
      googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
    },
    newsletter: {
      provider: 'emailOctopus',
    },
    comment: {
      provider: 'giscus',
      giscusConfig: {
        repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
        repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
        category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
        categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
        mapping: 'pathname',
        reactions: '1',
        metadata: '0',
        // theme example: light, dark, dark_dimmed, dark_high_contrast
        // transparent_dark, preferred_color_scheme, custom
        theme: 'light',
        inputPosition: 'bottom',
        lang: 'en',
        darkTheme: 'dark',
        themeURL: '',
      },
    },
    socialAccount: {
      twitter: 'Laurels_',
    },
  }
  
  module.exports = siteMetadata
  