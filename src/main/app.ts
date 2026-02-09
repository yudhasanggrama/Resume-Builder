import "dotenv/config";
import express from "express";
import cors from "cors";
import { errorHandler } from "../middleware/error";
import { router } from "../routes/resume-route";
import { accountRoutes } from "../routes/account-route";
import { authRoutes } from "../routes/auth-route";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import YAML from "yaml";

export const app = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));
const openapiPath = path.join(__dirname, "openapi.yaml");
const openapiFile = fs.readFileSync(openapiPath, "utf8");
const openapiSpec = YAML.parse(openapiFile);


app.get("/health", (_, res) => res.json({ ok: true }));

app.use("/api/v1", accountRoutes);
app.use("/api/v1", router);
app.use("/api/v1", authRoutes);

app.get("/api-docs.json", (_req, res) => res.json(openapiSpec));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpec));

app.use(errorHandler);
