const setting = require('./settings/envSettings');
const userRouter = require('./routes/userRoutes');
const connectToMongoDB = require('./settings/dbSettings');

const express = require('express');
const app = express()

// Middlewares
app.use(express.json());

// Routes
app.use('/user', userRouter)

app.listen(setting.port, (err) => {
   if (err) throw err;
   console.log(`Express server listening on port http://localhost:${setting.port}`)
   connectToMongoDB()
});