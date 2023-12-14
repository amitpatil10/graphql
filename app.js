const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = require('./schema');
const resolvers = require('./resolvers');

const Event = require('./models/event');
const User = require('./models/user');
const Pick_forecast = require('./models/pick_forecast');
const PickupForecastSummary = require('./models/pickup_forecast_summary');


const app = express();

// Connection URI for MongoDB with LDAP authentication
const uri = 'mongodb://amit.patil:Jaguar%4012@txmongowcsdev1.mouser.lan:27017,txmongowcsdev2.mouser.lan:27018,txmongowcsdev3.mouser.lan:27019/?authMechanism=PLAIN&authSource=%24external&tls=true&tlsCAFile=C%3A%5CAmit%5CMongoDB%5CSecurity_certificate%5Cmouser-lan-root-ca+%282%29.crt';

// Additional options (if needed)
const clientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  

app.use(bodyParser.json());

app.use('/graphql',
 graphqlHttp({
        schema: schema,
        rootValue: resolvers,
        graphiql: true
    }
));


// Connect to MongoDB using the specified URI
mongoose.connect(uri, clientOptions)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(4000, () => {
      console.log('Server is running on port 4000');
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });



// mongoose.connect(
//    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustera.t3pydgq.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    
//     ).then(() => {
//         app.listen(3000);
//     })
//     .catch(err => {
//         console.log(err);
//     });

