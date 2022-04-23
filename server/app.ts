import express, { Application } from "express"
const app: Application = express()
import bodyParser from "body-parser"
import helmet from "helmet"
import { RoutesV1 } from "./api/v1/routes/routes"

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", RoutesV1)

// * Server
const port = process.env.APP_PORT || 3000
app
  .listen(port, (): void => {
    console.log(`Server running on port ${port}`)
  })
  .on("error", (e: Error) => console.log(e))
