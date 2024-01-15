const express = require ('express');
const router = express.Router();

router.get('/',(req,res)=>{

    console.log("/services/api/v1/");

    return res.status(200).json({
        message : "working fine"
    });
})


module.exports = router;