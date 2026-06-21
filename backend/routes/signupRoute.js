const userModel = require('../model_and_sehema/user')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, cpassword } = req.body

        // check empty fields

        if (!name || !email || !password || !cpassword) {
            return res.status(400).json({
                message: 'All fields are required'
            });

        }
        if (password !== cpassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match'
            });
        }
        const existUser = await userModel.findOne({ email })
        if (existUser) {
            res.status(400).json({
                message: 'you are all ready user please login',
                error: error.message
            })
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashPassword,
            role: 'user'
        })
        const saveUser = await newUser.save()
        res.status(201).json({
            message: 'Account Create succesfully',
            userData: saveUser
        })

    } catch (error) {
        res.status(400).json({
            message: error.message

        })
    }
})

module.exports = router;