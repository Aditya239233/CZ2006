const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  price: {
    type: String,
    required: true,
  },
  flat_type: {
    type: String,
  },
  storey: {
    type: String,
  },
  remaining_lease: {
    type: String,
  },
  location: {
    type: String
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
