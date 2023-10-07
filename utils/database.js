const mongodb = require("mongodb");
// const { mongoConnect } = require("./utils/database");
const mongoClient = new mongodb.MongoClient(
  "mongodb+srv://varshithreddy:varshith19@cluster0.9hmrp.mongodb.net/"
);

// Connecting to DB
exports.mongoConnect = async function () {
  try {
    const db = await mongoClient.connect();
    console.log("Connected to DB");
    // await listDatabases(mongoClient);
    // console.log(db);
  } catch (error) {
    console.log(error);
  }
};
