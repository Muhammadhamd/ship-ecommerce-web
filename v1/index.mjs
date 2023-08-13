import express from "express"
import aboutAuth from "./routes/about.mjs"
const router = express.Router()

router.use(aboutAuth)

export default router