const http = require('http')
const mongoose = require('mongoose')


require('dotenv').config();

const app = require('./app.js')

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

const server = http.createServer(app);

mongoose.connection.once('open', () =>{
    console.log('MongoDB connection ready')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

async function startServer(){
    await mongoose.connect(MONGO_URL, {
    })

    server.listen(PORT, 
        () => {
            console.log(`Server running on port ${PORT}`)
        })
}

startServer();