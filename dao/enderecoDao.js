
exports.read = function (req, res) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM endereco', [], function (err, result) {
            if (err) return res.status(400).json();

            return res.status(200).json(result);
        });
    });
}

exports.create = function (req, res) {
    var data = req.body;

    req.getConnection(function (err, connection) {
        connection.query('INSERT INTO endereco SET ?', [data], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}

exports.getEnderecoPessoa = function getEnderecoPessoa(req, res) {

    var pessoaid = req.params.pessoaid;

    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM endereco WHERE pessoaId = ?', [pessoaid], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });

}

exports.profile = function (req, res) {
    var id = req.params.id;

    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM endereco WHERE id = ?', [id], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result[0]);
        });
    });
}

exports.update = function (req, res) {
    var data = req.body,
        id = req.params.id;

    req.getConnection(function (err, connection) {
        connection.query('UPDATE endereco SET ? WHERE id = ? ', [data, id], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}

exports.delete = function (req, res) {
    var id = req.params.id;

    req.getConnection(function (err, connection) {
        connection.query('DELETE FROM endereco WHERE id = ? ', [id], function (err, result) {
            if (err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
}