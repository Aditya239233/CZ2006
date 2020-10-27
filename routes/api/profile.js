const express = require("express");
const router = express.Router();

// Load input validation
const validateRecommendInput = require("../../validation/profile");

const Profile = require("../../models/Profile");

// @route   GET api/profile/me
// @desc   Get current users profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.email,
    }).populate("user", [
      "price",
      "flat_type",
      "storey",
      "remaining_lease",
      "location",
    ]);

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/profile/recommend
// @desc     Create or update user profile
// @access   Private
router.post("/recommend", async (req, res) => {
  // Form validation
  const { errors, isValid } = validateRecommendInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const { price, flat_type, storey, remaining_lease, location } = req.body;

  //Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (price) profileFields.price = price;
  if (flat_type) profileFields.flat_type = flat_type;
  if (storey) profileFields.storey = storey;
  if (remaining_lease) profileFields.remaining_lease = remaining_lease;
  if (location) profileFields.location = location;

  try {
    let profile = await Profile.findOne({ user: req.user.email });
    if (profile) {
      //Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }

    //Create
    profile = new Profile(profileFields);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
