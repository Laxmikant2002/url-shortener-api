const express = require('express');
const urlRoute = require('./routes/url');
const { connectToMongoDB } = require('./connect');
const URL = require('./models/url');



const app = express();
const PORT = 8001;

app.use("/url", urlRouter);

connect('mongodb://localhost:27017/url_api')
  .then(() => console.log('Connected to MongoDB'))
  app.use(express.json());

  app.use("/url", urlRouter());

  app.get('/:shortId', async (req, res) => {
    const { shortId } = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
      shortId
    }, {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        }
      },
    });
    res.redirect(entry.redirectURL);
  })

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});