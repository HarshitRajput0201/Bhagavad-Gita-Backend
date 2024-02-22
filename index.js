const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())


require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const dbConnect = require('./config/database');
dbConnect();

const user = require('./routes/dataRoutes');
app.use('/api/v1', user);

app.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`);
})
