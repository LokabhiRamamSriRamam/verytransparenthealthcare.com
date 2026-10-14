import { Router } from "express";
import mongoose from "mongoose";

const router = Router();

router.get("/", (_req, res) => {
  const dbUp = mongoose.connection.readyState === mongoose.ConnectionStates.connected;
  res.status(dbUp ? 200 : 503).json({ status: dbUp ? "ok" : "degraded", db: dbUp ? "connected" : "disconnected" });
});

export default router;
