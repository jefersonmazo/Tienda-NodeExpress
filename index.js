const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;
const IP = '172.26.40.31';

app.use(express.json()); //Este comando nos permite recibir informacion de tipo json mediante el metodo POST

routerApi(app);

app.get('/', (req, res) => {
  res.send('Api-inicial :)');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Ruta Nueva :)');
});


app.listen(port, () => {
  console.log("http://"+ IP +":" + port + "/");
 // console.log('Mi puerto: ' + port );

});


