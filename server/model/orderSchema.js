const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  top: String,
  bottom: String,
  set: String,
  fabric: String,
  measurements:
  {
    collor: String,

    sholderwidth: String,

    sleeveslenght: String,

    wrist: String,

    bicep: String,

    armpit: String,

    chest: String,

    waist: String,

    shirtlenght: String,

    pantwaist: String,

    hips: String,

    crotch: String,

    tigh: String,

    calf: String,

    pantlength: String,

    unisexsize: String,

    nopairs: Number,

  },

  cost: Number,
});



module.exports = orderSchema;