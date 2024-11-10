
const mongoose = require("mongoose");

const SubprojectSchema = new mongoose.Schema({
  id: {
    type: Schema.ObjectId
  },

  name: {
    type: String,
    required: [true, "Please provide a name!"],
    unique: true,
  },

  description: {
    type: String,
    required: [true, "Please provide a description!"],
    unique: false,
  },

  owner: {
    type: String,
    required: [true, "Please provide an owner project!"],
    unique: false,
  },

  budget: {
    type: Number,
    required: [true, "Please provide a budget limit!"],
    unique: false,
  },
  
  link: {
    type: String
  },
  
  comments: {
    type: Array,
    default: []
  },

});


module.exports = mongoose.model.Subprojects || mongoose.model("Subprojects", SubprojectSchema);
