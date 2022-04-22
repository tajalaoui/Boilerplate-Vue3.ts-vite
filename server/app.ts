import express, { Application } from "express"
const app: Application = express()
import bodyParser from "body-parser"
import helmet from "helmet"
import { RoutesV1 } from "./api/v1/routes/routes"

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", RoutesV1)

export default app
