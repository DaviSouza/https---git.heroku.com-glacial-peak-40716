
exports.read = function (req, res) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM usuario', [], function (err, result) {
            if (err) return res.status(400).json();

            return res.status(200).json(result);
        });
    });
}

exports.create = function (req, res) {
    var data = req.body;

    req.getConnection(function (err, connection) {
        connection.query('INSERT INTO usuario SET ?', [data], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}

exports.getUsuario = function getUsuario(req, res) {

    var login = req.params.login;

    req.getConnection(function (err, connection) {
        connection.query('select u.*, p.nome as nome from usuario u inner join pessoa p on u.pessoaId = p.id and u.login = ?', [login], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result[0]);
        });
    });
}

exports.profile = function (req, res) {
    var id = req.params.id;

    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM usuario WHERE id = ?', [id], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result[0]);
        });
    });
}


exports.update = function (req, res) {
    var data = req.body,
        id = req.params.id;

    req.getConnection(function (err, connection) {
        connection.query('UPDATE usuario SET ? WHERE id = ? ', [data, id], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}

exports.delete = function (req, res) {
    var id = req.params.id;

    req.getConnection(function (err, connection) {
        connection.query('DELETE FROM usuario WHERE id = ? ', [id], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}