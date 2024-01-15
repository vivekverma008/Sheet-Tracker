require('dotenv').config();
const express = require('express');
const cors = require('cors');


const port = process.env.PORT || 8080 ;

require('./config/dbconfig');

const app = express();

app.use(cors());




app.use(express.json());
app.use(express.urlencoded());



app.use('/api/v1',require('./services/api/v1'));


app.listen(port,()=>{
    console.log("server is up and running on port ",port);
})