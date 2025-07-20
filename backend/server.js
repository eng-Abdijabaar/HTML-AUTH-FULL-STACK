const express = require('express')
const cors = require('cors')
const db = require('./config/dbConection')
require('dotenv').config()
const authRoutes = require('./routers/authRoutes')
const profileRoutes = require('./routers/profile')

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT

db()

app.get('/', (req,res) => {
    res.send('server is runing.....')
})

// AUTH ROUTES
app.use('/api/auth', authRoutes)

// PROFILE ROUTES
app.use('/api', profileRoutes)

app.listen(PORT, () => {
    console.log(`server is on port: ${PORT}`);
    
})