const express = require('express');
const router = express.Router();

const authRoutes = require('./routes.auth');
const userRoutes = require('./route.users');
const postRoutes = require('./routes.posts');
const commentRoutes = require('./routes.comments');
const reportRoutes = require('./routes.reports');
const likeRoutes = require('./routes.likes');
const reportTypeRoutes = require('./route.report-type');
const profilePictureRoutes = require('./route.profile-picture');

router.use(authRoutes);
router.use(userRoutes);
router.use(postRoutes);
router.use(commentRoutes);
router.use(reportRoutes);
router.use(reportTypeRoutes);
router.use(likeRoutes);
router.use(profilePictureRoutes);

module.exports = router;
