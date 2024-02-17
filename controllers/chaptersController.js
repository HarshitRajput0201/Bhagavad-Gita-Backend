const Chapter = require('../models/chapterModel');
require('dotenv').config();

exports.chaptersController = async (req, res) => {
    try {
        const data = await Chapter.find({}, { _id: 0 }).sort({ chapter_number: 1 });

        if (!data || data.length === 0) {
            console.info('Data not found');
            return res.status(400).json({ 
                error: 'Data not found'
            });
        }

        console.info('Successfully completed request');
        return res.json(data);
    } catch (error) {
        console.error('Error in chaptersController:', error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
