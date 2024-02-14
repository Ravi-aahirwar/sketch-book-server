const express = require('express')

const { createServer } = require('http')
const { Server } = require("socket.io")
const cors = require('cors');
const { Socket } = require('dgram');

const app = express();
app.use(cors({ origin: "http://localhost:3000" }))
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: "http://localhost:3000" });
io.on("connected", (Socket) => {
    console.log("Server Connected")
});
httpServer.listen(5000);

