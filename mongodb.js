const { MongoClient } = require('mongodb');

// Connection URI for MongoDB with PLAIN authentication and TLS/SSL
const uri = ''
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



