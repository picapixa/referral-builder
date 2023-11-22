import { Router } from "express";
import getReferralsRoute from "./get";

const router = Router();
router.get("/", getReferralsRoute);

export default router;
