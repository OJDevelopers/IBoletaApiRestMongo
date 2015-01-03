exports = module.exports = function(app, mongoose) {
  var UsersSchema = new mongoose.Schema({
    NomUsu: String,
    PassWord: String
  });

  mongoose.model('Users', UsersSchema);
};