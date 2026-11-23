import { Router } from "express";
import { randomUUID } from "node:crypto";
import { addRequest, listRequests } from "../store.js";

const router = Router();
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELDS = { name: 120, email: 200, company: 200, role: 120, website: 300, message: 2000 };

// POST /api/demo-requests — "Book a demo" form
router.post("/", async (req, res, next) => {
  try {
    const body = req.body ?? {};
    const data = {};
    for (const [key, max] of Object.entries(FIELDS)) {
      const v = typeof body[key] === "string" ? body[key].trim() : "";
      if (v.length > max) return res.status(400).json({ error: `${key} is too long (max ${max} characters).` });
      data[key] = v;
    }
    if (!data.name) return res.status(400).json({ error: "Please enter your name." });
    if (!EMAIL.test(data.email)) return res.status(400).json({ error: "Please enter a valid work email." });
    if (data.website && !/^https?:\/\//i.test(data.website)) {
      return res.status(400).json({ error: "Website should start with http:// or https://" });
    }

    const record = { id: randomUUID(), ...data, createdAt: new Date().toISOString() };
    await addRequest(record);
    console.log(`New demo request from ${record.email}`);
    res.status(201).json({ ok: true, id: record.id });
  } catch (err) {
    next(err);
  }
});

// GET /api/demo-requests — view saved requests
router.get("/", async (_req, res, next) => {
  try {
    res.json(await listRequests());
  } catch (err) {
    next(err);
  }
});

export default router;
