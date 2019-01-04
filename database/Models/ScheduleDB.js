const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/espn/schedules');

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB is connected to the Schedules database');
});


const scheduleSchema = {
    id: {type: Number, unique: true},
    team: String,
    teamlogo: String,
    week: Number,
    date: String,
    opponent: String,
    opponentlogo: String,
    result: String,
    winloss: String,
    stats: {
      pass: Number,
      rush: Number,
      rec: Number
    },
    players: String,
    feed: String
  }

const ScheduleDB = mongoose.model('Schedule', scheduleSchema)

module.exports = db;
module.exports = ScheduleDB;














// var test = new Schedule(
//   {
//     id: 2,
//     team: "Los Angeles Rams",
//     teamlogo: "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
//     week: 2,
//     date: "08-Dec-2018",
//     opponent: "Atlanta Falcons",
//     opponentlogo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/oak.png&h=50&w=50",
//     result: "W 23-20",
//     winloss: "5-0",
//     stats: {
//       pass: 325,
//       rush: 128,
//       rec: 119
//     },
//     players: "Lorena Lyddon",
//     feed: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
//   }
// )

// test.save();

