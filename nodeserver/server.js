const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Habilitar CORS para todas las solicitudes (puedes personalizarlo más)
// Habilitar CORS con configuración para exponer el header "x-process-time"
app.use(cors({
    exposedHeaders: ['x-process-time']  // Exponer el header personalizado
}));

// Endpoint 1: Responde con un header personalizado "x-process-time"
app.get('/with-header', (req, res) => {
    const startTime = Date.now();
    
    // Simular un retraso para que el header tenga un valor distinto
    setTimeout(() => {
        const processTime = Date.now() - startTime;
        res.set('x-process-time', processTime + 'ms');  // Agregar el header
        res.send('Este endpoint tiene el header x-process-time');
    }, 500);  // Retraso simulado de 500ms
});

// Endpoint 2: No responde con el header "x-process-time"
app.get('/without-header', (req, res) => {
    res.send('Este endpoint no tiene el header x-process-time');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
