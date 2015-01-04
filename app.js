
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


var router = express.Router();
router.get('/', function(req, res) {
  res.send("Api Rest IBoleta With MongoDB running...");
});


app.use(router);

router.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// API routes
var usersr = express.Router();

usersr.route('/user')
  .get(UsersCtrl.findAllUsers)
  .post(UsersCtrl.addUser);

usersr.route('/user/:id')
  .get(UsersCtrl.findUserById)
  .put(UsersCtrl.updateUser)
  .delete(UsersCtrl.deleteUser);

usersr.route('/userNomUsu/:NomUsu')
  .get(UsersCtrl.findUserByNomUsu);

app.use('/api', usersr);

app.listen(80, function() {
  console.log("Node server running on http://localhost:3000. Server IBoleta With MongoDB");
});