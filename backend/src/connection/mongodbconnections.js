const MongoClient = require('mongodb').MongoClient;
 

const {
  MONGO_URL,
  MONGO_DBNAME 
} = process.env;

 
function mongoConnect(queryFunction){

  // Use connect method to connect to the server
MongoClient.connect(MONGO_URL, function(err, client) {
  const db = client.db(MONGO_DBNAME);
  queryFunction(db);
 // client.close();
});

}

module.exports={mongoConnect};
