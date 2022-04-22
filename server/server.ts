import app from "./app"

const port = process.env.APP_PORT || 3000
app
  .listen(port, (): void => {
    console.log(`Server running on port ${port}`)
  })
  .on("error", (e: Error) => console.log(e))

export default app
