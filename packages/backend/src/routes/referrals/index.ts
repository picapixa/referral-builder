import { Router } from "express";

import DELETE_REFERRAL from "./:id/delete";
import GET_REFERRAL from "./:id/get";
import GET from "./get";
import POST from "./post";

const router = Router();

router.get("/", GET);
router.post("/", POST);

router.get("/:id", GET_REFERRAL);
router.delete("/:id", DELETE_REFERRAL);

export default router;
