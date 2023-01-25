import mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, 'Please provide unique username'],
    unique: [true, 'Username exists'],
  },
  password: {
    type: String,
    require: [true, 'Please provide password'],
  },
  email: {
    type: String,
    require: [true, 'Please provide email'],
    unique: [true, 'Email exists'],
  },
  firstName: {type: String},
  lastName: {type: String},
  mobile: {type: String},
  address: {type: String},
  profile: {type: String},
})

export default mongoose.model.User || mongoose.model('User', UserSchema)
