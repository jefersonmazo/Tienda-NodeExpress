const express = require('express');
const router = express.Router();

//Peticion a la api, devuelve el ID de producto y categoria que ingresemos
router.get('/categories/:categoryId/products/:productsId',(req, res) =>{
  const { categoryId, productsId } = req.params;
  res.json({
    categoryId,
    productsId,
    price: 2000
  });

});
//como se debe consumir en el buscador http://172.26.40.31:3000/api/categories/221/products/1112
module.exports = router;
