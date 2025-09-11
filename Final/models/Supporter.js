const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Supporter extends Model {

    static async findUser(first_n, last_n){
        try{
            const supporter = await Supporter.findByPk(first_n)
            if (supporter && supporter.last_n === last_n){
              return user
            }
              else{
                return null
            }
        }catch (error) {
          console.log(error)
          return null
        }
    }

}

Supporter.init({
  first_n: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  last_n: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fpl: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'Supporter'
});

module.exports = Supporter