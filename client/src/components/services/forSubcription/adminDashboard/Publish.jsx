import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios"; // Import axios for API calls
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Publish = () => {
  const [imagePreview, setImagePreview] = useState(null); // For previewing the uploaded image
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  // Handler for image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Submit handler
  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);
  
    // Prepare form data for multipart/form-data submission
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("tag", data.tag || "");
    formData.append("author", data.author || "");
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }
  
    try {
      // Send form data to your API
      const response = await axios.post(
        "http://localhost:8000/api/v2/publish/add-publish",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // Include credentials (cookies)
        }
      );
  
      console.log("Publish added successfully:", response.data);
      navigate("/admin-dashboard");
      toast.success('Published successfully!');
      reset();
      setImagePreview(null); 
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error adding publish:", error);
      toast.error('Failed to publish. Make sure you are authenticated.');
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Create New Publish
      </h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Title Input */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter publish title"
            {...register("title", { required: "Title is required" })}
            className="mt-1"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Author Input */}
        <div>
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            placeholder="Enter author name"
            {...register("author")}
            className="mt-1"
          />
        </div>

        {/* Description Textarea */}
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Enter publish description"
            {...register("description", {
              required: "Description is required",
            })}
            className="mt-1"
            rows="4"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Tag Input */}
        <div>
          <Label htmlFor="tag">Tag</Label>
          <Input
            id="tag"
            placeholder="Enter tag (optional)"
            {...register("tag")}
            className="mt-1"
          />
        </div>

        {/* Image Upload */}
        <div>
          <Label htmlFor="image">Image</Label>
          <Input
            type="file"
            id="image"
            accept="image/*"
            {...register("image")}
            className="mt-1"
            onChange={handleImageChange}
          />
          {/* Show image preview */}
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 w-full h-64 object-cover rounded"
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Add Publish"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Publish;
