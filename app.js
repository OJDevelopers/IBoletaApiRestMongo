
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

mongoose.connect('mongodb://asephirot:ALSephirot04140324@ds053300.mongolab.com:53300/guiadb', function(err, res) {
//mongoose.connect('mongodb://localhost/GuiaDB', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
    console.log(res);
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var MUser     = require('./models/Users')(app, mongoose);
var UsersCtrl = require('./Controllers/CUsers');
var MTEvent = require('./models/EventType')(app, mongoose);
var TEventCtrl = require('./Controllers/CEventType');
var MGeography = require('./models/Geography')(app, mongoose);
var GeographyCtrl = require('./Controllers/CGeography');
var MTPayment = require('./models/PaymentType')(app, mongoose);
var TPaymentCtrl = require('./Controllers/CPaymentType');
var MTTicket = require('./models/TicketType')(app, mongoose);
var TTicketCtrl = require('./Controllers/CTicketType');
var MPlaces = require('./models/Places')(app, mongoose);
var PlacesCtrl = require('./Controllers/CPlaces');



var router = express.Router();
router.get('/', function(req, res) {
  res.send("<h1>Api Rest IBoleta With MongoDB running...</h1>");
});


app.use(router);

router.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// API routes
var usersr = express.Router();

//---------Inicio rutas Users--------------//
usersr.route('/user')
  .get(UsersCtrl.findAllUsers)
  .post(UsersCtrl.addUser);

usersr.route('/user/:id')
  .get(UsersCtrl.findUserById)
  .put(UsersCtrl.updateUser)
  .delete(UsersCtrl.deleteUser);

usersr.route('/userNomUsu/:NomUsu')
  .get(UsersCtrl.findUserByNomUsu);
//----------Fin rutas Users-------------------//

//------------Inicio rutas Event Type-----------//
var teventr = express.Router();

teventr.route('/tevent')
  .get(TEventCtrl.findAllTEvents)
  .post(TEventCtrl.addTEvents);

teventr.route('/tevent/:id')
  .get(TEventCtrl.findTEventsById)
  .put(TEventCtrl.updateTEvent)
  .delete(TEventCtrl.deleteTEvent);
//-------------Fin rutas Event Type----------------//

//------------Inicio rutas Geography-----------//
var geography = express.Router();

geography.route('/geography')
  .get(GeographyCtrl.findAllGeography)
  .post(GeographyCtrl.addGeography);

geography.route('/geography/Cities')
  .get(GeographyCtrl.findAllCities);

geography.route('/geography/Countries')
  .get(GeographyCtrl.findAllCountries);

geography.route('/geography/StateProvince')
  .get(GeographyCtrl.findAllStateProvince);

geography.route('/geography/:id')
  .get(GeographyCtrl.findGeographyById)
  .put(GeographyCtrl.updateGeography)
  .delete(GeographyCtrl.deleteTEvent);
//-------------Fin rutas Geography----------------//

//------------Inicio rutas Payment Type-----------//
var tpayment = express.Router();

tpayment.route('/tpayment')
  .get(TPaymentCtrl.findAllTPayment)
  .post(TPaymentCtrl.addTPayment);

tpayment.route('/tpayment/:id')
  .get(TPaymentCtrl.findTPaymentById)
  .put(TPaymentCtrl.updateTPayment)
  .delete(TPaymentCtrl.deleteTPayment);
//-------------Fin rutas Payment Type----------------//

//------------Inicio rutas Ticket Type-----------//
var tticket = express.Router();

tticket.route('/tticket')
  .get(TTicketCtrl.findAllTTicket)
  .post(TTicketCtrl.addTTicket);

tticket.route('/tticket/:id')
  .get(TTicketCtrl.findTTicketById)
  .put(TTicketCtrl.updateTTicket)
  .delete(TTicketCtrl.deleteTTicket);
//-------------Fin rutas Ticket Type----------------//

//------------Inicio rutas Ticket Type-----------//
var places = express.Router();

places.route('/tticket')
  .get(PlacesCtrl.findAllPlaces)
  .post(PlacesCtrl.addplaces);

places.route('/tticket/:id')
  .get(PlacesCtrl.findplacesById)
  .put(PlacesCtrl.updateplaces)
  .delete(PlacesCtrl.deleteplaces);
//-------------Fin rutas Ticket Type----------------//

app.use('/api', usersr);
app.use('/api',teventr);
app.use('/api',geography);
app.use('/api',tticket);
app.use('/api',places);

var Port = process.env.PORT || 8888;
app.listen(Port, function() {
  console.log("Node server running on http://localhost:3000. Server IBoleta With MongoDB");
});