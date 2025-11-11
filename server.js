const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('../frontend'));

const messagesPath = path.join(__dirname, 'messages.json');

// Get all messages
app.get('/messages', (req, res) => {
    const data = fs.readFileSync(messagesPath, 'utf8');
    res.json(JSON.parse(data));
});

// Add a new message
app.post('/messages', (req, res) => {
    const data = JSON.parse(fs.readFileSync(messagesPath, 'utf8'));
    data.push(req.body);
    fs.writeFileSync(messagesPath, JSON.stringify(data, null, 2));
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`🐹 Server running on http://localhost:${PORT}`);
});
