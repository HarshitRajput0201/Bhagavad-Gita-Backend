const Slok = require('../models/slokModel');
require('dotenv').config();

const slokfunction = (ch, sl) => {
    const slokCount = [47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78];
    const chapter = parseInt(ch) || 1;
    const slok = parseInt(sl) || 1;
    return `BG${chapter}.${slok}`;
};

exports.slokController = async (req, res) => {
    try {
        const chapter = req.params.ch;
        const slok = req.params.sl;

        if (!isNaN(chapter) && !isNaN(slok)) {
            const slokId = slokfunction(chapter, slok);
            const data = await Slok.findById(slokId);

            if (!data) {
                console.info(`Chapter or Slok does not exist`);
                return res.status(400).json({
                    error: 'Chapter or Slok does not exist'
                });
            }

            console.log('Successfully completed request');
            return res.json(data);
        } else {
            return res.status(400).json({
                error: 'Invalid request, please type valid input'
            });
        }
    } catch (error) {
        console.error(`Error : ${error}`);
        return res.status(500).json({ error: 'Technical Error' });
    }
};
