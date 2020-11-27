const express = require('express');
const ejs = require('ejs');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const GetHompageContent = require('./serverJs/GetHompageContent');
const GetPortfolioContent = require('./serverJs/GetPortfolioContent');
const GetAboutContent = require('./serverJs/GetAboutContent');

const app = express();
const config = require('../build/webpack.base.config');
const compiler = webpack(config);
const port = 3000;

app.set('view engine', 'ejs');
if ( process.env.NODE_ENV === 'development' ) {
  app.use(
    webpackDevMiddleware(compiler)
  );
}
app.use(express.static('public'));

app.get('/', async (req, res) => {

  const homepageContent = await new GetHompageContent().init();
  const headline = await homepageContent.getHeadline();
  const subHeadline = await homepageContent.getSubHeadline();
  const desktopImage = await homepageContent.getDesktopImage();
  const mobileImage = await homepageContent.getMobileImage();

  res.render('pages/home', { content: {
    metaTitle : 'Homepage',
    banner: {
      headline: headline,
      subHeadline: subHeadline
    },
    image: {
      desktop: desktopImage,
      mobile: mobileImage
    }
  } });
});

// portfolio page
app.get( '/portfolio', async (req, res) => {

  const portfolioContent = await new GetPortfolioContent().init();
  const headline = await portfolioContent.getHeadline();
  const subHeadline = await portfolioContent.getSubHeadline();
  const portfolioItems = await portfolioContent.getPorfolioItems();

  res.render('pages/portfolio', { content: {
    metaTitle : 'Portfolio',
    banner: {
      headline: headline,
      subHeadline: subHeadline
    },
    portfolioItems
  } })

} );

app.get('/about', async (req, res) => {

  const aboutContent = await new GetAboutContent().init();
  const headline = await aboutContent.getHeadline();
  const subHeadline = await aboutContent.getSubHeadline();
  const sections = await aboutContent.getSections();

  res.render('pages/about', { content: {
    metaTitle : 'About',
    banner: {
      headline: headline,
      subHeadline: subHeadline
    },
    sections
  } });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
