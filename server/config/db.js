const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const _connect = mongoose.connect(process.env.MONGO_URI_LOCAL)
    console.log(
      `MongoDB connected : ${(await _connect).connection.host}`.underline.cyan
        .bgGreen
    )
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
