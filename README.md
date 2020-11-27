

# biglight-test
To run this repo:
- Create a .env file from the .env-example file and populate with the required values (I can provide these)
- Install npm packages: `npm i`
- Run and serve in production mode: `npm run serve:prod`
- Open http://localhost:3000 in a browser

## Approach
### Client side
I have taken a 'bare bones' approach in building the client-side assets, only using [modern-normalize](https://github.com/sindresorhus/modern-normalize) and custom CSS to keep the client-side assets as small as possible.

The CSS and JS are bundled using Webpack for optimisations, although this is just to show usage of a bundler as the JS only includes the lazy load functionality.

### Backend
The backend uses the EJS templating engine to manage page data, templates and partials, and I have used the [google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet) npm package to connect with the spreadsheet and inject data.

## Lighthouse scores
Performance scores are 97-100/100. Biggest markdown relates to the connection with the Google Spreadsheet.

## Improvements
- The connection with the Google Spreadsheet is quite slow. I started out using cell targeting to get content, but using rows might have been more efficient
- 'loadInfo' to setup the spreadsheet connection could be shared via some form of singleton class pattern so that it's only done on the first page
- Investigate a single-page app implementation (barba.js e.g.) for better user experience (page transitions e.g.)
- Code splitting with Webpack was the original intention but wasn't necessary given the small amount of JS involved
- Use ES modules to only import the lazy loading JS when necessary
- A static generator approach would help resolve the spreadsheet connection speed problem, favoured method for this would have been a mixture of Webpack and Gulp
- Not flagged by Google Lighthouse but inlining critical CSS to avoid render blocking

# Gatsby and WordPress
Gatsby is a high-level framework built on top of React, providing utilities to speed up development of advanced and high-performance web apps using static generation. The static architecture benefits from better server response time as the assets are pre-built, improved security as there is no attached backend, and fewer points of failure because the site simply serves static content and does not need to build anything when the server received a request.

The WordPress REST API exposes the stored content via endpoints, which could be consumed by the a Gatsby setup, however [Gatsby's own documentation on integrating with WordPress](https://www.gatsbyjs.com/guides/wordpress/) does not suggest this. Instead it directs the users to install plugins on the WordPress CMS to enable a GraphQL service exposing the content, and using the [gatsby-source-wordpress](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress-experimental/) plugin.

## PRPL

PRPL stands for; Push, Render, Pre-cache, Lazy Load. This described a web app architecture designed to improve web app performance, and is a core principal behind how Gatsby works.
