import { model } from "mongoose";
import {holdingSchema} from "../schema/HoldingsSchema.js";

export const holdingModel=new model("holding",holdingSchema);


