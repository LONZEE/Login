const User = require('../models/User');
const { hashPassword, comparePassword } = require('../helper/auth');

const test = (req, res) => {
    res.json('This is a TEST');   // Send a JSON response
};

const registerUser = async (req, res) => {
    // res.json('Registering a new user');
    try {
        const { name, email, password } = req.body;
        if (!name) {    // Name is required
            return res.json({ error: 'Name is required' });
        }
        
        if (!password || password.length < 6) {     // Password must be at least 6 characters long
            return res.json({ error: 'Password is required' });
        }

        const exist = await User.findOne({ email });    // Check if email is already taken
        if (exist) {
            return res.json({ error: 'Email is already taken' });
        }

        // Register a new user
        const hashedPassword = await hashPassword(password);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        console.log(user);
        return res.json(user);

    } catch (error) {
        // Handle error
        console.log(error);
    }
};

// login

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if (user) {
            return res.json({ message: 'User found'});
        }
        return res.json({ error: 'User not found' });
    }
    catch (error) {
        console.log(error);
    }
        const match = await comparePassword(password, user.password);  // user.password is the hashed password created in the register function
        if (match) {
            return res.json({ message: 'User logged in successfully' });
        } else {
            return res.json({ error: 'Invalid credentials' });
        }
}




module.exports = {
    test,
    registerUser,
    loginUser
};