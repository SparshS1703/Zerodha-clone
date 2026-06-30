import { Schema } from "mongoose";

export const orderSchema=new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
})

