import express from "express";
import {
  addEvent,
  deleteEvent,
  editEvent,
  getAllEvents,
} from "../controller/eventConroller.js";

const router = express.Router();

router.post("/add-event", addEvent);
router.put("/edit-event/:eventId", editEvent);

router.delete("/delete-event/:eventId", deleteEvent);
router.get("/view-events", getAllEvents);


export default router;
