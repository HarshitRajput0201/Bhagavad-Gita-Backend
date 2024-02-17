const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema(
    {
        chapter_number: Number,
        verses_count: Number,
        name: String,
        translation: String,
        transliteration: String,
        meaning: Object,
        summary: Object
    }
)

module.exports = mongoose.model('Chapter', chapterSchema);


