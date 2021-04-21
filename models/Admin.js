const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema(
  {
    title:{type:String},
    file:{type:String},
    description: { type: String },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);
const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
