const mongoose = require('mongoose');
const onlineDb = require('../../config/keys');

mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is connected to the Schedules database');
});


const scheduleSchema = {
  id: { type: Number, unique: true },
  vs: String,
  city: String,
  team: String,
  teamlogo: String,
  week: Number,
  date: String,
  opponent: String,
  opponentlogo: String,
  result: String,
  winloss: String,
  wl: String,
  link: String,
  stats: {
    playerpass: String,
    playerrush: String,
    playerrec: String,
    pass: Number,
    rush: Number,
    rec: Number,
  },
  feed: String,
};

const ScheduleDB = mongoose.model('Schedule', scheduleSchema);

module.exports = db;
module.exports = ScheduleDB;
