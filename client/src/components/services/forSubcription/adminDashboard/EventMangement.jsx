import React, { useEffect, useState } from 'react';

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    venue: '',
  });
  const [editingEventId, setEditingEventId] = useState(null);

  // Fetch all events from the API
  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v3/event/view-events');
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      setEvents(data.events);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle adding a new event
  const handleAddEvent = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v3/event/add-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include', // Ensures cookie authentication
      });

      if (!response.ok) throw new Error('Failed to add event');
      fetchEvents(); // Refresh events after adding
      setFormData({ name: '', description: '', date: '', venue: '' }); // Clear form
    } catch (error) {
      console.error(error.message);
    }
  };

  // Handle editing an event
  const handleEditEvent = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v3/event/edit-event/${editingEventId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include', // Ensures cookie authentication
      });

      if (!response.ok) throw new Error('Failed to edit event');
      fetchEvents(); // Refresh events after editing
      setFormData({ name: '', description: '', date: '', venue: '' }); // Clear form
      setEditingEventId(null); // Reset editing state
    } catch (error) {
      console.error(error.message);
    }
  };

  // Handle deleting an event
  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v3/event/delete-event/${eventId}`, {
        method: 'DELETE',
        credentials: 'include', // Ensures cookie authentication
      });

      if (!response.ok) throw new Error('Failed to delete event');
      fetchEvents(); // Refresh events after deleting
    } catch (error) {
      console.error(error.message);
    }
  };

  // Set form data for editing
  const startEditing = (event) => {
    setFormData({
      name: event.name,
      description: event.description,
      date: new Date(event.date).toISOString().slice(0, 10), // Format date for input
      venue: event.venue,
    });
    setEditingEventId(event._id);
  };

  return (
    <div className="container ml-40 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{editingEventId ? 'Edit Event' : 'Add Event'}</h1>

      {/* Form for adding or editing an event */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editingEventId ? handleEditEvent() : handleAddEvent();
        }}
        className="mb-8"
      >
        <div className="mb-4">
          <label className="block mb-2">Event Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Venue</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingEventId ? 'Update Event' : 'Add Event'}
        </button>
      </form>

      {/* List of events */}
      <h2 className="text-xl font-bold mb-4">All Events</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event._id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-bold">{event.name}</h3>
              <p className="text-gray-600">{event.description}</p>
              <p className="text-gray-600">Date: {new Date(event.date).toLocaleDateString()}</p>
              <p className="text-gray-600">Venue: {event.venue}</p>

              <div className="mt-4 space-x-2">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
                  onClick={() => startEditing(event)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => handleDeleteEvent(event._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventManagement;
