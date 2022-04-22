import { Router } from "express"
import { UsersRoute } from "./user-route"

const router: Router = Router()

router.use("/", UsersRoute)

export const RoutesV1: Router = router
