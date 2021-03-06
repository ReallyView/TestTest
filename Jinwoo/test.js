var express = require('express');
var express_graphql = require('express-graphql');
var {buildSchema} = require('graphql');

var schema = buildSchema('type Query{title: String, content: String, reviews: String}');

var root = {
    title: () => 'test Title',
    content: () => 'test content',
    reviews: () => 'test reviews'
};

var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
