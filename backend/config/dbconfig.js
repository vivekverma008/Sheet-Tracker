const mongoose = require('mongoose');

const db = mongoose.createConnection(process.env.DB_URI);


db.on('connected',()=>{
    console.log("db connected");
})


db.on('error',(error)=>{

    console.log(process.env.DB_URI);

    console.log('error');
})



module.exports = {db};