const mongoose = require("mongoose");
const createAdminSchema = new mongoose.Schema(
  {
    email:{type:String}
  },
  {
    timestamps: true,
  }
);
const createAdmin = mongoose.model("createAdmin", createAdminSchema);

module.exports = createAdmin;