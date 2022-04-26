import express, { Application } from "express"
const app: Application = express()
import bodyParser from "body-parser"
import helmet from "helmet"
import { router } from "./api/routes/routes"
import "dotenv/config"

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", router)

export { app }
