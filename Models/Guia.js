exports = module.exports = function(app, mongoose) {
  var GuiaSchema = new mongoose.Schema({
    Numero:       { type: String },
    Informacion:  { 
                    CiudadOrigen: String,
                    CiudadDestino: String,
                    PaisOrigen: String,
                    PaisDestino: String,
                    EnviadoPor: String,
                    Por: String
                  },
    Novedades:    [{ 
                    Tipo_Novedad: String,
                    FechaNovedad: String
                  }]
  });

  mongoose.model('Guia', GuiaSchema);
};