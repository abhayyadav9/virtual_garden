import mongoose from "mongoose";
import { User } from "../models/user-models.js";

const ConnectionTodb = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("The database has been connected successfully");
  
      // Open a Change Stream for the User model
      const changeStream = User.watch();
  
      changeStream.on('change', (change) => {
        console.log('Change detected:', change);
        // Handle the change event here (e.g., log it, update a UI, etc.)
        if (change.operationType === 'insert') {
          console.log('New user added:', change.fullDocument);
        } else if (change.operationType === 'update') {
          console.log('User updated:', change.documentKey);
        } else if (change.operationType === 'delete') {
          console.log('User deleted:', change.documentKey);
        }
      });
      
    } catch (error) {
      console.log(error);
    }
  };
  
  export default ConnectionTodb;