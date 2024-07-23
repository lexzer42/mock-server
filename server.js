const express = require('express');
const app = express();
const port = 3000;

let receivedData = [];  // Almacenar los datos recibidos

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const email = req.body.a;
    const password = req.body.az;
    console.log(`Received email: ${email}, password: ${password}`);
    receivedData.push({ email, password });  // Guardar los datos recibidos
    res.status(200).send('OK');
});

// Ruta para ver los datos recibidos
app.get('/data', (req, res) => {
    res.json(receivedData);
});

app.listen(port, () => {
    console.log(`Mock server listening at http://localhost:${port}`);
});
