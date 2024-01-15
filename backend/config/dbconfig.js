const mongoose = require('mongoose');

const db = mongoose.createConnection(process.env.DB_URI);


db.on('connected',()=>{
    console.log("db connected");
})


db.on('error',()=>{
    console.log('error')
})



module.exports = {db};