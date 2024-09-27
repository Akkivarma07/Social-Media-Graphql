const dotenv = require("dotenv");
const express = require("express"); 
const dbConnect = require("./dbConnect");
// const {ApolloServer}=require("apollo-server");
const {ApolloServer}=require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const resolvers=require("../Backend/graphql/resolvers/PostResolver");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const typeDefs=require('./graphql/typeDefs/typeDefs');
dotenv.config("./.env");
const app = express();
app.use(bodyParser.json());
const server = new ApolloServer({ typeDefs, resolvers });
// const pubsub = new PubSub();
const PORT = 5000;

app.use("/graphql", expressMiddleware(server));

app.get("/", (req, res) => {
    res.status(200).send("OK from Server Systumm is Okkk");
});
dbConnect();
async function startServer(){
  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
await server.start();
app.listen(5000, () => console.log("Serevr Started at PORT 5000"));


}
app.use("/graphql", expressMiddleware(server));

