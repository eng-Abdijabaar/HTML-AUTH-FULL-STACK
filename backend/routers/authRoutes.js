const express = require('express');
const uploads = require('../middlewares/uploadsMiddleware');
const { createUser, login } = require('../controllers/usreController');

const router = express.Router();

router.post('/createUser', uploads.single('image'), createUser )
router.post('/login', login);

module.exports = router;
