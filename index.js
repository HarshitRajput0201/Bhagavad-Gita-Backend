const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// app.use(express.json());

// // const BlogRoutes = require('./routes/routeBlog');
// // app.use('/api/v1', BlogRoutes);

// const dbConnect = require('./config/database');
// dbConnect();

app.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`);
})