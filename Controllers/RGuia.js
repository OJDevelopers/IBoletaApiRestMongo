var mongoose = require('mongoose');
var MGuia = mongoose.model('Guia');

  //GET - Return all tvshows in the DB
  exports.findAllGuias = function(req, res) {
  	MGuia.find(function(err, guia) {
  		if(!err) {
  			res.send(guia);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };
  
  //GET - Return a TVShow with specified ID
  exports.findGuiasById = function(req, res) {
    //MGuia.findById(req.param.id, function(err, guia) {
      MGuia.findById(req.params.id,function(err, guia) {
      if(!err) {
        res.send(guia);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  exports.findGuiasByNumero = function(req, res) {
    //MGuia.findById(req.param.id, function(err, guia) {
      MGuia.find({Numero:req.params.numero},function(err, guia) {
      console.log(req.params);
      if(!err) {
        res.send(guia);
      } else {
        console.log('ERROR: ' + err);
      }
    });
  };

  //POST - Insert a new TVShow in the DB
  exports.addGuia = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var guia = new MGuia({
      Numero:    req.body.Numero,
      Informacion:  {
                      CiudadOrigen: req.body.Informacion.CiudadOrigen,
                      CiudadDestino: req.body.Informacion.CiudadDestino,
                      PaisOrigen: req.body.Informacion.PaisOrigen,
                      PaisDestino: req.body.Informacion.PaisDestino,
                      EnviadoPor: req.body.Informacion.EnviadoPor,
                      Por: req.body.Informacion.Por
                    },
      Novedades:  req.body.Novedades
      /*Novedades:  {
                    Tipo_Novedad: req.body.Novedades.Tipo_Novedad,
                    FechaNovedad: req.body.Novedades.FechaNovedad
                  }*/
    });

    guia.save(function(err) {
      if(!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });

    res.send(guia);
  };

  //PUT - Update a register already exists
  exports.updateGuia = function(req, res)
  {
    MGuia.findById(req.params.id, function(err, guia) {
      guia.Numero = req.body.Numero,
      guia.Informacion.CiudadOrigen = req.body.Informacion.CiudadOrigen,
      guia.Informacion.CiudadDestino = req.body.Informacion.CiudadDestino,
      guia.Informacion.PaisOrigen = req.body.Informacion.PaisOrigen,
      guia.Informacion.PaisDestino = req.body.Informacion.PaisDestino,
      guia.Informacion.EnviadoPor = req.body.Informacion.EnviadoPor,
      guia.Informacion.Por = req.body.Informacion.Por,
      guia.Novedades = req.body.Novedades

      guia.save(function(err) {
        if(!err) 
        {
          console.log('Updated');
        }
        else
        {
          console.log('ERROR: ' + err);
        }

        res.send(guia);
      });
    });
  }

  //DELETE - Delete a TVShow with specified ID
  exports.deleteGuia = function(req, res) {
    MGuia.findById(req.params.id, function(err, guia) {
      guia.remove(function(err) {
        if(!err) {
      console.log('Removed');
        } else {
      console.log('ERROR: ' + err);
        }
      })
    });
  }