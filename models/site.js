const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
    site: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    },
    changeHistory: [{
        oldIp: {
            type: String,
            required: true
        },
        newIp: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }]
}, {
    timestamps: true
});

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;