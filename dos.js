const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "Sakila";


async function main() {
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      console.log("Conectado a MongoDB");
  
      const db = client.db(dbName);
  
    await dos(db);
    
  
    } finally {
      await client.close();
    }
  }

  
  async function dos(db) {
    const resultado = await db.collection("customer").aggregate([
      {
        $project: {
          Tienda: "$store_id",
          Nombre: "$first_name",
          Apellido: "$last_name"
        }
      }
    ]).toArray();
    console.log("Clientes con columnas renombradas:", resultado);
  }

  main().catch(console.error);