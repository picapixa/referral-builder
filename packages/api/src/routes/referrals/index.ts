import { Router } from "express";

import GET from "./get";
import POST from "./post";

const router = Router();

router.get("/", GET);
router.post("/", POST);

export default router;
