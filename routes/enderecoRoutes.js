var express = require('express');
var App = express.Router();
var EnderecoDao = getmodule('dao/enderecoDao');

/* GET home page. */
App.route('/endereco')
    .get(EnderecoDao.read)
    .post(EnderecoDao.create);


App.route('/endereco/:id')
    .get(EnderecoDao.profile)
    .put(EnderecoDao.update)
    .delete(EnderecoDao.delete);

App.route('/endereco/pessoa/:pessoaid')
    .get(EnderecoDao.getEnderecoPessoa);

module.exports = App;