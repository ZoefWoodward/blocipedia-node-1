'use strict';

const faker = require("faker");

 let users = [
   {
    username: "dangerzone",
    email: "dangerzone@test.com",
    password: "Test1234",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "standard"
   },
   {
    username: "masterchief",
    email: "masterchief@test.com",
    password: "Test4567",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "standard"
   },
   {
    username: "Marionotluigi",
    email: "notluigi@test.com",
    password: "Test78910",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "standard"
   }
 ];


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Users",null, {});
  }
};
