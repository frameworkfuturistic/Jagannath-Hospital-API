const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

// Dynamic Cloudinary Storage for different folders
const createStorage = (folder) =>
  new CloudinaryStorage({
    cloudinary,
    params: {
      folder, // Dynamic folder name
      allowed_formats: ['jpg', 'jpeg', 'png'], // Allowed file formats
      transformation: [{ width: 800, height: 800, crop: 'limit' }], // Optimize images
    },
  });

// Gallery Image Upload Middleware
const galleryUpload = multer({ storage: createStorage('gallery') });

// Blog Image Upload Middleware
const blogUpload = multer({ storage: createStorage('blogs') });
// Blog Image Upload Middleware
const announcementUpload = multer({ storage: createStorage('announcements') });

module.exports = {
  galleryUpload,
  blogUpload,
  announcementUpload,
};
