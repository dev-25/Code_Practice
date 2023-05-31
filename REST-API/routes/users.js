
const express = require('express');
const router = express.Router()

const users = [
    {
        "firstName": "Devesh",
        "lastName": "Sharma",
        "age": 23
    },
    {
        "firstName": "Dev",
        "lastName": "Sharma",
        "age": 23
    }
    
]

router.get('/', (req,res) => {
    console.log(users)
    res.send(users)
});

module.exports = router;