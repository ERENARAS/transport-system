import express from "express";
import helmet from "helmet";
import cors from "cors";

import { notFound } from "./middlewares/notFound.middleware";
import { errorHandler } from "./middlewares/error.middleware";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

app.get("/health", (_, res) => {
    res.json({
        success: true
    });
});

app.use(notFound);

app.use(errorHandler);

export default app;