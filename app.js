// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const postRoute = require('./routes/postRoutes');
const path = require("path");

const app = express();
app.use(express.static(path.resolve(__dirname, "dist")));
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

require('dotenv').config()


app.use('/api/users', userRoutes);
app.use('/api/posts', postRoute);

const username = process.env.NAME;
const password = process.env.PASSWORD;

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.vcvntjs.mongodb.net/houseDB?retryWrites=true&w=majority&appName=Cluster0`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));



    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "dist", "index.html"))
      );
          
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
