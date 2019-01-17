const mongoose = require('mongoose');
const onlineDb = require('../../config/keys');

mongoose.connect(onlineDb.mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is connected to the Feeds database');
});


const feedSchema = {
  id: { type: Number, unique: true },
  author: String,
  authorphoto: String,
  title: String,
  bigphoto: String,
  smallphoto: String,
  newsfeed: String,
  videoclip: String,
  timestamp: String,
};

const FeedDB = mongoose.model('Feed', feedSchema);

module.exports = db;
module.exports = FeedDB;
