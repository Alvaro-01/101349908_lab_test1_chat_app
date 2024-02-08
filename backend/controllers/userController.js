const User = require('../models/User');


const authController = {
    signup: async (req, res) => {
      try {
        // Extract user data from request body
        const { username, firstname, lastname, password } = req.body;
  
        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          return res.status(400).json({ error: 'Username already exists' });
        }
  
        // Create new user
        const newUser = new User({
          username,
          firstname,
          lastname,
          password // Storing password directly without hashing
        });
  
        // Save user to database
        await newUser.save();
  
        res.status(201).json({ message: 'User created successfully' });
      } catch (error) {
        console.error('Error in signup:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    },
    
    getAllUsers: async (req, res) => {
      try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }

  };
  
  module.exports = authController;