const  express = require('express');
const router = express.Router();
const Utilisateur = require('../models/user');

router.post('/register', (req, res) => {
   console.log('utilisateur depuis req.body', req.body);
   const newUtilisateur = new Utilisateur(req.body);
   newUtilisateur.save((err, user) => {
       if(err) {
           return res.status(500).json(err);
       }
      req.login(req.body, (err) => {
          if(err) {
              console.log('erreur dans le register | req.logIn()', err);
          }
          res.status(201).json(user);
      })
   });
});

module.exports = router;
