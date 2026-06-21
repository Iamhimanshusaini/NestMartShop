const jwt = require('jsonwebtoken')

const authCheck = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        if (!token) {
            res.status(400).json({
                message: "you are not acess this route"
            })
        }
        const verifedUser = jwt.verify(token, 'passcode')
        req.id = verifedUser.userId
        req.user = verifedUser
        if (!verifedUser) {
            res.status(401).json({
                message: "not verify token"
            })
        }
        next()
    } catch (error) {
        res.status(400).json({
            error: error.message,
            message: "somethik wentworng"
        })
    }
}

module.exports = authCheck;