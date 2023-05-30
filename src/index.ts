import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "./items/items.router";

dotenv.config();

//App Variables
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// App Configuration
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
///api/v1/items = this could be context_path. you name it
app.use("/items", router);


// Server Activation
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}, visit -> http://localhost:${PORT}/items`);
});

