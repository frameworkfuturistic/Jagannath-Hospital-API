const multer = require('multer');
const path = require('path');

// Set storage engine dynamically based on folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = 'uploads';
    if (req.baseUrl.includes('/resume')) folder = 'uploads/resume';
    else if (req.baseUrl.includes('/gallery')) folder = 'uploads/gallery';
    else if (req.baseUrl.includes('/blogs')) folder = 'uploads/blogs';

    cb(null, folder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Initialize upload
const upload = multer({ storage: storage });

module.exports = upload;
