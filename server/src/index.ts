import express, { Request, Response, NextFunction } from 'express'
import 'dotenv/config'

console.log(process.env.PORT)

const app = express()
const port = process.env.PORT

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Express + TypeScript Server")
})

app.listen(port, () => {
  console.log(`🤖 BEEP BOOP - Server is running at http://localhost:${port}`)
})