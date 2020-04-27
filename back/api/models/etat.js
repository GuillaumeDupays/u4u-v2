const mongoose = require('mongoose');

const EtatSchema = new mongoose.Schema({
    source: String,
    contacte: String,
    cand1: String,
    cand2: String,
    proposition: String,
    embauche: String,
    aFaireArriver: String,
    enArrivee: String,
    dansEffectif: String,
    enDepart: String,
    parti: String,
});

module.exports = mongoose.model('Etat', EtatSchema);
