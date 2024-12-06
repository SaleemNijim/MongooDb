import express from 'express'
import connectDB from './db/connectDb.js'
import { updateMany } from './models/Movies.js'

const app = express()
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/movies'
const port = process.env.PORT || 8000

console.clear()
connectDB(DATABASE_URL)

updateMany('6752d4e85886b72213866ce4')

app.listen(port, () => console.log(`Server Up on Port ${port}`))