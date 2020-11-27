
# biglight-test
To run this repo:
- Create a .env file from the .env-example file and populate
- Install npm packages: `npm i`
- Run and serve in production mode: `npm run serve:prod`
- Open http://localhost:3000 in a browser

## Approach
### Client side
I have taken a 'bare bones' approach in terms of client-side assets, only using [modern-normalize](https://github.com/sindresorhus/modern-normalize) and custom CSS to keep the client-side assets as small as possible.

The CSS and JS are bundled using Webpack for optimisations, although this is just to show usage of a bundler as the JS only includes the lazy load functionality.

### Backend
The backend uses the EJS templating engine to manage page data, templates and partials, and I have used the [google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet) npm package to connect with the spreadsheet and inject data.

## Lighthouse scores
Performance scores are 97-100/100. Biggest markdown relates to the connection with the Google Spreadsheet.

## Possible improvements
- The connection with the Google Spreadsheet is quite slow. I started out using cell targeting to get content, but using rows might have been more efficient. Also could share the 'loadInfo' via some form of singleton class pattern.
- Investigate a single-page app implementation (barba.js e.g.) for better user experience (page transitions e.g.)
- Code splitting with Webpack was my original intention but it wasn't necessary given the small amount of JS involved
- Use ES modules to only import the lazy loading JS when necessary
