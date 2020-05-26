const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    civ: String,
    nom: String,
    prenom: String,
    email: String,
    phone: Number,
    dispoDate: String,
    poste: String,
    contrat: String,
    pretention: Number,
    msg: String,
    cv: String,
    conditionsUtilisation: String,
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', ContactSchema);
