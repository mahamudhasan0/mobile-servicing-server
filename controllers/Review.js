const Review = require("../models/Review");
const Admin = require("../models/Admin");
const createAdmin=require('../models/MakeAdmin')
const getAdminSection = async (req, res) => {
  try {
    const allAds = await Admin.find();

    res.status(200).json(allAds);
  } catch (error) {
    res.status(404).json({ message: "ads not found" });
  }
};
const createAds = async (req, res) => {
  const { title, price, description, file } = req.body;

  const newAds = new Admin({
    title,
    price,
    description,
    file,
  });

  try {
    await newAds.save();

    res.status(201).json(newAds);
  } catch (error) {
    res.status(409).json({ message: "Creating Admin failed" });
  }
};
const getReviews = async (req, res) => {
  try {
    const allReview = await Review.find();

    res.status(200).json(allReview);
  } catch (error) {
    res.status(404).json({ message: "Review not found" });
  }
};
const createReview = async (req, res) => {
  const { name, description, company,file } = req.body;

  const newReview = new Review({
    name,
    description,
    company,
    file,
  });

  try {
    await newReview.save();

    res.status(201).json(newReview);
  } catch (error) {
    res.status(409).json({ message: "Creating Review failed" });
  }
};
const createAdmins = async (req, res) => {
  const { email } = req.body;

  const newAdmin = new createAdmin({
    email
  });

  try {
    await newAdmin.save();

    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(409).json({ message: "Creating Admin failed" });
  }
};
const getAdmin = async (req, res) => {
  try {
    const allAdmin = await createAdmin.find();

    res.status(200).json(allAdmin);
  } catch (error) {
    res.status(404).json({ message: "admin not found" });
  }
};

module.exports = {
  createReview,
  getReviews,
  getAdminSection,
  createAds,
  createAdmins,
  getAdmin
};
