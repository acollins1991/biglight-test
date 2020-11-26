const express = require('express');
const ejs = require('ejs');
const GetHompageContent = require('./serverJs/GetHompageContent');
const GetPortfolioContent = require('./serverJs/GetPortfolioContent');
const GetAboutContent = require('./serverJs/GetAboutContent');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))

// homepage
app.get('/', async (req, res) => {

  const homepageContent = await new GetHompageContent().init();
  const headline = await homepageContent.getHeadline();
  const subHeadline = await homepageContent.getSubHeadline();
  const desktopImage = await homepageContent.getDesktopImage();
  const mobileImage = await homepageContent.getMobileImage();

  res.render('pages/home', { content: {
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
