const express = require('express');
const bodyParser = require('body-parser');
const ScheduleDB = require('../database/Models/ScheduleDB.js');
const FeedDB = require('../database/Models/FeedDB.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Schedule endpoint
app.get('/espn/schedules', (req, res) => {
  ScheduleDB.find({}, (err, data) => {
  })
  .limit(17)
  .sort({week: 1})
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    console.err(err);
  })
})

// feed endpoint
app.get('/espn/feeds', (req, res) => {
  FeedDB.find({}, (err, data) => {
  })
  // 3 entries per game
  .limit(51)
  .sort({timestamp: 1})
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    console.err(err);
  })
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

