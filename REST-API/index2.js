
const express = require('express')

// ROUTER
const router = express.Router()

router.get('/',(req,res) =>{
    res.send('This is data')
})

module.exports = router;