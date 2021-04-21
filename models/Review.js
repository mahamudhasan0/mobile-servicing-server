const mongoose = require("mongoose");
const ReviewSchema = new mongoose.Schema(
  {
    name: { type: String },
    file:{type:String},
    description: { type: String },
    company: { type: String },
  },
  {
    timestamps: true,
  }
);
const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
