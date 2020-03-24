const dotenv = require("dotenv").config()
const express = require("express")

//Create a server instance
const server = express()

//Routers
// const EventsRouter = require("./events/events-router")

//Middleware
server.use(express.json())
// server.use("/api/events", EventsRouter)

const PORT = process.env.PORT || 3333
const HOST = process.env.HOST

server.get("/", (req, res) => {
    res.send("DJ Streams coming to you from the 1s & 2s")
})

server.listen(PORT, () => {
    console.log(`Listening on port${PORT}`)
})
