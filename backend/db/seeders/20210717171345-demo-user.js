'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-extremist',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'ex-streamer',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'extremely-cool-dude',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'mac@paddys.pub',
        username: 'SherrifMac',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'dennis@paddys.pub',
        username: '5StarMan',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'dee@paddys.pub',
        username: 'sweetDee',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'charley@paddys.pub',
        username: 'RatSlayer',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'waitress@coffeeshop.com',
        username: 'theWaitress',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'frank@paddys.pub',
        username: 'frankReynolds',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'mantis@toboggan.com',
        username: 'DrMantisToboggan',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'maureenP@lady.cat',
        username: 'catLady',
        hashedPassword: bcrypt.hashSync('password'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-extremist', 'ex-streamer', 'extremely-cool-dude', 'SherrifMac', '5StarMan', 'sweetDee', 'RatSlayer', 'theWaitress', 'frankReynolds', 'DrMantisToboggan', 'catLady'] }
    }, {});
  }
};
