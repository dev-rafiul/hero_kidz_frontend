const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;
const dbaname = process.env.DBNAME;
export const collections = {
    PRODUCTS: "products",
    USERS: 'users',
    CART: 'cart'
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export const dbConnect = (cname) => {
    return client.db(dbaname).collection(cname)
}