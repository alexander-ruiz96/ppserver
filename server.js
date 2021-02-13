const express = require("express");
const app = express();
const url =require('url');
const port = 3000;
   
  app.get('/calculadora', (req, res)=>{
    let numero = parseFloat( req.query.numero);
    let numero2 = parseFloat( req.query.numero2); 
    let operacion = req.query.operacion
    const calculadora = {
      get operacion(){
        
        switch (operacion) {
          case "sumar":
            var resultado= numero + numero2;
            return resultado
            break;
            case "restar":
              var resultado= numero - numero2;
              return resultado
            break;
            case "multiplicar":
              var resultado= numero * numero2;
              return resultado
            break;
            case "dividir":
              var resultado= numero / numero2;
              return resultado
            break;
        
          default:
            break;
        }
      }
    }
    res.json(calculadora);
  })
 
  app.listen(port, () => console.log(`App de ejemplo se escucha en el puerto ${port}!`));