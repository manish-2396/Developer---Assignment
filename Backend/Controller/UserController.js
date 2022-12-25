const express = require("express");
const { UserModel } = require("../Model/UserModel");

const UserController = express.Router();

UserController.post("/post", async (req, res) => {
  const data = req.body;
  await UserModel.insertMany(data.data);
  res.status(200).send({ Massage: "User Data Successfully Added"});
});

UserController.get("/get", async (req, res) => {
  const data = await UserModel.find();
  res.status(200).send({Massage:"User Data",data:data});
});

UserController.delete("/delete", async(req, res) => {
  await UserModel.deleteMany();
  res.status(200).send({ Massage: "All User Data  Successfully Removed"});
});

module.exports = {
  UserController,
};
