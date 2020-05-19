const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)
app.get('/', (req,res) => res.send('We are on Home'));


mongoose.connect( process.env.DB_connection,{   useNewUrlParser: true, useUnifiedTopology: true},
    () =>{
        console.log('connected to DB!')
    })

const PORT = process.env.PORT || 5432;

app.listen(PORT,() => console.log(`Magic happen at http://127.0.0.1:${PORT}`))