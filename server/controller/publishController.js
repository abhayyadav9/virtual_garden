import cloudinary from "../database/cloudinary.js";
import Publish from "../models/publish-model.js";
import { User } from "../models/user-models.js";
import getDataUri from "../utils/getDataUri.js";

// Add a new publish entry
export const addPublish = async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const image = req.file; // Assuming you have multer for handling file upload
    const userId = req.userId; // Assuming userId is coming from authentication middleware
    let cloudResponse;

    // If an image is uploaded, upload it to Cloudinary
    if (image) {
      const fileUri = getDataUri(image); // Convert image to data URI
      cloudResponse = await cloudinary.uploader.upload(fileUri); // Upload to Cloudinary
    }

    // Create a new Publish entry
    const newPublish = new Publish({
      title,
      description,
      tag,
      image: cloudResponse ? cloudResponse.secure_url : '', // Set image URL from Cloudinary
    });

    // Save the new Publish document
    await newPublish.save();

    // Find the User by their ID and add the new Publish ID to their 'published' array
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found.',
        success: false,
      });
    }

    // Push the newly created Publish ID into the user's published array
    user.published.push(newPublish._id);
    await user.save(); // Save the user with the updated published array

    return res.status(201).json({
      message: 'Publish created successfully and added to user.',
      success: true,
      publish: newPublish,
    });
  } catch (error) {
    console.error('Error adding publish:', error);
    return res.status(500).json({
      message: 'An error occurred while creating publish.',
      success: false,
    });
  }
};

// Edit an existing publish entry
export const editPublish = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, tag } = req.body;
    const imageFile = req.file; // Assuming multer for image uploads
    let cloudResponse;

    // If a new image is uploaded, upload it to Cloudinary
    if (imageFile) {
      const fileUri = getDataUri(imageFile); // Convert image to data URI
      cloudResponse = await cloudinary.uploader.upload(fileUri); // Upload to Cloudinary
    }

    const updatedPublish = await Publish.findByIdAndUpdate(
      id,
      {
        title,
        description,
        tag,
        image: cloudResponse ? cloudResponse.secure_url : undefined, // Only update image if new one is uploaded
      },
      { new: true }
    );

    if (!updatedPublish) {
      return res.status(404).json({
        message: 'Publish not found.',
        success: false,
      });
    }

    return res.status(200).json({
      message: 'Publish updated successfully.',
      success: true,
      publish: updatedPublish,
    });
  } catch (error) {
    console.error('Error updating publish:', error);
    return res.status(500).json({
      message: 'An error occurred while updating publish.',
      success: false,
    });
  }
};

// Delete a publish entry
export const deletePublish = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPublish = await Publish.findByIdAndDelete(id);

    if (!deletedPublish) {
      return res.status(404).json({
        message: 'Publish not found.',
        success: false,
      });
    }

    return res.status(200).json({
      message: 'Publish deleted successfully.',
      success: true,
    });
  } catch (error) {
    console.error('Error deleting publish:', error);
    return res.status(500).json({
      message: 'An error occurred while deleting publish.',
      success: false,
    });
  }
};

// View all published entries
export const viewPublish = async (req, res) => {
  try {
    const publishes = await Publish.find(); // You can add filters or pagination here

    if (!publishes.length) {
      return res.status(404).json({
        message: 'No publishes found.',
        success: false,
      });
    }

    return res.status(200).json({
      message: 'Publishes retrieved successfully.',
      success: true,
      publishes,
    });
  } catch (error) {
    console.error('Error fetching publishes:', error);
    return res.status(500).json({
      message: 'An error occurred while fetching publishes.',
      success: false,
    });
  }
};
