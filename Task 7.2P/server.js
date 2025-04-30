
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const projectRoutes = require('./routes/projectRoutes');  // Import Routes

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(projectRoutes);

var port = process.env.port || 3000;
let server = app.listen(port, () => {
  console.log("App listening to: " + port);
});

const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

mongoose.connect('mongodb://localhost:27017/sit725', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});
