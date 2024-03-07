const bcrypt = require('bcrypt');
const User = require('../../models/users/users.mongo');
const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY

async function getAllUsers(req, res) {
    try {
        const users = await User.find({}, 'email username role');
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function signUp(req, res) {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Email or username already exists' });
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ email: newUser.email, username: newUser.username }, SECRET_KEY, { expiresIn: '1h' });

        res.status(201).json({ token, user: { username: newUser.username, role: newUser.role } });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


async function signIn(req, res) {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const payload = {
            username : user.username,
            email : user.email

        }
         // Generate JWT token
         const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

         res.json({ token, user: { username: user.username, role: user.role } });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getAllUsers,
    signUp,
    signIn
}
