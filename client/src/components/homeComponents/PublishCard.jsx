import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useUser } from '../contexts/useContext';

const PublishCard = ({ title, description, image, tag }) => {
  const { user } = useUser();
  const [dialogOpen, setDialogOpen] = useState(false);

  // Limit the description length for display
  const MAX_DESCRIPTION_LENGTH = 100;

  const truncatedDescription = description.length > MAX_DESCRIPTION_LENGTH
    ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
    : description;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Image Section */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover cursor-pointer"
          onClick={() => setDialogOpen(true)}
        />
      )}

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {truncatedDescription}
        </p>

        {/* Tag */}
        {tag && (
          <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold mt-3 px-2 py-1 rounded">
            {tag}
          </span>
        )}

        {/* Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="bg-white w-auto max-w-full flex flex-col">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col py-4">
              <img src={image} alt={title} className="w-full h-48 object-cover mb-4" />
              <div className="flex flex-col">
                {description && (
                  <div className='text-black mt-2'>
                    <Label>Description:</Label> {description}
                  </div>
                )}
                {tag && (
                  <div className='text-black mt-2'>
                    <Label>Tag:</Label> {tag}
                  </div>
                )}
              </div>
            </div>
            <DialogFooter>
              <p className="text-sm font-semibold">Published by: {user?.username}</p>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
    </div>
  );
};

export default PublishCard;
