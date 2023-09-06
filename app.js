const express = require('express')
var hbs = require('hbs');
require('dotenv').config();


const app = express()
const port = process.env.PORT;


 
//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials' );

//servir contenido estatico
app.use( express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Brandon Larranaga',
    titulo: ' Curso Node '
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Brandon Larranaga',
    titulo: ' Curso Node '
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Brandon Larranaga',
    titulo: ' Curso Node '
  });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

//el puerto tiene que leerse de las variables de entorno porque
//donde lo desplieguemos me van a establecer el puerto de manera automatica
//y el ENV va a verificar si existe ese puerto
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})