const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Home Page'
    })
})

app.get('/about', (req, res) => {
    res.render('index', {
        title: 'About',
        name: 'About Page'
    })
})

app.get('/customers', (req, res) => {
    res.render('index', {
        title: 'Customers',
        name: 'All Customers Page'
    })
})

app.get('/customers/customer', (req, res) => {
    res.render('index', {
        title: 'Customer',
        name: 'Customer Page'
    })
})

app.get('/customers/customer/transfer', (req, res) => {
    res.render('index', {
        title: 'Transfer',
        name: 'Money Transfer Page'
    })
})

app.get('*', (req, res) => {
    res.render('index', {
        title: 'Not found!',
        name: '404'
    }).status(404)
})

module.exports = app