// get users armies
require('dotenv').config()
const express = require('express')
const router = express.Router()
const db = require('../db')
const Seminar = require('../models/seminars')

router.get('/api/createSeminar/:title/:organizer/:date/:location/:description/:price/:contact/:img', (req,res) => {
    const [title, organizer, date, location, description, price, contact, img] = [req.params.title, req.params.organizer, req.params.date, req.params.location, req.params.description, req.params.price, req.params.contact, req.params.img]
    return Seminar.createSeminar(title, organizer, date, location, description, price, contact, img)
})

router.post('/api/update/:id/:title/:organizer/:date/:location/:description/:price/:contact/:img', (req,res) => {
    const [title, organizer, date, location, description, price, contact, img, id] = [req.params.title, req.params.organizer, req.params.date, req.params.location, req.params.description, req.params.price, req.params.contact, req.params.img, req.params.id]
    return Seminar.updateSeminar(id, title, organizer, date, location, description, price, contact, img, id)
})

router.delete('/api/delete/:id', (req,res) => {
    return Seminar.deleteSeminar(req.params.id)
})

router.get('/api/feature/:id/:featured', (req,res) => {
    return Seminar.featureSeminar(req.params.featured, req.params.id)
})

module.exports = router