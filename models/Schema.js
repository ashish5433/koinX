import mongoose from "mongoose";

const mainSchema = new mongoose.Schema({
  id: 
  { type: String,
    required: true,
   }, 
  name_of_bitcoin: { type: String, required: true }, 
  price_in_USD: { type: Number, required: true }, 
  marketCap_in_USD: { type: Number, required: true }, 
  change_in_last_24hours: { type: Number, required: true }, 
  last_updated: { type: Date, default: Date.now }, 
});

export default mongoose.model("CryptoSchema", mainSchema);
