
const mongoose = require("mongoose");

const ScenarioSchema = new mongoose.Schema({
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
    required: [true, "Please provide a user owner!"],
    unique: false,
  },

  budget: {
    type: Number,
    required: [true, "Please provide a budget limit!"],
    unique: false,
  },
  
  subprojects: {
    type: Array,
    default: []
  },

});


module.exports = mongoose.model.Scenarios || mongoose.model("Scenarios", ScenarioSchema);
