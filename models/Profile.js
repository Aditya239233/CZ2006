const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
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
    type: String,
    required: true,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
