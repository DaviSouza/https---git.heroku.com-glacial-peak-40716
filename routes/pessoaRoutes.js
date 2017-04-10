var express = require('express');
var App = express.Router();
var PessoaDao = getmodule('dao/pessoaDao');

/* GET home page. */
App.route('/pessoa')
    .get(PessoaDao.read)
    .post(PessoaDao.create);


App.route('/pessoa/:id')
    .get(PessoaDao.profile)
    .put(PessoaDao.update)
    .delete(PessoaDao.delete);


module.exports = App;