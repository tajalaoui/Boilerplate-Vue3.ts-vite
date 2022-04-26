import { Router } from "express"
import { RUser } from "./user.route"

const router: Router = Router()

router.use("/user", RUser)

export { router }
