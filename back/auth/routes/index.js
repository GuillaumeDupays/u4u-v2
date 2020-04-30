const  express = require('express');
const router = express.Router();
const Utilisateur = require('../models/user');
const passport = require('passport');

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

router.post('/login', passport.authenticate('local', {
   successRedirect: 'auth/success',
   failureRedirect: '/auth/failure'
}));

router.post('/success', (req, res) => {
    res.status(200).json({ msg: 'logged OK !', user: req.username });
});

router.get('/failure', (req, res) => {
    res.status(401).json({ msg: 'Not logged...' });
});


module.exports = router;
