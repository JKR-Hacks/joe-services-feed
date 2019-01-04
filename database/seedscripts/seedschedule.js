const db = require('../Models/ScheduleDB.js');
const ScheduleDB = require('../Models/ScheduleDB.js');

const ramsSchedule =
[{
  "id": 1,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 1,
  "date": "28-Oct-2018",
  "opponent": "Arizona Cardinals",
  "opponentlogo": "https://pbs.twimg.com/profile_images/989890778477486081/c3i9tIF5_400x400.jpg",
  "result": "W 34-0",
  "winloss": "1-0",
  "stats": {
    "pass": 270,
    "rush": 141,
    "rec": 111
  },
  "players": "Cort Buckam",
  "feed": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio."
}, {
  "id": 2,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 2,
  "date": "08-Dec-2018",
  "opponent": "Atlanta Falcons",
  "opponentlogo": "https://images-na.ssl-images-amazon.com/images/I/71aiX9Umr3L._SX425_.jpg",
  "result": "W 23-20",
  "winloss": "2-0",
  "stats": {
    "pass": 325,
    "rush": 128,
    "rec": 119
  },
  "players": "Lorena Lyddon",
  "feed": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
}, {
  "id": 3,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 3,
  "date": "16-Sep-2018",
  "opponent": "Denver Broncos",
  "opponentlogo": "https://images.fun.com/products/51397/1-1/nfl-denver-broncos-logo-foam-sign.jpg",
  "result": "L 30-23",
  "winloss": "2-1",
  "stats": {
    "pass": 219,
    "rush": 207,
    "rec": 98
  },
  "players": "Jarrad Brushfield",
  "feed": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
}, {
  "id": 4,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 4,
  "date": "11-Sep-2018",
  "opponent": "Green Bay Packers",
  "opponentlogo": "https://i.axs.com/2015/05/promoted-media-optimized_55478e5a547f9.jpg",
  "result": "W 14-0",
  "winloss": "3-1",
  "stats": {
    "pass": 287,
    "rush": 62,
    "rec": 172
  },
  "players": "Kele Uridge",
  "feed": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
}, {
  "id": 5,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 5,
  "date": "10-Nov-2018",
  "opponent": "Kansas City Chiefs",
  "opponentlogo": "https://i.axs.com/2015/05/promoted-media-optimized_55666e8864d3f.jpg",
  "result": "W 39-10",
  "winloss": "4-1",
  "stats": {
    "pass": 366,
    "rush": 64,
    "rec": 140
  },
  "players": "Frieda Pinnion",
  "feed": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
}, {
  "id": 6,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 6,
  "date": "09-Nov-2018",
  "opponent": "San Francisco 49ers",
  "opponentlogo": "https://images.fun.com/products/51408/1-1/nfl-san-francisco-49ers-logo-foam-sign.jpg",
  "result": "W 35-23",
  "winloss": "5-1",
  "stats": {
    "pass": 425,
    "rush": 129,
    "rec": 201
  },
  "players": "Druci Bentame",
  "feed": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
}, {
  "id": 7,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 7,
  "date": "18-Nov-2018",
  "opponent": "Washington Redskins",
  "opponentlogo": "https://upload.wikimedia.org/wikipedia/en/1/18/Washington_Redskins_1000.png",
  "result": "L 30-23",
  "winloss": "5-2",
  "stats": {
    "pass": 360,
    "rush": 66,
    "rec": 125
  },
  "players": "Ashia Camilleri",
  "feed": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
}, {
  "id": 8,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 8,
  "date": "12-Dec-2018",
  "opponent": "Jacksonville Jaguars",
  "opponentlogo": "https://i.ytimg.com/vi/qb0j05FxoGs/maxresdefault.jpg",
  "result": "W 38-31",
  "winloss": "6-2",
  "stats": {
    "pass": 192,
    "rush": 68,
    "rec": 95
  },
  "players": "Celine Garrity",
  "feed": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
}, {
  "id": 9,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 9,
  "date": "13-Nov-2018",
  "opponent": "Buffalo Bills",
  "opponentlogo": "https://www.canalsidebuffalo.com/wp-content/uploads/2018/11/buffalo-bills-logo-transparent.png",
  "result": "L 45-35",
  "winloss": "6-3",
  "stats": {
    "pass": 274,
    "rush": 119,
    "rec": 224
  },
  "players": "Daphne Greenhouse",
  "feed": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
}, {
  "id": 10,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 10,
  "date": "10-Sep-2018",
  "opponent": "Houston Texans",
  "opponentlogo": "https://i.ebayimg.com/images/g/NxcAAOSwtBZbr5pe/s-l640.jpg",
  "result": "",
  "winloss": "BYE WEEK",
  "stats": {
    "pass": 423,
    "rush": 118,
    "rec": 116
  },
  "players": "Alvin Peck",
  "feed": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
}, {
  "id": 11,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 11,
  "date": "16-Nov-2018",
  "opponent": "Indianapolis Colts",
  "opponentlogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Indianapolis_Colts_logo.svg/2000px-Indianapolis_Colts_logo.svg.png",
  "result": "W 54-51",
  "winloss": "7-3",
  "stats": {
    "pass": 184,
    "rush": 172,
    "rec": 110
  },
  "players": "Stefano Cattenach",
  "feed": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
}, {
  "id": 12,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 12,
  "date": "11-Sep-2018",
  "opponent": "Baltimore Ravens",
  "opponentlogo": "https://rfathead-res.cloudinary.com/image/upload/h_300,w_300/logos/lgo_nfl_baltimore_ravens.png",
  "result": "W 30-16",
  "winloss": "8-3",
  "stats": {
    "pass": 230,
    "rush": 241,
    "rec": 189
  },
  "players": "Vickie Stienham",
  "feed": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
}, {
  "id": 13,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 13,
  "date": "24-Nov-2018",
  "opponent": "Miami Dolphins",
  "opponentlogo": "https://images.homedepot-static.com/productImages/3210cfc4-9e5c-4192-8110-829015eddec5/svn/teal-wall-decals-nfop1801-64_1000.jpg",
  "result": "W 29-27",
  "winloss": "9-3",
  "stats": {
    "pass": 367,
    "rush": 63,
    "rec": 170
  },
  "players": "Nalani Kennermann",
  "feed": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui."
}, {
  "id": 14,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 14,
  "date": "30-Nov-2018",
  "opponent": "Cleveland Browns",
  "opponentlogo": "http://www.nbcsportsradio.com/wp-content/uploads/sites/1353/2016/07/large.png",
  "result": "W 33-13",
  "winloss": "10-3",
  "stats": {
    "pass": 218,
    "rush": 216,
    "rec": 144
  },
  "players": "Cece Kincaid",
  "feed": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
}, {
  "id": 15,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 15,
  "date": "15-Dec-2018",
  "opponent": "Cincinnati Bengals",
  "opponentlogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cincinnati_Bengals_logo.svg/1280px-Cincinnati_Bengals_logo.svg.png",
  "result": "W 35-23",
  "winloss": "11-3",
  "stats": {
    "pass": 242,
    "rush": 269,
    "rec": 210
  },
  "players": "Marlene Blanckley",
  "feed": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
}, {
  "id": 16,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 16,
  "date": "08-Oct-2018",
  "opponent": "Los Angeles Chargers",
  "opponentlogo": "https://pngimage.net/wp-content/uploads/2018/06/san-diego-chargers-png-3.png",
  "result": "W 23-20",
  "winloss": "12-3",
  "stats": {
    "pass": 154,
    "rush": 150,
    "rec": 228
  },
  "players": "Gabbi Cheak",
  "feed": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
}, {
  "id": 17,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 17,
  "date": "26-Oct-2018",
  "opponent": "Detroit Lions",
  "opponentlogo": "https://www.bargainstobounty.com/wp-content/uploads/2016/04/Logo-Detroit-Lions.png",
  "result": "W 31-3",
  "winloss": "13-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Nessi Franke",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 18,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 18,
  "date": "25-Jan-2019",
  "opponent": "New England Patriots",
  "opponentlogo": "https://images.fun.com/products/51398/1-1/nfl-new-england-patriots-logo-foam-sign.jpg",
  "result": "W 33-3",
  "winloss": "14-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "James Franco",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 19,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 19,
  "date": "31-Jan-2019",
  "opponent": "New York Jets",
  "opponentlogo": "https://iccaastoria.org/wp-content/uploads/2018/10/IMG_3101.png",
  "result": "W 43-3",
  "winloss": "15-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Seth Rogan",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 20,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 20,
  "date": "7-Feb-2019",
  "opponent": "Pittsburgh Steelers",
  "opponentlogo": "https://images-na.ssl-images-amazon.com/images/I/416rgbI3r5L._SL500_AC_SS350_.jpg",
  "result": "W 13-3",
  "winloss": "16-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Seth Rogan",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 21,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 21,
  "date": "14-Feb-2019",
  "opponent": "Tennessee Titans",
  "opponentlogo": "https://sportslogohistory.com/wp-content/uploads/2017/12/tennessee_titans_1999-pres.png",
  "result": "W 33-3",
  "winloss": "17-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Seth Meyers",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 22,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 22,
  "date": "21-Feb-2019",
  "opponent": "Carolina Panthers",
  "opponentlogo": "http://carolinablitz.com/wp-content/uploads/2014/11/Carolina-Panthers.png",
  "result": "W 14-3",
  "winloss": "18-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Justin Timberlake",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 23,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 23,
  "date": "28-Feb-2019",
  "opponent": "Chicago Bears",
  "opponentlogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chicago_Bears_logo.svg/1280px-Chicago_Bears_logo.svg.png",
  "result": "W 24-3",
  "winloss": "19-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Jim Halpert",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 24,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 24,
  "date": "7-Mar-2019",
  "opponent": "Dallas Cowboys",
  "opponentlogo": "https://images-na.ssl-images-amazon.com/images/I/419h4vEBb8L._SX425_.jpg",
  "result": "W 6-3",
  "winloss": "20-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Dwight Shrute",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 25,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 25,
  "date": "14-Mar-2019",
  "opponent": "Minnesota Vikings",
  "opponentlogo": "https://s1.ticketm.net/tm/fr-ca/dbimages/314077a.jpg",
  "result": "W 8-3",
  "winloss": "21-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Michael Scott",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 26,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 26,
  "date": "21-Mar-2019",
  "opponent": "New Orleans Saints",
  "opponentlogo": "http://prod.static.saints.clubs.nfl.com/nfl-assets/img/gbl-ico-team/NO/logos/home/large.png",
  "result": "W 12-3",
  "winloss": "22-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Bruce Banner",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 27,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 27,
  "date": "28-Mar-2019",
  "opponent": "New York Giants",
  "opponentlogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/New_York_Giants_logo.svg/2000px-New_York_Giants_logo.svg.png",
  "result": "W 22-3",
  "winloss": "23-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Homer Simpson",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 28,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 28,
  "date": "04-Apr-2019",
  "opponent": "Seattle Seahakws",
  "opponentlogo": "https://i.ebayimg.com/images/g/1NUAAOSwAYtWJksu/s-l300.jpg",
  "result": "W 28-3",
  "winloss": "24-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Oscar Wilde",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 29,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 29,
  "date": "11-Apr-2019",
  "opponent": "Philadelpha Eagles",
  "opponentlogo": "https://goodlogo.com/images/logos/philadelphia_eagles_logo_4008.png",
  "result": "W 38-3",
  "winloss": "25-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Matt Damon",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 30,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 30,
  "date": "18-Apr-2019",
  "opponent": "Tampa Bay Buccaneers",
  "opponentlogo": "https://s26551.pcdn.co/wp-content/uploads/2016/08/Flag1024.jpg",
  "result": "W 8-3",
  "winloss": "26-3",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Robin Williams",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 31,
  "team": "Los Angeles Rams",
  "teamlogo": "http://icons.iconarchive.com/icons/astahrr/nfl/48/Rams-icon.png",
  "week": 31,
  "date": "25-Apr-2019",
  "opponent": "Oakland Raiders",
  "opponentlogo": "https://images.homedepot-static.com/productImages/c9123b60-dfbb-4171-a1db-f018f6b4202e/svn/team-wall-signs-n0843-oak-64_1000.jpg",
  "result": "L 0-42",
  "winloss": "26-4",
  "stats": {
    "pass": 312,
    "rush": 130,
    "rec": 246
  },
  "players": "Jordy Nelson",
  "feed": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}]


const insertRamSchedule = function() {
  ScheduleDB.create(ramsSchedule)
    .then(() => db.disconnect());
};

insertRamSchedule();