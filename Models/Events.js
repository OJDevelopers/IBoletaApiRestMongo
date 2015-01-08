exports = module.exports = function(app, mongoose) {
  var EventsSchema = new mongoose.Schema({
    EventName: String,
    Sponsors: 
    [{
      Name: String,
      ContactName: String,
      ContactPhone: String,
      ContactMail: String,

    }],
    Organizers:
    [{
      Name: String,
      ContactName: String,
      ContactPhone: String,
      ContactMail: String,

    }],
    BasicInfo:
    { 
      Countrie: 
      {
        code: String,
        name: String
      },
      StateProvince: 
      {
        code: String,
        name: String
      },
      City: 
      {
        code: String,
        name: String
      },
      EventDate: Date,
      TicketNumber: int,
      TicketsType: String
    }
    EventType: String,
    Favorite: boolean //Cambiar Favorito por Destacado
  });

  mongoose.model('Events', EventsSchema);
};