const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


const characterSchema = Schema({
  id: Number,
  name: String,
  occupation: String,
  weapon: String,
  cartoon: Boolean
});

const Character = mongoose.model("Character", characterSchema);


module.exports = Character;
