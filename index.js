const express = require("express")
const app = express()

app.use(express.json())

const addNumbers = require("./addNumbers")

app.get("/", (_req, res) => res.send("<h1>Hello World!<h1>"))

app.post("/add", (req, res) => {
  const { numbers } = req.body

  if (
    !numbers ||
    !Array.isArray(numbers) ||
    numbers.length === 0 ||
    numbers.some((number) => typeof number !== "number")
  ) {
    return res.status(400).json({ error: "numbers missing" })
  }

  const result = addNumbers(numbers)
  res.json({ result })
})

app.post("/read", (req, res) => {})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
