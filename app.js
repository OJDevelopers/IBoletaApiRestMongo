
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

var models     = require('./models/Guia')(app, mongoose);
var MUser     = require('./models/Users')(app, mongoose);
var GuiasCtrl = require('./Routes/RGuia');
var UsersCtrl = require('./Routes/RUsers');


var router = express.Router();
router.get('/', function(req, res) {
  res.send("Server Corriendo...");
});


app.use(router);

router.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// API routes
var guiasr = express.Router();

guiasr.route('/guia')
  .get(GuiasCtrl.findAllGuias)
  .post(GuiasCtrl.addGuia);

guiasr.route('/guia/:id')
  .get(GuiasCtrl.findGuiasById)
  .put(GuiasCtrl.updateGuia)
  .delete(GuiasCtrl.deleteGuia);

guiasr.route('/guiaNumero/:numero')
  .get(GuiasCtrl.findGuiasByNumero);

var usersr = express.Router();

usersr.route('/user')
  .get(UsersCtrl.findAllUsers);

app.use('/api', guiasr);
app.use('/api', usersr);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});