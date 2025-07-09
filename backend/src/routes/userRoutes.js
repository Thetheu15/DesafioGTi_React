const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/me', authMiddleware, userController.getMe);
router.put('/me', authMiddleware, userController.updateMe);
router.put('/me/password', authMiddleware, userController.changePassword);

// Rotas de CRUD gerais
// router.get('/', authMiddleware, userController.getAllUsers);
// router.get('/:id', authMiddleware, userController.getUserById);
// router.put('/:id', authMiddleware, userController.updateUser);
// router.delete('/:id', authMiddleware, userController.deleteUser);


module.exports = router;