// server/models/Data.js
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    intensity: Number,
    likelihood: Number,
    relevance: Number,
    year: Number,
    country: String,
    topics: [String],
    region: String,
    city: String,
    sector: String,
    pest: String,
    source: String,
    swot: String
});

module.exports = mongoose.model('Data', DataSchema);
