import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import logger from "./logger";

async function connect() {
  const dbUri = process.env.dbUri!;

  try {
    await mongoose.connect(dbUri);
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
