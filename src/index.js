const express = require ('express')
const morgan = require('morgan')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
require('dotenv').config()

const meRouter = require('./routes/me')

const app = express()

const PORT = process.env.PORT || 8000 

app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 60
});
app.use(limiter)

app.use('/me', meRouter)

app.get('/', (req, res) => res.json({status: 'ok'}));

app.listen(PORT, ()=>{
    console.log(`Server runnning on port ${PORT}`)
})