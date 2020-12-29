const express = require("express");
const userRouter = express.Router();
const {createUser,getAllUsers,getUserByID,updateUserByID,deleteByID, loginUser} = require("../controller/userController");


userRouter.route("").get(getAllUsers);
userRouter.post("/login",loginUser);
userRouter.post("/signup",createUser);
userRouter.route("/:id").get(getUserByID).patch(updateUserByID).delete(deleteByID);
module.exports = userRouter;