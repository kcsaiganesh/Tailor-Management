const express = require('express');
const orderRouter = express.Router();
const Order = require('./../model/orderSchema');
const User = require('../model/userSchema');
const { ConnectionClosedEvent } = require('mongodb');

orderRouter.post('/orders', async (req, res) => {
    console.log(req.body)
    try {
        const order = new Order({
            top: req.body.top,
            bottom: req.body.bottom,
            set: req.body.set,
            fabric: req.body.fabric,
            measurements: {
                collor: req.body.collor,
                sholderwidth: req.body.sholderwidth,
                sleeveslenght: req.body.sleeveslenght,
                wrist: req.body.wrist,
                bicep: req.body.bicep,
                armpit: req.body.armpit,
                chest: req.body.chest,
                waist: req.body.waist,
                shirtlenght: req.body.shirtlenght,
                pantwaist: req.body.pantwaist,
                hips: req.body.hips,
                crotch: req.body.crotch,
                tigh: req.body.tigh,
                calf: req.body.calf,
                pantlength: req.body.pantlength,
                unisexsize: req.body.unisexsize,
                nopairs: req.body.nopairs,
            },
            cost: req.body.price,
        });
        console.log(order);
        User.order.push(req.body);
        await User.save(function (err) {
            if (!err) console.log('success');
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = orderRouter;
