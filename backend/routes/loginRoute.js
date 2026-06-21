const { compare } = require('bcrypt')
const user = require('../model_and_sehema/user')
const userModel = require('../model_and_sehema/user')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const userValid = await userModel.findOne({ email })
        if (!userValid) {
            return res.status(401).json({ message: "User not found ❌" });
        }
        const validPassword = await bcrypt.compare(password, userValid.password)
        if (!validPassword) {
            return res.status(401).json({
                message: 'Invaild password'
            });

        }
        if (validPassword) {
            const token = JWT.sign({
                userId: userValid._id,
                username: userValid.name,
                role: userValid.role

            },
                'passcode',
                {
                    expiresIn: "24h"
                })
            return res.status(201).json({
                token: token,
                loginUser: userValid,
                message: `Hi user ${userValid.name}`
            });

        }

    } catch (error) {
        return res.status(401).json({
            message: error.message
        });

    }
})

module.exports = router;