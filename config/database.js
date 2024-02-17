const mongoose = require('mongoose');
require('dotenv').config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then( () => {console.log('Connected to Database')})
    .catch( (error) => {
        console.error('Failed to Connect to Database',error)
        process.exit(1);
    })
}
module.exports = dbconnect;