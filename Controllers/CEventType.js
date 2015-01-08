var mongoose = require('mongoose');
var TEvent = mongoose.model('EventType');

  //GET - Return all Users in the DB
  exports.findAllTEvents = function(req, res) {
  	console.log(TEvent);
  	Users.find(function(err, tevent) {
  		console.log(tevent);
  		if(!err) {
  			res.send(tevent);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a User with specified ID
  exports.findTEventsById = function(req, res) {
      TEvent.findById(req.params.id,function(err, tevent) {
      if(!err) {
        res.send(tevent);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //GET - Return a User with specified UserName
  /*exports.findUserByNomUsu = function(req, res) {
    //TEvent.findById(req.param.id, function(err, guia) {
      TEvent.find({NomUsu:req.params.NomUsu},function(err, tevent) {
      console.log(req.params);
      if(!err) {
        res.send(tevent);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };*/

  //POST - Insert a new User in the DB
  exports.addTEvents = function(req, res) {
    console.log('POST');
    console.log(req.body);

    try
    {
      var tevent = new TEvent({
        Code: req.body.Code,
        Name: req.body.Name,
        InfoControl: 
        [{
          UserCreated: req.body.InfoControl.UserCreated,
          userModified: req.body.InfoControl.userModified,
          DateCreated: req.body.InfoControl.DateCreated,
          DateModified: req.body.InfoControl.DateModified
        }]

      tevent.save(function(err) {
        if(!err) {
          console.log('Event Type "'+ req.body.Name +'" Created Succefull');
        } else {
          console.log('ERROR: ' + err);
        }
      });

      res.send(tevent);
    }
    catch(error)
    {
      console.log(error);
    }
    
  };

  //PUT - Update a User already exists
  exports.updateTEvent = function(req, res)
  {
    TEvent.findById(req.params.id, function(err, tevent) {
      tevent.Code= req.body.Code,
      tevent.Name= req.body.Name,
      tevent.InfoControl= req.body.InfoControl

      tevent.save(function(err) {
        if(!err) 
        {
          console.log('Evnet Type "'+ req.body.Name +'" Updated Succefull');
        }
        else
        {
          console.log('ERROR: ' + err);
        }

        res.send(tevent);
      });
    });
  };

  //DELETE - Delete a User with specified ID
  exports.deleteTEvent = function(req, res) {
    TEvent.findById(req.params.id, function(err, tevent) {
      tevent.remove(function(err) {
        if(!err) {
      console.log('Event Type Id "'+ req.params.id +'" Removed Succefull');
        } else {
      console.log('ERROR: ' + err);
        }
      })
    });
  }