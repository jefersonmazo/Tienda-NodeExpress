const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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
// Peticion get es para obtener los resultados requeridos
router.get('/filter', (req, res) => {
  res.send('Yo soy un filtro');
});

//Peticion a la api, devuelve el ID de producto con el parametro ingresado
router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'not found'
    });
  } else {
    res.status(200).json({
      id,
      name: 'Products 2',
      price: 2000
    });
  }
});
// El metodo post se usa para crear registros
router.post('/', (req,res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});
// Tipo de Update de forma parcial mediante el metodo patch
router.patch('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Update partial',
    data: body,
    id
  });
});
// Tipo de Update de forma completa mediante el metodo put
router.put('/:id', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Update',
    data: body,
    id
  });
});

router.delete('/:id', (req,res) => {
  const { id } = req.params;
  res.json({
    message: 'Delete',
    id
  });
})

module.exports = router;
