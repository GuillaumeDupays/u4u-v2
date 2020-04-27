const express = require('express');
const app = express();
const api = require('./api/v1/index');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const connection = mongoose.connection;

app.set('port', (process.env.port || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({credentials: true, origin: 'http://vps815314.ovh.net:4200'}));

app.use('/api/v1', api);
app.use((req, res) => {
   const err = new Error('404 - Non trouvé');
   err.status = 500;
   res.json({ msg: '404 - Non trouvé', err: err});
});

mongoose.connect('mongodb://vps815314.ovh.net:27017/contacts', { useNewUrlParser: true});
connection.on('error', (err) => {
   console.error(`erreur de connexion vers MongoDb: ${err.message}`);
});

connection.once('open', () => {
   console.log('Connecté à MongoDb');

   app.listen(app.get('port'), () => {
      console.log(`le serveur express écoute le port ${app.get('port')}`);
   });
});
