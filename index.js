const express = require('express')
const config = require('config')
const fileupload = require("express-fileupload");

const app = express()
const PORT = process.env.PORT || config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')
const authRouter = require('./routes/auth.routes')

app.use(fileupload());
app.use(corsMiddleware)
app.use("/api", authRouter)


const start = async () => {
    try{
        app.listen(PORT, () =>{
            console.log('server started2')
        })
    }catch (e) {

    }
}

start()