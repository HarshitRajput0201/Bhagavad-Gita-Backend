require('dotenv').config();
const Chapter = require('../models/chapterModel');

exports.chapterController = async (req, res) => {
    try {
        const chapter = req.params.ch;

        if (!isNaN(chapter) && chapter > 0 && chapter <= 18) {
            const data = await Chapter.find({ chapter_number: chapter }, { _id: 0 });

            if (!data || data.length === 0) {
                console.log(`Invalid Chapter Number`);
                return res.status(400).json({
                    error: 'This Chapter does not exist. Try only 1 to 18'
                });
            }

            console.log('Successfully completed request');
            return res.json(data[0]);
        } else {
            return res.status(400).json({
                error: 'Invalid Chapter Number. Please provide a number between 1 and 18.'
            });
        }
    } catch (error) {
        console.error('Error in chapterController:', error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};
