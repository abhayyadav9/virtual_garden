import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useUser } from "../contexts/useContext";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const PublishCard = ({ author, title, description, image, tag, id, embed }) => {
  const { user } = useUser();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedTag, setEditedTag] = useState(tag);
  const navigate = useNavigate();
  const handle3DView = () => {
    if (title === "neem") {
      navigate("neem");
    } else if (title === "tulsi") {
      navigate("tulsi");
    }
  };

  const MAX_DESCRIPTION_LENGTH = 100;
  const truncatedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
      : description;

  const handleDelete = async () => {
    if (!id) {
      console.error("Publish ID is undefined");
      return;
    }

    try {
      const response = await axios.delete(
        `http://localhost:8000/api/v2/publish/delete-publish/${id}`,
        {
          withCredentials: true,
        }
      );
      toast.success("Deleted Successfully");
      console.log(response.data);
    } catch (error) {
      toast.error("Failed to delete");
      console.error(error);
    }
  };

  const handleEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/api/v2/publish/edit-publish/${id}`,
        {
          title: editedTitle,
          description: editedDescription,
          tag: editedTag,
        },
        {
          withCredentials: true,
        }
      );
      toast.success("Updated Successfully");
      setDialogOpen(false);
      setEditMode(false);
      console.log(response.data);
    } catch (error) {
      toast.error("Failed to update");
      console.error(error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover cursor-pointer"
          onClick={() => setDialogOpen(true)}
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {truncatedDescription}
        </p>
        {tag && (
          <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold mt-3 px-2 py-1 rounded">
            {tag}
          </span>
        )}
        {user && (
          <div className="flex flex-row gap-4 mt-3">
            <AiFillDelete className="cursor-pointer" onClick={handleDelete} />
            <MdEdit
              className="cursor-pointer"
              onClick={() => {
                setDialogOpen(true);
                setEditMode(true);
              }}
            />
          </div>
        )}

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="bg-white w-auto max-w-full flex flex-col">
            <DialogHeader>
              <DialogTitle>{editMode ? "Edit Publish" : title}</DialogTitle>
            </DialogHeader>
            {editMode ? (
              <div className="flex flex-col py-4">
                <Label>Title:</Label>
                <input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="border border-gray-300 rounded p-2"
                />
                <Label className="mt-2">Description:</Label>
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  className="border border-gray-300 rounded p-2"
                />
                <Label className="mt-2">Tag:</Label>
                <input
                  value={editedTag}
                  onChange={(e) => setEditedTag(e.target.value)}
                  className="border border-gray-300 rounded p-2"
                />
                <DialogFooter className="mt-4">
                  <Button onClick={handleEdit}>Save Changes</Button>
                  <Button variant="outline" onClick={() => setEditMode(false)}>
                    Cancel
                  </Button>
                </DialogFooter>
              </div>
            ) : (
              <div className="flex flex-col py-4">
                {image && (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover mb-4"
                  />
                )}
                <div className="text-black mt-2">
                  <Label>Description:</Label> {description}
                </div>
                <div className="text-black mt-2">
                  <Label>Tag:</Label> {tag}
                </div>
              </div>
            )}

            <Button className="mt-4" onClick={handle3DView}>
              View in 3D
            </Button>

            <DialogFooter>
              <p className="text-sm font-semibold">Published by: {author}</p>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PublishCard;
