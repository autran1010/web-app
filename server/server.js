const express = require('express')
const app = express()
const port = 5000;

app.use(cors()); // Allow frontend to call backend
app.use(express.json()); // Parse JSON requests

// Simple API route
app.get("/hello", (req, res) => {
    res.send("Hello from Express!");
});
app.post('/capitalize', (req, res) => {
    const inputString = req.body.string;
    if (typeof inputString === 'string') {
        const capitalizedString = inputString.toUpperCase();
        res.json({ capitalized: capitalizedString });
    } else {
        res.status(400).json({ error: 'Invalid input. Expected a string.' });
    }
});

app.listen(5000, () => {console.log("server started on port 5000")})