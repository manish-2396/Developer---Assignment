const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userName: String,
  location: String,
  email: String,
  img: String,
  gender: String,
  phone: String,
  country: String
});


const UserModel = mongoose.model("UserData" , UserSchema)

module.exports = {
    UserModel
}
