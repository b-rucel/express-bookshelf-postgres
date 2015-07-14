var Bookshelf = require('../bookshelf'),
    Promise = require('bluebird');


var User = Bookshelf.Model.extend({
    "tableName": "users",
    "hasTimestamps": ["created", "updated"]
},
{
    create: function (data) {
        return this.forge(data)
            .save();
    },

    delete: function (id) {
        return this.forge({"id": id})
            .destroy();
    },

    getAll: function () {
        return this.fetchAll({"columns": this.getFields()});
    },

    getById: function (id) {
        return this.forge({"id": id})
            .fetch({"columns": this.getFields()});
    },

    getFields: function () {
        return [
            'id',
            'first_name',
            'last_name',
            'email'
        ];
    },

    update: function (id, data) {
        return this.forge({"id": id})
            .save(data);
    }
});

module.exports = User;