import { NextFunction, Request, Response, Router } from "express"

const router: Router = Router()

router.get("/user", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello")
})

export const UsersRoute: Router = router
