const express = require('express');
const ejs = require('ejs');
const GetHompageContent = require('./serverJs/GetHompageContent');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
