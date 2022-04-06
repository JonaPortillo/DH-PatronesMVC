const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require('./routes/main')

app.use(express.static(path.join(__dirname, '../public')));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', mainRouter)
app.get('/about', mainRouter)

app.listen(3001, () => console.log("Servidor corriendo, http://localhost:3001"))