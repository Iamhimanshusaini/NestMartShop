const express = require('express')
const router = express.Router()
const userModel = require('../model_and_sehema/user')
const mongoose = require('mongoose')
const { Query } = require('mongoose')
const { findByIdAndUpdate } = require('../model_and_sehema/product')

module.exports = router.patch('/user/profile/:userId', async (req, res) => {
    try {
        const { userId } = req.params
        const { name, email } = req.body
        const updateUser = await userModel.findByIdAndUpdate({ _id: userId }, { name: name, email: email })
        if (!updateUser) {
            return res.json({
                message: 'user Not found'
            })
        }
        res.json({
            message: 'profile Updated succesfuly',
            updatedUser: updateUser
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})
