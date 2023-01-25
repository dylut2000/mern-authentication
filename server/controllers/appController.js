/**
 * register user
 * POST: http://localhost:8080/api/register
 * @param {
 *  "username": "hardy",
 *  "email": "hardy@example.com",
 *  "password": "123456",
 *  "firstname": "hardy",
 *  "lastname": "hardy",
 *  "mobile": "1234567890",
 *  "address": "24 example, example, example",
 *  "profile": "",
 * }
 */

export async function register(req, res) {
  res.json('register route')
}

/**
 * login user
 * POST: http://localhost:8080/api/login
 * @param {
 *  "username": "hardy",
 *  "password": "123456",
 * }
 */

export async function login(req, res) {
  res.json('login route')
}

/**
 * get user by username
 * GET: http://localhost:8080/api/user/username
 */

export async function getUser(req, res) {
  res.json('get user route')
}

/**
 * update user
 * PUT: http://localhost:8080/api/updateuser
 * @param: {
 *  "id": "user-id",
 *  "firstname": "example"
 *  "address": "example",
 *  "profile": ""
 * }
 */

export async function updateUser(req, res) {
  res.json('update user route')
}

/**
 * generate random OTP
 * GET: http://localhost:8080/api/generateOTP
 */

export async function generateOTP(req, res) {
  res.json('generate OTP route')
}

/**
 * verify OTP
 * GET: http://localhost:8080/api/verifyOTP
 */

export async function verifyOTP(req, res) {
  res.json('verify OTP route')
}

/**
 * successfully redirect user when OTP is valid
 * GET: http://localhost:8080/api/createResetSession
 */

export async function createResetSession(req, res) {
  res.json('verify OTP route')
}

/**
 * update password when have a valid session
 * PUT: http://localhost:8080/api/resetPassword
 */

export async function resetPassword(req, res) {
  res.json('reset password route')
}