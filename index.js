const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const ipAddress = req.socket.localAddress;
    const hostname = os.hostname();
    const version = process.env.VERSION || '1.0.0';

    res.send(`
        <h1>Informacje o serwerze</h1>
        <p>Adres IP serwera: ${ipAddress}</p>
        <p>Nazwa serwera (hostname): ${hostname}</p>
        <p>Wersja aplikacji: ${version}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
