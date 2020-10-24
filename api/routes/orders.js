const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>
{
    res.status(200).json(
        {
            message: 'order get'
        }
    );
});
router.post('/',(req,res,next)=>
{
    res.status(200).json(
        {
            message: 'order post'
        }
    );
});
router.get('/:orderid',(req,res,next)=>
{
    const id=req.params.productid;
    res.status(200).json(
        {
            message: 'each prder get'
        }
    );
});
module.exports=router;