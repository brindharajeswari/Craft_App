require('dotenv').config()

const express = require('express')

const cors = require('cors')

const connectDB = require('./config/db')

const app = express()

const PORT = 8080

connectDB();

const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const craftRoutes = require('./routes/craftRoutes')

const { authorize } = require('./middleware/authMiddleware')




app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)
app.use('/users', authorize, userRoutes)
app.use('/craft', authorize, craftRoutes)



app.listen(PORT, () => {
    console.log(`lisenting on port: ${PORT}`);
})