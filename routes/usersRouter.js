const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
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
// como se debe consumir en el buscador http://172.26.40.31:3000/api/users?limit=10&offset=200
module.exports = router;
