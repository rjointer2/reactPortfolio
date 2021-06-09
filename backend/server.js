
// modules for server

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// application invoked

const app = express();

// graphQL modules

const { graphqlHTTP } = require('express-graphql');

// Schema and Resolvers here...

// middleware

app.use('/', graphqlHTTP({
    // schema
    // rootValue
    // graphql interface
}));

// application route

app.get('/', (req, res) => {
    // we haven't serve any static files or path yet 
    res.json('hello world')
})

// Database connection for mongoDB


