const mongoose = require('mongoose');

const mapDataSchema = new mongoose.Schema({
    name: {type: String, required: true},
    longitude: {type: Number, required: true},
    latitude: {type: Number, required: true},
    id: {type: String, required: true}
});

module.exports = mongoose.model('MapData', mapDataSchema);