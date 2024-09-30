import Event from "../models/event-model.js";


// Controller to add an event
export const addEvent = async (req, res) => {
  try {
    const { name, description, date, venue } = req.body;

    // Create a new event using the request body data
    const newEvent = new Event({
      name,
      description,
      date,
      venue,
    });

    // Save the event to the database
    const savedEvent = await newEvent.save();

    res.status(201).json({
      message: "Event created successfully",
      event: savedEvent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create event",
      error: error.message,
    });
  }
};

// Controller to edit/update an event
export const editEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { name, description, date, venue } = req.body;

    // Find the event by ID and update its data
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        name,
        description,
        date,
        venue,
      },
      { new: true } // Returns the updated event
    );

    if (!updatedEvent) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      message: "Event updated successfully",
      event: updatedEvent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update event",
      error: error.message,
    });
  }
};

// Controller to delete an event
export const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    // Find and delete the event by ID
    const deletedEvent = await Event.findByIdAndDelete(eventId);

    if (!deletedEvent) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      message: "Event deleted successfully",
      event: deletedEvent,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete event",
      error: error.message,
    });
  }
};



// Controller to view all events
export const getAllEvents = async (req, res) => {
  try {
    // Retrieve all events from the database
    const events = await Event.find();

    // Check if events exist
    if (!events.length) {
      return res.status(404).json({
        message: "No events found",
      });
    }

    res.status(200).json({
      message: "Events retrieved successfully",
      events,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve events",
      error: error.message,
    });
  }
};
