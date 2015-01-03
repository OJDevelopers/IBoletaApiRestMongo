var mongoose = require('mongoose');
var Users = mongoose.model('Users');

  //GET - Return all tvshows in the DB
  exports.findAllUsers = function(req, res) {
  	console.log(Users);
  	Users.find(function(err, users) {
  		console.log(users);
  		if(!err) {
  			res.send(users);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };