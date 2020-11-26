const express = require('express');
const ejs = require('ejs');
const GetHompageContent = require('./serverJs/GetHompageContent');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', async (req, res) => {

  const homepageContent = await new GetHompageContent().init();
  const headline = (await homepageContent.getHeadline()).formattedValue;

  res.render('pages/home', { content: {
    banner: {
      headline: headline,
      subHeadline: 'Also Testing'
    }
  } });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
