const mongoose = require("mongoose");
const { Schema } = mongoose;

const teahcerSchema = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Teacher", teahcerSchema);