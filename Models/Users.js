exports = module.exports = function(app, mongoose) {
  var UsersSchema = new mongoose.Schema({
    BasicInfo : 
    {
    	Name: String,
    	LastName: String,
    	Age: Number,
    	DateBirth: Date
    },
    Credentials: 
    {
	    NomUsu: String,
	    PassWord: String
	},
	Geo: 
	{
		Country: 
		{
			code: String, 
			name: String
		},
		City: 
		{
			code: String, 
			name: String
		},
		State: 
		{
			code: String, 
			name: String
		}
	},
	Payment:
    [{
    	Type: String,
    	CardNumber: Number,
    	Bank: String
    }],
	InfoControl: 
    [{
      UserCreated: String,
      userModified: String,
      DateCreated: Date,
      DateModified: Date
    }]
  });

  mongoose.model('Users', UsersSchema);
};