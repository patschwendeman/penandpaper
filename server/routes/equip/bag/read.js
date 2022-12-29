const express = require('express');
const router = express.Router();
//Import Data Model
const equipBagModel = require("../../../models/equipBag");  


//Read all Todos from the Database
router.get("/:_id", async (req, res)=>{  

    const _id = req.params._id;
    try {
        await equipBagModel.findById(_id, (err, result)=> {
            res.send(result);
        });
        
    }
    catch(err){
        console.log(err)
    }
   
});

module.exports = router;