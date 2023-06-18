const express = require('express');
const app = express();

console.log('Hello, World!');

// Handle favicon.ico request
app.get('/favicon.ico', (req, res) => {
    res.sendStatus(404);
});

// ... Rest of your server configuration and routes ...

// Start the server
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});


