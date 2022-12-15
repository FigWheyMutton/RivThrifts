const { User } = require('../models');
const helpers = require('../utils/helpers');

const userData = [
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;