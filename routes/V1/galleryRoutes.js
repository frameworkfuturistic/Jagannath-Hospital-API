const express = require('express');
const galleryController = require('../../controllers/V1/galleryController');
const upload = require('../../middlewares/multer');


const router = express.Router();

// Test route
router.get('/test', galleryController.test);

// Create a new gallery image
router.post('/', upload.single('image'), galleryController.createGalleryImage); // Use multer middleware for file uploads

// Get all gallery images (with pagination)
router.get('/', galleryController.getGalleryImages);

// Get a single gallery image by ID or slug
router.get('/:identifier', galleryController.getGalleryImageById);

// Update a gallery image by ID
router.put('/:id', upload.single('image'), galleryController.updateGalleryImage); // Use multer middleware for file uploads

// Delete a gallery image by ID
router.delete('/:id', galleryController.deleteGalleryImage);

module.exports = router;
