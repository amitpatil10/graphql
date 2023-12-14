const { MongoClient } = require('mongodb');

// Connection URI for MongoDB with PLAIN authentication and TLS/SSL
const uri = 'mongodb://amit.patil:Jaguar%4012@txmongowcsdev1.mouser.lan:27017,txmongowcsdev2.mouser.lan:27018,txmongowcsdev3.mouser.lan:27019/VSCODE?authMechanism=PLAIN&authSource=%24external&tls=true&tlsCAFile=C%3A%5CAmit%5CMongoDB%5CSecurity_certificate%5Cmouser-lan-root-ca+%282%29.crt';

// Additional options (if needed)
const clientOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
async function connectToMongoDB() {
  const client = new MongoClient(uri, clientOptions);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // Use client for database operations...
    
    // Example: List the databases
    const databasesList = await client.db().admin().listDatabases();
    console.log('Databases:', databasesList.databases.map(db => db.name));
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  } finally {
    // Close the connection when finished
    await client.close();
  }
}
console.log(databaseList);
connectToMongoDB();



