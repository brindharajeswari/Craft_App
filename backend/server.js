require('dotenv').config()

const express = require('express')

const cors = require('cors')

const connectDB = require('./config/db')

const app = express()

const PORT = 8080

connectDB();

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

const { authorize } = require('./middleware/authMiddleware')

// const { createEngine } = require('jsx-view-engine')
// const methodOverride = require('method-override')
// app.set('view engine', 'jsx')
// app.engine('jsx', createEngine())


app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)
app.use('/users', authorize, userRoutes)



app.listen(PORT, () => {
    console.log(`lisenting on port: ${PORT}`);
})