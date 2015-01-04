exports = module.exports = function(app, mongoose) {
  var TTicketSchema = new mongoose.Schema({
    Code: String,
    Name: String,
    InfoControl: 
    [{
      UserCreated: String,
      userModified: String,
      DateCreated: Date,
      DateModified: Date
    }]
  });

  mongoose.model('TicketType', TTicketSchema);
};