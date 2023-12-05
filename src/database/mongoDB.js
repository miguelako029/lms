const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = 3001;

// Replace this URL with your MongoDB connection string
const uri = 'mongodb://localhost:27017/your-database';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  client.connect();
});
