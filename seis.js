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
    //   await renombrarColumnas(db);
    //   await ordenarPorApellido(db);
    //   await consultarPagos(db);
    //   await determinarMinMax(db);
  
    } finally {
      await client.close();
    }
  }

  async function uno(db) {
    const resultado = await db.collection("customer").find({}, {
      projection: { store_id: 1, first_name: 1, last_name: 1 }
    }).toArray();
    console.log("Clientes:", resultado);
  }

  main().catch(console.error);