import express from "express"
import { login, logout, signup , updateProfile ,checkAuth} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router=express.Router();
router.post("/signup",signup);

router.post("/login", login);

router.post("/logout",logout );
router.put("/update-profile",protectRoute,updateProfile);
router.get("/test", (req, res) => {
  res.send("✅ Test route is working!");
});
router.get("/check",protectRoute,checkAuth);

// console.log("all routes");
export default router;
