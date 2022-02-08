const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Customers',
        name: 'All Customers Page'
    })
})

router.get('/customer', (req, res) => {
    res.render('index', {
        title: 'Customer',
        name: 'Customer Page'
    })
})

router.get('/customer/transfer', (req, res) => {
    res.render('index', {
        title: 'Transfer',
        name: 'Money Transfer Page'
    })
})

module.exports = router