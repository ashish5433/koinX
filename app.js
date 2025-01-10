import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import cron from 'node-cron'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import CryptoSchema from "./models/Schema.js";
import cryptoStatRoutes from "./routes/cryptoStatRoutes.js"
import cryptoDeviationStatRoute from "./routes/cryptoDeviationStatRoute.js"
require('dotenv').config();


const app=express();
const PORT = process.env.PORT || 3000
// Connecting the DataBase
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.error(`Error connecting the Db : ${err}`)
})

const fetchCryptoData = async()=>{
    const coins=['bitcoin','matic-network','ethereum'];

    const api_url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coins.join(',')}`

    try{
        const response=await axios.get(api_url);
        const data=response.data
        // console.log(data)

        const cryptoData=data.map((coin)=>({
            id:coin.id,
            name_of_bitcoin:coin.name,
            price_in_USD:coin.current_price,
            marketCap_in_USD:coin.market_cap,
            change_in_last_24hours:coin.price_change_percentage_24h

        }))
       
        await CryptoSchema.insertMany(cryptoData, { ordered: false });
        

        console.log("Data updated Successfully")
    }
    catch(err){
        console.error(err)
    }

}
cron.schedule("0 */2 * * *", () => {
    console.log("Fetching crypto data...");
    fetchCryptoData();
});



app.use('/api',cryptoStatRoutes);
app.use('/api',cryptoDeviationStatRoute);

app.get('/',(req,res)=>{
    res.send("Welcome to KoinX")
})

app.listen(PORT,()=>{
    console.log("Server is Running")
})