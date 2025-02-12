import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get('/', async(req, res) => {
  let collection = db.collection("users");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
})