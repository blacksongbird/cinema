var controllerPelicula = require('./controllerpelicula.js');
var controllerAdministrador = require('./controlleradministrador.js');
module.exports = function(app) {
  app.post('/api/nuevapelicula', controllerPelicula.Guardar);
  app.post('/api/modificapelicula', controllerPelicula.Modificar);
  app.post('/api/eliminapelicula', controllerPelicula.Eliminar);
  app.post('/api/todaslaspeliculas', controllerPelicula.Seleccionartodos);
  app.post('/api/peliculasporid', controllerPelicula.Seleccionarporid);

  app.post('./api/nuevoadm', controllerAdministrador.Guardar);
  app.post('./api/loginadm', controllerAdministrador.Login);

  app.get('*', function(req,res){
    res.sendfile('./login.html');
  });
};
