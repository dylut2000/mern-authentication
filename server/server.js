const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000

const app = express()

app.use('/api/goals', require('./routes/goalRoutes'))

app.use('/api', (req, res) => {
  res.status(200).json({message: 'The server is up'})
})

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`))
