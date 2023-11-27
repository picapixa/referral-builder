import dotenv from "dotenv";
import "module-alias/register";

import app from "./app";

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
});
