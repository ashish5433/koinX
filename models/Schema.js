import mongoose from "mongoose";

const mainSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Coin ID
  name_of_bitcoin: { type: String, required: true }, // Name
  price_in_USD: { type: Number, required: true }, // Current price in USD
  marketCap_in_USD: { type: Number, required: true }, // Market cap in USD
  change_in_last_24hours: { type: Number, required: true }, // 24-hour % change
  last_updated: { type: Date, default: Date.now }, // Timestamp
});

export default mongoose.model("CryptoSchema", mainSchema);
