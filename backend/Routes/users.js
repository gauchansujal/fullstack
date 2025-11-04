const express = require('express');
const router = express.Router();
const userController = require('../Controllers/usercontrollers');

router.get('/', userController.getUsers);
router.get('/', userController.getUserById);
router.post('/', userController.createUser);

module.exports = router;
