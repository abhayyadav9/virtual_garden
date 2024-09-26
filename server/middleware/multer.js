// import multer from "multer";

// // Multer configuration
// const storage = multer.memoryStorage(); // Store file in memory
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
// }).single("profilePic"); // Field name for profile picture

// export default upload;


import multer from "multer";

// Set storage to memory to easily handle files before uploading
const storage = multer.memoryStorage(); 

// Create the multer instance with the memory storage
const upload = multer({ storage });

export default upload;

