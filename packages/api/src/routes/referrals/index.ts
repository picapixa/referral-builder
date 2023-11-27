import { Router } from "express";

import GET_REFERRAL from "./:id/get";
import GET from "./get";
import POST from "./post";

const router = Router();

router.get("/", GET);
router.post("/", POST);

router.get("/:id", GET_REFERRAL);

export default router;
