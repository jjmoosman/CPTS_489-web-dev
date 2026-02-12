const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Supporter extends Model {

    static async findUser(email){
        try{
            const supporter = await Supporter.findByPk(email)
            return supporter ? supporter : null
        } catch(error){
            console.log(error)
            return null
        }
    }

}

Supporter.init({
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'Supporter'
});

module.exports = Supporter