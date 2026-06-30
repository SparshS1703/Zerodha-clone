import { model } from "mongoose";
import {positionSchema} from "../schema/PositionSchema.js";

export const positionModel=new model("position",positionSchema);

