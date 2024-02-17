const mongoose = require('mongoose');

const slokSchema = new mongoose.Schema(
    {
        _id: String,
        chapter: Number,
        verse: Number,
        slok: String,
        transliteration: String,
        tej: Object,
        siva: Object,
        purohit: Object,
        chinmay: Object,
        san: Object,
        adi: Object,
        gambir: Object,
        madhav: Object,
        anand: Object,
        rams: Object,
        raman: Object,
        abhinav: Object,
        sankar: Object,
        jaya: Object,
        vallabh: Object,
        ms: Object,
        srid: Object,
        dhan: Object,
        venkat: Object,
        puru: Object,
        neel: Object
    }
)

module.exports = mongoose.model('Slok', slokSchema);
