import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// Importing User model
import { User } from "../models/user-models.js";
import cloudinary from "../database/cloudinary.js";
import getDataUri from "../utils/getDataUri.js";

// Register User
const register = async (req, res) => {
  try {
    const { username, email, password, phone, dob, gender } = req.body;

    // Validate input
    if (!username || !email || !password || !phone || !dob || !gender) {
      return res.status(400).json({
        message: "All fields are required!",
        success: false,
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "Email already in use. Try a different email.",
        success: false,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      phone,
      dob,
      gender,
    });

    return res.status(201).json({
      message: "Account created successfully.",
      success: true,
      user: { username: newUser.username, email: newUser.email },
    });
  } catch (error) {
    console.error("Registration Error: ", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
      success: false,
    });
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required!",
        success: false,
      });
    }

    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };

    // Send response with cookie
    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .json({
        message: `Welcome back, ${user.username}!`,
        success: true,
        user,
      });
  } catch (error) {
    console.error("Login Error: ", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
      success: false,
    });
  }
};

// Logout User
const logout = async (_, res) => {
  try {
    return res.cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully.",
      success: true,
    });
  } catch (error) {
    console.error("Logout Error: ", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
      success: false,
    });
  }
};

// View User Details
const viewDetails = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from token

    const user = await User.findById(userId).select("-password");

    if (!user) {
      console.log("User not found for ID:", userId); // Log if user is not found
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "User details fetched successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error("View Details Error: ", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
      success: false,
    });
  }
};


const editDetails = async (req, res) => {
  try {
    const userId = req.userId; // Ensure that `userId` is correctly extracted from the token
    const { gender, username, dob, email, phone } = req.body;
    const profilePic = req.file; // Make sure multer middleware is correctly configured for file upload
    let cloudResponse;

    // If profilePic is uploaded, upload to Cloudinary
    if (profilePic) {
      const fileUri = getDataUri(profilePic);
      cloudResponse = await cloudinary.uploader.upload(fileUri); // Upload to Cloudinary
    }

    // Find the user by ID
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found.",
        success: false,
      });
    }

    // Update user details if provided
    if (gender) user.gender = gender;
    if (username) user.username = username;
    if (email) user.email = email;
    if (dob) user.dob = dob;
    if (phone) user.phone = phone;

    // Update the profile picture if provided
    if (profilePic) {
      user.profilePic = cloudResponse.secure_url;
    }

    // Save the updated user data
    await user.save();

    return res.status(200).json({
      message: "Profile updated successfully.",
      success: true,
      user,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({
      message: "An error occurred while updating profile.",
      success: false,
    });
  }
};


export default { register, login, logout, viewDetails, editDetails };
