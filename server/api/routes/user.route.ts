import { Request, Response, Router } from "express"
import { createUser } from "../../db/controllers/user.controller"

const router: Router = Router()

router.get("/", async (req: Request, res: Response) => {
  const query = await createUser({ email: "tajeddine.js@hotmail.com", username: "Tajeddine", password: "123" })
  res.send(query)
})

export const RUser: Router = router
