import express from 'express'
import CryptoSchema from '../models/Schema.js'

const router=express.Router();

router.get('/deviation',async(req,res)=>{
    const {coin_name}=req.query

    if(!coin_name){
        return res.status(404).json({error:'Coin Data not found'})
    }
    try{
        const cryptoData=await CryptoSchema.find({id:coin_name}).sort({last_updated:-1}).limit(100);
        if(cryptoData.length===0){
           return res.status(404).json("No data found for given Query")
        }
        const prices = cryptoData.map(record => record.price_in_USD);
        const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;
        const variance =
            prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) /
            prices.length;
        const deviation = Math.sqrt(variance);
        res.json({ deviation: deviation.toFixed(2) });
    }catch(error){
        console.error(error)
        res.status(500).json({error:"Internal Server Error Occured"})
    }
})

export default router
