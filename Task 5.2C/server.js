
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const projectRoutes = require('./routes/projectRoutes');  // Import Routes

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(projectRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
});

mongoose.connect('mongodb://localhost:27017/sit725', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});
