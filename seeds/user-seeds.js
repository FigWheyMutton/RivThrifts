const { User } = require('../models');
const helpers = require('../utils/helpers');

const userData = [
    {
        seeds: 1,
        username: 'FigWheyMutton',
        email: 'alexhsieh12@gmail.com',
        password: 'password',
        bio:'I am helpers',
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;