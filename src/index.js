const setting = require('./settings/envSettings');
const userRouter = require('./routes/userRoutes');
const path = require('path');
const connectToMongoDB = require('./settings/dbSettings');

const express = require('express');
const app = express()

// Middlewares
app.use(express.json());

// Routes
app.use('/user', userRouter)

app.listen(3000, () => {
   console.log(`Express server listening on port http://localhost:${setting.port}`)
   connectToMongoDB()
});