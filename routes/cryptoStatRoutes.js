import express from 'express'
import CryptoSchema from "../models/Schema.js";

const router=express.Router();

router.get('/stats',async(req,res)=>{
    const {coin_name}=req.query;
    // console.log(coin_name)
    if(!coin_name){
        return res.status(404).json({error:'Coin Data not found'})
    }
    try{
        const cryptoData=await CryptoSchema.findOne({id:coin_name}).sort({ last_updated: -1 });
        if(!cryptoData){
            return res.status(404).json({error:'Coin data not found'})
        }
        const response ={
            name:cryptoData.id,
            price:cryptoData.price_in_USD,
            marketCap:cryptoData.marketCap_in_USD,
            "24hChange": cryptoData.change_in_last_24hours
        }
        res.status(200).json({response})
    }catch(error){
        console.error(`Error fetching the data ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

export default router;