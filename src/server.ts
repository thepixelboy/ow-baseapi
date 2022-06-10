import app from './app';

const PORT = process.env.API_PORT || 3000;
console.log(`API listening on port: ${PORT}`);
app.listen(PORT);
