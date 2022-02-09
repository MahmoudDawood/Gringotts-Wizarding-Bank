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
    res.render('about', {
        title: 'About',
        name: 'About Page'
    })
})

const customers = [
    {
        name: 'James',
        balance: 5000
    },
    {
        name: 'Lilly',
        balance: 2000
    },
    {
        name: 'Harry',
        balance: 10000
    }
]

app.get('/customers', (req, res) => {
    res.render('customers', {
        title: 'Customers',
        name: 'Customers Page',
        customers
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
    res.status(404).render('404', {
        title: 'Not Found',
        name: '404'
    })
})

module.exports = app