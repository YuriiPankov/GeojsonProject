const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    crs: {
        type: {type: String, required: true},
        properties: {
            name: {type: String, required: true}
        }
    },
    features: [{
        type: {type: String, required: true},
        properties: {
            fid: {type: Number, required: true},
            handle: {type: Number, required: true},
            block: {type: Number, required: true},
            etype: {type: Number, required: true},
            space: {type: Number, required: true},
            layer: {type: String, required: true},
            olinetype: {type: String, required: true},
            linetype: {type: String, required: false},
            color: {type: String, required: true},
            ocolor: {type: Number, required: true},
            color24: {type: Number, required: true},
            transparency: {type: Number, required: true},
            lweight: {type: Number, required: true},
            linewidth: {type: Number, required: true},
            ltscale: {type: Number, required: true},
            visible: {type: Number, required: true},
            width: {type: Number, required: true},
            thickness: {type: Number, required: true},
            ext: {type: String, required: false}
        },
        geometry: {
            type: {type: String, required: true},
            coordinates: [[{type: Number, required: true}]]
        }
    }]
});

module.exports = mongoose.model('Data', dataSchema);