# Banane plantée

[![Netlify Status](https://api.netlify.com/api/v1/badges/c113e605-aae3-494e-ad45-195f488a2942/deploy-status)](https://app.netlify.com/sites/goofy-kare-98e46a/deploys)

**Note:** This repository uses [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/).

## Features

- A simple landing page with blog functionality built with Netlify CMS
- Create Blog posts from Netlify CMS
- Tags: Separate page for posts under each tag
- Uses Bulma for styling, but size is reduced by `purge-css-plugin`
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Netlify deploy configuration
- Perfect score on Lighthouse for SEO, Accessibility, Performance and Best Practices
- PWA

## Prerequisites

- Node
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

### Access Locally

```
$ yarn
$ netlify dev # or ntl dev
```

This uses the new [Netlify Dev](https://www.netlify.com/products/dev/?utm_source=blog&utm_medium=netlifycms&utm_campaign=devex) CLI feature to serve any functions you have in the `lambda` folder.

To test the CMS locally, you'll need to run a production build of the site:

```
$ npm run build
$ netlify dev # or ntl dev
```

To run in production mode you can do

```
$ gatsby build
$ gatsby serve
```

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.
