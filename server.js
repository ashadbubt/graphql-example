const express = require('express');
const path = require('path');
const { buildSchema }  = require('graphql');
// const { graphqlHTTP }  = require('express-graphql');

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { ApolloServer } = require('apollo-server-express');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolver.js'));

async function startApolloServer(){
    const app = express();
    const schema = makeExecutableSchema({
        typeDefs:typesArray,
        resolvers:resolversArray
    });
    const server = new ApolloServer({
        schema
    });
   await  server.start();
   server.applyMiddleware({app, path: '/graphql'});

   app.listen(3000,()=>{
        console.log(`running GraphQL server...`);
    })
}

startApolloServer();


// const app = express();

// app.use('/graphql',graphqlHTTP({
//     schema:schema,
//     graphiql: true
// }));
// app.listen(3000,()=>{
//     console.log(`running GraphQL server...`);
// })