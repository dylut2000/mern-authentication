import express from 'express'
import cors from 'cors'
import connect from './database/connect.js'
import morgan from 'morgan'
import router from './router/route.js'

const app = express()

/** middlewares */

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')

const port = 8080

/** HTTP GET request */

app.get('/', (req, res) => {
  res.status(200).json('Server is up')
})

/** API routes */

app.use('/api', router)

/** start server only when we have valid connection */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`server is up on http://localhost:${port}`)
      })
    } catch (error) {
      console.log('Cannot start the server')
    }
  })
  .catch((error) => {
    console.log('invalid database connection')
    console.log(error)
  })
