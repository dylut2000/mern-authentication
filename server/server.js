import express from 'express'
import cors from 'cors'

const app = express()

/** middlewares */

app.use(express.json())
app.use(cors())
app.disable('x-powered-by')

const port = 8080

/** HTTP GET request */

app.get('/', (req, res) => {
  res.status(200).json('Server is up')
})

/** start server */

app.listen(port, () => {
  console.log(`server is up on http://localhost:${port}`)
})
