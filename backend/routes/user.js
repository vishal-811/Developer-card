const {Router} =require('express');
const router =Router();
const {Card} =require('../db/index');

router.post('/card' ,async (req,res)=>{
    const {name,description,interest,links}=req.body;
    try {
        const newuser =await Card.create({
            name,
            description,
            interest,
            links
        })
        res.status(201).json({name,description,interest,links});
    } catch (error) {
        res.status(400).json({msg:"something went wrong"});
    }
})



module.exports=router;
