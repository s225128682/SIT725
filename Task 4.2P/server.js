var express = require("express");
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require('mongoose');

const cardList = [
    {
        title: "Lavender",
        image: "images/lav.jpg",
        link: "About Lavender",
        description: "This is the new information about flowers"
    },
    {
        title: "Lily",
        image: "images/lily.jpg",
        link: "About Lily",
        description: "This is the new information about flowers"
    },
    {
        title: "Rhododendron",
        image: "images/rodo.jpg",
        link: "About Rhododendron",
        description: "This is the new information about flowers"
    },
    {
        title: "Rose",
        image: "images/rose.jpg",
        link: "About Rose",
        description: "This is the new information about flowers"
    },
    {
        title: "Sunflower",
        image: "images/sunflower.jpeg",
        link: "About Sunflower",
        description: "This is the new information about flowers"
    }
];

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

const Project = mongoose.model("Project", ProjectSchema);


app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
});


var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("App listening on port: " + port);
});

mongoose.connect('mongodb://localhost:27017/sit725', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});
