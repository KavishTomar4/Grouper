let mongoose = require('mongoose');

let user = new mongoose({
 
  socketid : {
      type : String,
      required : true
  },
  firstname : {
    type : String,
    required : true
  },
  lastname : {
    type : String,
    required : true
  },
  username : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  imageurl : {
      type : String,
      required : true
  }
 
 
});

module.exports = mongoose.model('users' , user);
