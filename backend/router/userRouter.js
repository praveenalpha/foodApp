const express = require("express");
const userRouter = express.Router();
const {createUser,getAllUsers,getUserByID,updateUserByID,deleteByID} = require("../controller/userController");


userRouter.route("").post(createUser).get(getAllUsers);
userRouter.route("/:id").get(getUserByID).patch(updateUserByID).delete(deleteByID);
module.exports = userRouter;