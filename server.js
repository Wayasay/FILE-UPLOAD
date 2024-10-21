const express = require("express");
const multer = require("multer");

const app = express();

// Set up Multer to store uploaded files in the 'uploads/' directory
const upload = multer({ dest: "uploads/" });

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to handle file uploads
app.post("/upload_files", upload.array("files"), uploadFiles);

function uploadFiles(req, res) {
    // Log the form data and uploaded files
    console.log(req.body);    // Form fields
    console.log(req.files);   // Uploaded files

    // Send a JSON response after successful upload
    res.json({ message: "Successfully uploaded files" });
}

// Start the server on port 5000
app.listen(5000, () => {
    console.log("Server started on port 5000...");
});
