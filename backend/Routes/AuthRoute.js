import { Signup ,Login} from "../controllers/AuthController.js";
import express from "express";
import { userVerification } from "../middleware/AuthMiddleware.js";
const router = express.Router();
router.post("/",userVerification);
router.post("/newuser", Signup);
router.post("/loginuser",Login);

export default router;