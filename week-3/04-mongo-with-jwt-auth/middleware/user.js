const jwt = require("jsonwebtoken")
const JWT_SECRET = 'secret'

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(" ")[1]
    try {
        const {username} = jwt.verify(token, JWT_SECRET)
        if (username) {
            req.username = username;
            next()
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch {
        res.json({
            msg: "Incorrect inputs"
        })
    }
}

module.exports = userMiddleware;