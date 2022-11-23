const express = require('express');

const app = express();
const port = 3000;
const IP = '172.26.40.31';

app.get('/', (req, res) => {
  res.send('Api-inicial :)');
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
//Peticion a la api, devuelve el ID de producto con el parametro ingresado
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Products 2',
    price: 2000
  });
});
app.get('/users', (req,res) => {
  const { limit, offset } = req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});

//Peticion a la api, devuelve el ID de producto y categoria que ingresemos
app.get('/categories/:categoryId/products/:productsId',(req, res) =>{
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
    price: 2000
  });
});

app.listen(port, () => {
  console.log("http://"+ IP +":" + port + "/");
 // console.log('Mi puerto: ' + port );

});


