var Item = require('./pelicula');

module.exports.Guardar = function(req,res) {
  console.log(req.body);
      Item.create (
            {
              NOMBRE: req.body.NOMBRE,
              DURACIONMINUTOS: req.body.DURACIONMINUTOS,
              GENERO: req.body.GENERO,
              IDIOMAAUDIO: req.body.IDIOMAAUDIO,
              IDIOMASUB: req.body.IDIOMASUB,
              SINOPSIS: req.body.SINOPSIS,
              CLASIFICACION: req.body.CLASIFICACION,
              PRECIO: req.body.PRECIO,
              HORAINICIO: req.body.HORAINICIO,
              FECHA: req.body.FECHA,
              MINUTOINICIO: req.body.MINUTOINICIO,
              ASIENTOS: req.body.ASIENTOS,
              IMAGEN: req.body.IMAGEN,
              ESTADO: req.body.ESTADO
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

    module.exports.Modificar = function(req,res){
      console.log(req.body)
      Item.update( {_id : req.body._id},
                  {$set:
          {
            NOMBRE: req.body.NOMBRE,
            DURACIONMINUTOS: req.body.DURACIONMINUTOS,
            GENERO: req.body.GENERO,
            IDIOMAAUDIO: req.body.IDIOMAAUDIO,
            IDIOMASUB: req.body.IDIOMASUB,
            SINOPSIS: req.body.SINOPSIS,
            CLASIFICACION: req.body.CLASIFICACION,
            PRECIO: req.body.PRECIO,
            HORAINICIO: req.body.HORAINICIO,
            FECHA: req.body.FECHA,
            MINUTOINICIO: req.body.MINUTOINICIO,
            ASIENTOS: req.body.ASIENTOS,
            IMAGEN: req.body.IMAGEN,
            ESTADO: req.body.ESTADO
          }},
          function(err, item) {
            if(err){
              res.send(err);
              //Obtiene y devuelve todas las personas tras crear cada una de ellas
            }
            else{
              Item.find(function(err, item){
                if(err)
                  res.send(err)
                res.json(item);
              });
            }
          });
    }
    //Modifica el objeto específico.

    module.exports.Eliminar = function(req,res) {
      Item.remove({_id : req.body.id},
        function(err, item) {
          if (err){
            res.send(err);
          }
          //Obtiene y devuelve todas las personas tras crear cada una de ellas.
          else{
            Item.find(function(err, item){
              if(err)
                res.send(err)
              res.json(item);
            });
          }
        });
    }
    //Elimina un objeto específico.

    module.exports.Seleccionartodos = function(req, res){
      Item.find(
        function(err, item){
          if (err){
            res.send(err)
          }
          else{
            res.json(item);
          }
          //Devuelve todas las personas en JSON.
        }
      );
    }

    module.exports.Seleccionarporid = function(req,res) {
      Item.find({_id:req.body._id}, function(err, item){
        if(err){
          res.send(err)
        }
        else{
          res.json(item);
        }
        //Devuelve a todas las personas en JSON con el id.
      });
    }
