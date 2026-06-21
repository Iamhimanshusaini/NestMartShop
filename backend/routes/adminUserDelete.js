const express = require('express')
const router = express.Router();
const userModel = require('../model_and_sehema/user')

router.delete('/delete-user/:userID', async (req, res) => {
    try {
        const { userID } = req.params
        console.log(userID)
        const deleteUser = await userModel.findByIdAndDelete({ _id: userID })
        res.json({
            message: 'delete succesfuly',
            deleteUser
        })
    } catch (error) {
        res.json({
            message: 'user not found'
        })
    }

})
module.exports = router;