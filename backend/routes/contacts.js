const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// POST /contacts - Add a new contact
router.post('/', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).send(contact);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// GET /contacts - Retrieve all contacts
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.send(contacts);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// PUT /contacts/:id - Update a contact
router.put('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) return res.status(404).send({ error: 'Contact not found' });
        res.send(contact);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// DELETE /contacts/:id - Delete a contact
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).send({ error: 'Contact not found' });
        res.send(contact);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
