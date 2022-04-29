const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      require: [true, 'Please add a text value'],
    },
  },
  {timestamps: true}
)

module.exports = mongoose.model('Goal', schema)
