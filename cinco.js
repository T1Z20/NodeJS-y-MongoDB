const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "Sakila";


async function main() {
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      console.log("Conectado a MongoDB");
  
      const db = client.db(dbName);
  
    await cinco(db);

  
    } finally {
      await client.close();
    }
  }

  async function cinco(db) {
    const resultado = await db.collection("payment").aggregate([
      {
        $group: {
          _id: null,
          minAmount: { $min: "$amount" },
          maxAmount: { $max: "$amount" }
        }
      }
    ]).toArray();
    console.log("Cantidad más baja y más alta de amount:", resultado);
  }

  main().catch(console.error);