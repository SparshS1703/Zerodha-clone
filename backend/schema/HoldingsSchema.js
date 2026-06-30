import mongoose, { Schema } from "mongoose";

export const holdingSchema=new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

