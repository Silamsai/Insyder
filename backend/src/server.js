import express from "express";
import cors from "cors";
import demoRequests from "./routes/demoRequests.js";

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const origins = (process.env.CORS_ORIGIN || "http://localhost:3000").split(",").map((s) => s.trim());

app.use(cors({ origin: origins }));
app.use(express.json({ limit: "20kb" }));

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
app.use("/api/demo-requests", demoRequests);

app.use((_req, res) => res.status(404).json({ error: "Not found" }));
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.status ? err.message : "Server error" });
});

app.listen(PORT, () => console.log(`Insyder backend running on http://localhost:${PORT}`));
