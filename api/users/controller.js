var User = require('./model'),
    queryString = require('querystring');

// console.log(User);

module.exports = {
    /**
     * @todo [scrub input] 
     *
     *
     */
    create: function (req, res) {
        User.create(req.body)
            .then(function (result) {
                result = result.length == 1 ? result[0] : result;

                delete(result.attributes.created_at);
                delete(result.attributes.updated_at);

                res.json({"result":result});
            })
            .catch(function (err) {
                res.status(500).json({
                    "error": true,
                    "data": {
                        "message": err.message
                    }
                });
            });
    },


    /**
     * @todo [what should be the output of delete]
     * {success:true ? false} ???
     * 
     */
    delete: function (req, res) {
        User.delete(req.params.id)
            .then(function (result) {
                result = result.length == 1 ? result[0] : result;

                res.json({"result": result});
            });
    },


    getAll: function (req, res) {
        User.getAll()
            .then(function (result) {
                res.json({
                    "data": result
                })
            });
    },


    getOne: function (req, res) {
        User.getById(req.params.id)
            .then(function (result) {
                result = result.length == 1 ? result[0] : result;

                res.json({result:result});
            })
            .catch(function(err) {
                res.status(500).json({
                    "error": true, "data": {
                        "message": err.message
                    }
                });
            });
    },


    update: function (req, res) {
        User.update(req.params.id, req.body)
            .then(function (result) {
                result = result.length == 1 ? result[0] : result;

                res.json({result:result});
            })
            .catch(function(err) {
                res.status(500).json({
                    "error": true, "data": {
                        "message": err.message
                    }
                });
            });
    }
}