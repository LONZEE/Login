const express = require('express'); // Express
const router = express.Router();    // Express Router
const cors = require('cors');       // CORS
const { test } = require('../controllers/authController'); // Controller

//middleware
router.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true
    }
));

router.get('/', test);

module.exports = router;