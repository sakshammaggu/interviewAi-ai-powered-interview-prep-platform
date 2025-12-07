const express = require('express');
const {
    createSession,
    getSessionById,
    getMySessions,
    deleteSession
} = require('../controllers/sessionController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/create', protect, createSession);
// This change is critical because 'my-sessions' matches the :id pattern.
router.get('/my-sessions', protect, getMySessions);
router.get('/:id', protect, getSessionById);
router.delete('/:id', protect, deleteSession);

module.exports = router;