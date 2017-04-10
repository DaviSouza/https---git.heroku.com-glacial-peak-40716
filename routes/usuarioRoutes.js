var express = require('express');
var App = express.Router();
var UsuarioDao = getmodule('dao/usuarioDao');

/* GET home page. */
App.route('/usuario')
    .get(UsuarioDao.read)
    .post(UsuarioDao.create);


App.route('/usuario/:id')
    .get(UsuarioDao.profile)
    .put(UsuarioDao.update)
    .delete(UsuarioDao.delete);

App.route('/usuario/login/:login')
    .get(UsuarioDao.getUsuario);

module.exports = App;