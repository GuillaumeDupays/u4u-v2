const express = require('express');
const router = express.Router();

const Contact = require('../models/contact');
const Etat = require('../models/etat');
const mongoose = require('mongoose');

router.get('/ping', (req, res) => {
   res.status(200).json({ msg: 'pong', date: new Date()});
});

router.get('/contacts', (req, res) => {
        Contact.find()
            .sort({ 'createdOn': -1 })
            .exec()
            .then(post => res.status(200).json(post))
            .catch(err => res.status(500).json({
                message: 'contacts non trouvés',
                error: err
            }));
});//http://localhost:3000/api/v1/contacts

/*router.get('/contacts/etat', (req, res) => {
    Etat.find()
        .sort({ 'createdOn': -1 })
        .exec()
        .then(etat => res.status(200).json(etat))
        .catch(err => res.status(500).json({
           message: 'etat non trouvé',
           error: err
        }));
});//http://localhost:3000/api/v1/etat*/

router.post('/contacts', (req, res ) => {
   console.log('req.body', req.body);
   const post = new Contact(req.body);
   post.save((err, post) => {
      if (err) {
          return res.status(500).json(err);
      }
      res.status(201).json(post);
   });
});

module.exports = router;
