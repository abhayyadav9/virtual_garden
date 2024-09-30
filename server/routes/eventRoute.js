import express from "express";
import {
  addEvent,
  deleteEvent,
  editEvent,
  getAllEvents,
} from "../controller/eventConroller.js";
import authenticate from "../middleware/authenticate.js";

const router = express.Router();

router.post("/add-event",authenticate, addEvent);
router.put("/edit-event/:eventId",authenticate, editEvent);

router.delete("/delete-event/:eventId",authenticate, deleteEvent);

router.get("/view-events", getAllEvents);

export default router;
