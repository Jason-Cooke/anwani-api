// Access Layer for User Data. //


/**
 * Load Module Dependencies.
 */
var debug = require('debug')('api:dal-user');
var moment = require('moment');

var User = require('../models/user');

var population = [{
    path: 'profile',
    populate: {
        path: 'addresses'
        , model: 'Address'
        , populate: {
            path: 'owner'
            , model: 'Profile'
        }
    }
}, {
    path: 'shared_addresses', populate: {
        path: 'owner'
        , model: 'Profile'
    }
}];

var light_population = [{
    path: 'profile',
    model:'Profile'
}];


/**
 * create a new user.
 *
 * @desc  creates a new user and saves them
 *        in the database
 *
 * @param {Object}  userData  Data for the user to create
 * @param {Function} cb       Callback for once saving is complete
 */
exports.create = function create(userData, cb) {
    debug('creating a new user');

    // Create user
    var userModel = new User(userData);

    userModel.save(function saveUser(err, data) {
        if (err) {
            return cb(err);
        }


        exports.get({_id: data._id}, function (err, user) {
            if (err) {
                return cb(err);
            }

            cb(null, user);

        });

    });

};

/**
 * delete a user
 *
 * @desc  delete data of the user with the given
 *        id
 *
 * @param {Object}  query   Query Object
 * @param {Function} cb Callback for once delete is complete
 */
exports.delete = function deleteItem(query, cb) {
    debug('deleting user: ', query);

    User
        .findOne(query)
        .populate(population)
        .exec(function deleteUser(err, user) {
            if (err) {
                return cb(err);
            }

            if (!user) {
                return cb(null, {});
            }

            user.remove(function (err) {
                if (err) {
                    return cb(err);
                }

                cb(null, user);

            });

        });
};

/**
 * update a user
 *
 * @desc  update data of the user with the given
 *        id
 *
 * @param {Object} query Query object
 * @param {Object} updates  Update data
 * @param {Function} cb Callback for once update is complete
 */
exports.update = function update(query, updates, cb) {
    debug('updating user: ', query);

    var now = moment().toISOString();

    updates.last_modified = now;

    User
        .findOneAndUpdate(query, updates)
        .populate(population)
        .exec(function updateUser(err, user) {
            if (err) {
                return cb(err);
            }

            cb(null, user || {});
        });
};

/**
 * get a user.
 *
 * @desc get a user with the given id from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.get = function get(query, cb) {
    debug('getting user ', query);

    User
        .findOne(query)
        .populate(population)
        .exec(function (err, user) {
            if (err) {
                return cb(err);
            }

            cb(null, user || {});
        });
};

/**
 * get a collection of users
 *
 * @desc get a collection of users from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getCollection = function getCollection(query, cb) {
    debug('fetching a collection of users');

    User.find(query)
        .populate(population)
        .exec(function getUsersCollection(err, users) {
            if (err) {
                return cb(err);
            }

            return cb(null, users);
        });

};

/**
 * get a collection of users
 *
 * @desc get a collection of users from db
 *
 * @param {Object} query Query Object
 * @param {Function} cb Callback for once fetch is complete
 */
exports.getLightCollection = function getLightCollection(query, cb) {
    debug('fetching a collection of users');

    User.find(query)
        .populate(light_population)
        .limit(6)
        .exec(function getUsersCollection(err, users) {
            if (err) {
                return cb(err);
            }

            return cb(null, users);
        });

};