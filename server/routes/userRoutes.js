import express from "express";
import userController from "../controller/userController.js";
import authenticate from "../middleware/authenticate.js";
import upload from "../middleware/multer.js"; // Multer middleware for file uploads

const router = express.Router();

// User registration route
router.route("/signup").post(userController.register);

// User login route
router.route("/login").post(userController.login);

// User logout route (protected)
router.route("/logout").post(authenticate, userController.logout);

// View user details route (protected) - No need for Multer here
router.route("/view-details").get(authenticate, userController.viewDetails);

// Edit user details route (protected) - Add Multer for profile picture upload
router.route("/edit-details").put(authenticate, upload.single("profilePic"), userController.editDetails);

export default router;
