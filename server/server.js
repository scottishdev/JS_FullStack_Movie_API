//DECLARE ALL EXTERNAL NODE MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(bodyParser.json());
app.use(cors());

//CONNECTS TO MONGODB
MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('moviesDb');
  const moviesCollection = db.collection('movies');
  const moviesRouter = createRouter(moviesCollection);
  app.use('/api/movies', moviesRouter);
})
.catch(console.error);


app.listen(3000, function(){
  console.log(`Listening on port ${this.address().port}`);
});
