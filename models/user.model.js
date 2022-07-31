const db = require('./index')
// const Tutorial = db.tutorials
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
      
      
    });
    User.hasOne(Tutorial, {
        foreignKey: 'user_id'
      });
    return User;
};

