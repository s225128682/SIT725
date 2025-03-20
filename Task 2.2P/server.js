var express = require("express")
const path = require('path');
var app = express()
var port = process.env.port || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/sum', (req, res)=>{
    const {num1, num2} = req.body;

    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return res.status(400).json({ error:'Numbers are not valid'});
    }

    const addition = num1 + num2;
    res.json({addition});
});

// Additional example endpoint to check server health
app.get('/health', (req, res) => {
  res.send('Server is healthy!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

