const GroupMessage = require('../models/GroupMessage');
const PrivateMessage = require('../models/PrivateMessage');

const messageController = {
  saveGroupMessage: async (req, res) => {
    try {
      const { from_user, room, message } = req.body;
      const newGroupMessage = new GroupMessage({ from_user, room, message });
      await newGroupMessage.save();
      res.status(201).json({ message: 'Group message saved successfully' });
    } catch (error) {
      console.error('Error saving group message:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  sendPrivateMessage: async (req, res) => {
    try {
      const { from_user, to_user, message } = req.body;
      const newPrivateMessage = new PrivateMessage({ from_user, to_user, message });
      await newPrivateMessage.save();
      res.status(201).json({ message: 'Private message sent successfully' });
    } catch (error) {
      console.error('Error sending private message:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = messageController;