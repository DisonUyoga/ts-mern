import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import path from 'path'

dotenv.config()

mongoose
  .connect(process.env.MERN_DB)
  .then(() => {
    console.log('connection successful')
  })
  .catch(() => {
    console.log('something went wrong')
  })

const app = express()
app.use(cookieParser())
app.use(express.json())

const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, 'amazon/dist')))

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'amazon', 'dist', 'index.html'))
})

app.use((err, req, res) => {
  const message = err.message || 500
  const statusCode = err.statusCode || 'Internal Server Error'
  return res.json({
    success: false,
    statusCode,
    message,
  })
})

app.listen(5000, () => {
  console.log('Server connected to port 5000...')
})
