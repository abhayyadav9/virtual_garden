import express from 'express';

import { addPublish, editPublish, deletePublish, viewPublish } from '../controller/publishController.js';
import upload from '../middleware/multer.js';
import authenticate from '../middleware/authenticate.js';

const router = express.Router();


// Routes
router.post('/add-publish',authenticate, upload.single('image'), addPublish);
router.put('/edit-publish/:id',authenticate, upload.single('image'), editPublish);
router.delete('/delete-publish/:id',authenticate, deletePublish);
router.get('/view-publish', viewPublish);

export default router;
