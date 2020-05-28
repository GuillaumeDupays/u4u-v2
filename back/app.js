const express = require('express');
const app = express();
const api = require('./api/v1/index');
const auth = require('./auth/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const connection = mongoose.connection;

app.set('port', (process.env.port || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({credentials: true, origin: 'http://usforyou.net'}));
// http://usforyou.net
//passport
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Strategy = require('passport-local').Strategy;
const User = require('./auth/models/user');

app.use(cookieParser());
app.use(session({
   secret: 'mon super secret',
   resave: true,
   saveUninitialized: true,
   name: 'usforyou-cookie'
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
   cb(null, user);
});

passport.deserializeUser((user, cb)=> {
   cb(null, user);
});

passport.use(new Strategy({
   usernameField: 'username',
   passwordField: 'password'
}, (nom, pwd, cb) => {
   User.findOne({ username: nom }, ( err, user) => {
      if (err) {
         console.error(`on ne trouve pas ${nom} dans MongoDb`, err);
         cb(null,false);
      }
      if (user.password !== pwd) {
         console.log(`mauvais mot de passe concernant ${nom} dans MongoDb`, err)
      } else {
         console.log(`${nom} trouvé dans MongoDb et authentifié`);
         cb(null, user);
      }
   });
}));


app.use('/api/v1', api);
app.use('/auth', auth);

app.use((req, res) => {
   const err = new Error('404 - Non trouvé');
   err.status = 500;
   res.json({ msg: '404 - Non trouvé', err: err});
});

mongoose.connect('mongodb://localhost:27017/contacts', { useNewUrlParser: true});
connection.on('error', (err) => {
   console.error(`erreur de connexion vers MongoDb: ${err.message}`);
});

connection.once('open', () => {
   console.log('Connecté à MongoDb');

   app.listen(app.get('port'), () => {
      console.log(`le serveur express écoute le port ${app.get('port')}`);
   });
});
