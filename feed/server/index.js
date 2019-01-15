const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const FeedDB = require('../database/Models/FeedDB.js');

const app = express();

app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// feed endpoint
app.get('/espn/feeds', (req, res) => {
  FeedDB.find({}, (err, data) => {
  })
    .limit(10)
    .sort({ timestamp: 1 })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.err(err);
    });
});

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
