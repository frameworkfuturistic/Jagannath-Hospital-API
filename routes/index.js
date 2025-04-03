const express = require('express');
const router = express.Router();

// Import route handlers
const authRoutes = require('./V1/authRoutes');
const blogRoutes = require('./V1/blogRoutes');
const announcementRoutes = require('./V1/announcementRoutes');
const galleryRoutes = require('./V1/galleryRoutes');
const consultantRoutes = require('./V1/consultantScheduleRoutes');
const jobPostingRoutes = require('./V1/jobPostingRoutes');
const jobApplicationRoutes = require('./V1/jobApplicationRoutes');
const contactUsRoutes = require('./V1/contactUsRoutes');

// Define API routes
router.use('/auth', authRoutes);
router.use('/blogs', blogRoutes);
router.use('/announcement', announcementRoutes);
router.use('/gallery', galleryRoutes);
router.use('/consultant', consultantRoutes);
router.use('/jobs', jobPostingRoutes);
router.use('/applications', jobApplicationRoutes);
router.use('/contact-us', contactUsRoutes);

module.exports = router;
