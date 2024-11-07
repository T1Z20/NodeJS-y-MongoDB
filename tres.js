const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "Sakila";


async function main() {
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      console.log("Conectado a MongoDB");
  
      const db = client.db(dbName);
  
    await tres(db);
    
  
    } finally {
      await client.close();
    }
  }

  async function tres(db) {
    const resultado = await db.collection("customer").find({}, {
      projection: { store_id: 1, first_name: 1, last_name: 1 }
    }).sort({ last_name: -1 }).toArray();
    console.log("Clientes ordenados por Apellido:", resultado);
  }

  main().catch(console.error);