const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const uri = 'mongodb://amit.patil:Jaguar%4012@txmongowcsdev1.mouser.lan:27017,txmongowcsdev2.mouser.lan:27018,txmongowcsdev3.mouser.lan:27019/?authMechanism=PLAIN&authSource=%24external&tls=true&tlsCAFile=C%3A%5CAmit%5CMongoDB%5CSecurity_certificate%5Cmouser-lan-root-ca+%282%29.crt';

const clientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'AMITTEST' // Specify the desired database here
  };

  mongoose.connect(uri, clientOptions)
  .then(() => {
    console.log('Connected to AMITTEST database');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


const allocStatsSchema = new Schema({
    created_time: {
        type: Date,
        required: true
    },
    order: {
        type: String,
        required: true
    },
    order_line: {
        type: String,
        required: true
    },
    zone: {
        type: String,
        required: true
    },
    subzone: {
        type: String,
        required: true
    },
    loc: {
        type: String,
        required: true
    },
    ibn: {
        type: String,
        required: true
    },
    strgtype: {
        type: String,
        required: true
    },
    reason_end: {
        type: String,
        required: true
    },
    deleted_time: {
        type: Date,
        required: true
    },
    first_scheduled: {
        type: Boolean,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    alloc_type: {
        type: String,
        required: true
    }
});

// module.exports = mongoose.model('AllocStats', allocStatsSchema, 'alloc_stats');
module.exports = mongoose.model('AllocStats', allocStatsSchema,'alloc_stats');
