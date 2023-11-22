import { createEnv } from "@t3-oss/env-core";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { z } from "zod";

import routes from "./routes";

// const env = createEnv({
//   runtimeEnv: process.env,
//   server: {
//     DATABASE_URL: z.string().url(),
//   }
// });
const env = {};

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

routes(app);

export {
  env,
  app as default,
};

