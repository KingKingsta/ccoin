// const { createServer } = require("http");

// const next = require("next");

// const app = next({
//     dev: process.env.NODE_ENV !== "production",
// });

// const routes = require("./routes");
// const handler = routes.getRequestHandler(app);

// app.prepare().then(() => {
//     createServer(handler).listen(3000, (err) => {
//         if (err) throw err;
//         console.log("Ready on localhost:3000");
//     });
// });

const express = require('express')

const colors = require('colors');

// const cors = require('cors');

require('dotenv').config()

const { graphqlHTTP } = require('express-graphql')

const schema = require('./schema/schema')
const connectDB = require('./config/db');

const port = process.env.PORT || 5000

const app = express()

// Connect to database
connectDB();

// app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: process.env.NODE_ENV === 'development',
    })
)

app.listen(port, console.log(`Server running on port ${port}`))