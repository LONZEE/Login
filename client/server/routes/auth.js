const express = require('express'); // Express
const router = express.Router();    // Express Router
const cors = require('cors');       // CORS
const { test , registerUser, loginUser } = require('../controllers/authController'); // Controller

//middleware
router.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));

router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;