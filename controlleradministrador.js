var Item = require('./administrador');
let administradorinstanciado = new Item();
module.exports.Guardar = function(req,res) {
  console.log(req.body._CLAVE);
      Item.create (
            {
              NOMBRE: req.body._NOMBRE,
              CLAVE: claveysaltlocal[0],
              EMAIL: req.body._EMAIL,
              IMAGEN: req.body._IMAGEN,
              ESTADO: req.body._ESTADO,
              SALT: claveysaltlocal[1]
            },

            function(err, item) {
              if (err){
                res.send(err);
              }
              else {
                  Item.find(function(err, item){
                    if(err)
                      res.send(err)
                    res.json(item);
                  });
              }
            });
    }
    //Se realiza toda la solicitud para guardar una película

    module.exports.Login = function(req,res){
      console.log(req.body);
      Item.update( {EMAIL : req.body._EMAIL}, function(err,item){
          if (err) {
            res.send(err)
          }

          else{
            if(item.length==0){
              console.log('Email no existe.');
              res.status(400).send({
                message : 'Datos Incorrectos'
              });
            }
            else{
              console.log(item[0].CLAVE);
              if(administradorinstanciado.validPassword(req.body._CLAVE,item[0].CLAVE,item[0],SALT)){
                item[0].SALT="No F***ing Way!";
                res.json(item);
              }
              else{
                res.status(400).send({
                  message : 'Datos Incorrectos'
                });
              }
            }
          }
        });
      }



          module.exports.Seleccionartodos = function(err, item) {
            Item.find(function(err, item){
              if(err){
                res.send(err)
              }
              else{
                res.json(item);
              }
              });
            }
