const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "Sakila";


async function main() {
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      console.log("Conectado a MongoDB");
  
      const db = client.db(dbName);
  
    await cuatro(db);
  
  
    } finally {
      await client.close();
    }
  }

  async function cuatro(db) {
    const resultado = await db.collection("payment").find({}).toArray();
    console.log("Pagos:", resultado);
  }

  main().catch(console.error);