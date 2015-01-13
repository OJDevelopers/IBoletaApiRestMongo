var mongoose = require('mongoose');
var TTicket = mongoose.model('TicketType');

  //GET - Return all Users in the DB
  exports.findAllTTicket = function(req, res) {
  	console.log(TTicket);
  	TTicket.find(function(err, tticket) {
  		console.log(tticket);
  		if(!err) {
  			res.send(tticket);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a User with specified ID
  exports.findTTicketById = function(req, res) {
      TTicket.findById(req.params.id,function(err, tticket) {
      if(!err) {
        res.send(tticket);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //POST - Insert a new User in the DB
  exports.addTTicket = function(req, res) {
    console.log('POST');
    console.log(req.body);

    try
    {
      var tticket = new TTicket({
        Code: req.body.Code,
        Name: req.body.Name,
        InfoControl: 
        [{
          UserCreated: req.body.InfoControl.UserCreated,
          userModified: req.body.InfoControl.userModified,
          DateCreated: req.body.InfoControl.DateCreated,
          DateModified: req.body.InfoControl.DateModified
        }]
      });

      tticket.save(function(err) {
        if(!err) {
          console.log('Ticket Type "'+ req.body.Name +'" Created Succefull');
        } else {
          console.log('ERROR: ' + err);
        }
      });

      res.send(tticket);
    }
    catch(error)
    {
      console.log(error);
    }
    
  };

  //PUT - Update a User already exists
  exports.updateTTicket = function(req, res)
  {
    TTicket.findById(req.params.id, function(err, tticket) {
      tticket.Code= req.body.Code,
      tticket.Name= req.body.Name,
      tticket.InfoControl= req.body.InfoControl

      tticket.save(function(err) {
        if(!err) 
        {
          console.log('Ticket type "'+ req.body.Name +'" Updated Succefull');
        }
        else
        {
          console.log('ERROR: ' + err);
        }

        res.send(tticket);
      });
    });
  };

  //DELETE - Delete a User with specified ID
  exports.deleteTTicket = function(req, res) {
    TTicket.findById(req.params.id, function(err, tticket) {
      tticket.remove(function(err) {
        if(!err) {
      console.log('Ticket Type with Id "'+ req.params.id +'" Removed Succefull');
        } else {
      console.log('ERROR: ' + err);
        }
      })
    });
  }