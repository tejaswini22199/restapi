const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>
{
    res.status(200).json(
        {
            message: 'product get'
        }
    );
});
router.post('/',(req,res,next)=>
{
    res.status(200).json(
        {
            message: 'product post'
        }
    );
});
router.get('/:productid',(req,res,next)=>
{
    const id=req.params.productid;
    res.status(200).json(
        {
            message: 'product get id'
        }
    );
});
module.exports=router;