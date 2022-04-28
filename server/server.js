const express = require('express')
const cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const {errorHandler} = require('./middlewares/errorMiddleware')
const PORT = process.env.PORT || 4000

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use('/', (req, res) => {
  res.status(200).json({message: 'The server is up'})
})

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`))
