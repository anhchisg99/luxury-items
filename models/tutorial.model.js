const db = require('./index')
const User = db.users
module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING,
            unique:true
        },
        description: {
            type: Sequelize.STRING,
            get() {
                const rawValue = this.getDataValue('description');
                return rawValue ? rawValue.toUpperCase() : null;
              },
              set(value) {
                // Storing passwords in plaintext in the database is terrible.
                // Hashing the value with an appropriate cryptographic hash function is better.
                this.setDataValue('description', value.toUpperCase());
              }

        },
        fullName: {
            type: Sequelize.VIRTUAL,
            get() {
              return `${this.title} ${this.description}`;
            },
            set(value) {
              throw new Error('Do not try to set the `fullName` value!');
            }
          },
        published: {
            type: Sequelize.BOOLEAN
        },
        user_id:{
            type: Sequelize.INTEGER,
            allowNull:true
        }
    });
    Tutorial.belongsTo(User);
   
    return Tutorial;
};