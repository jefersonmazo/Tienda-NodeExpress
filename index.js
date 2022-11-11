const express = require('express');

const app = express();
const port = 3000;
const IP = '172.26.40.31';

app.get('/', (req, res) => {
  res.send('Hola Jharol :)');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Ruta Nueva :)');
});

app.get('/products', (req, res) => {
  res.json([{
    name: 'Producto 1',
    price: '1000 dolares'
  },{
    name: 'Producto 2',
    price: '2000 dolares'
  },{
    name: 'Producto 3',
    price: '3000 dolares'
  },{
    name: 'Producto 4',
    price: '4000 dolares'
  },{
    name: 'Producto 5',
    price: '4000 dolares'
  }]);
});

app.get('/products/:id', (req, res) => {
  res.json({
    name: 'Products 2',
    price: 2000
  })
})

app.listen(port, () => {
  console.log("http://"+ IP +":" + port + "/");
 // console.log('Mi puerto: ' + port );

});


