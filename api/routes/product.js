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
    const product={
        name:req.body.name,
        price:req.body.price
    };
    res.status(200).json(
        {
            message: 'product post',
            endproduct: product
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