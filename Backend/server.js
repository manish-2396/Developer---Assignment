const express = require('express');
const cors = require('cors');
const { connection } = require('./Config/db');
const { UserController } = require('./Controller/UserController');
const app = express();

const PORT = process.env.PORT || 8080;
app.use(cors())
app.use(express.json())

app.use('/' , UserController)

app.listen(PORT , async() => {

    try{
        await connection;
        console.log('Connect to DB and PORT No:-' , PORT )
    }
    catch(err){
        console.log('not connected to DB' , err)
    }
})