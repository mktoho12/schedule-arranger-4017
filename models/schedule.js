'use strict'
const loader = require('../sequelize-loader')
const Sequelize = loader.Sequelize

const Schedule = loader.database.define('shcedules', {
  shceduleId: { 
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false
  },
  scheduleName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  memo: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  createdBy: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  updatedBy: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false,
  indexes: [
    {
      fields: ['createdBy']
    }
  ]
})

module.exports = Schedule

