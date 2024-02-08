const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRoutes.js');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
app.use(express.json()); // Make sure it comes back as json
app.use(cors());
const DB_HOST = "cluster0.aggzi5g.mongodb.net";
const DB_USER = "alvaroaguirremeza";
const DB_PASSWORD = "Charmander3";
const DB_NAME = "w2024_comp3133_labtest1";
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Success: MongoDB connected');
}).catch(err => {
  console.error('Error: MongoDB connection failed:', err);
});

app.use(userRouter);
app.use(messageRoutes);
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
