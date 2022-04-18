import express from "express"

const app = express()

app.get("/", (req, res) => {
  return res.send("Hello world")
})

const port = process.env.PORT || 3000
app.listen(port, (): void => {
  console.log(`Server running on port ${port}`)
})
