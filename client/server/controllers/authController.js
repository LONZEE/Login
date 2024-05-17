const User = require('../models/User');

const test = (req, res) => {
    res.json('This is a TEST');   // Send a JSON response
};

const registerUser = async (req, res) => {
    // res.json('Registering a new user');
    try {
        const { name, email, password } = req.body;
        if (!name) {
            return res.json({ error: 'Name is required' });
        }
        
        if (!password || password.length < 6) {
            return res.json({ error: 'Password is required' });
        }

        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: 'Email is already taken' });
        }

        // Register a new user

        const user = await User.create({
            name,
            email,
            password
        });

        console.log(user);
        return res.json(user);

    } catch (error) {
        // Handle error
        console.log(error);
    }
};

module.exports = {
    test,
    registerUser
};