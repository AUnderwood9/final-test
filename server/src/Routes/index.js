import express from "express";
import bookRoutes from "./books";
import authorsRoutes from "./authors";

const router = express.Router();

router.use("/books", bookRoutes);
router.use("/authors", authorsRoutes);

module.exports = router;