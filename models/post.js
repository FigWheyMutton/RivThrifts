const { data } = require('infinite-scroll');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{}
  //based on the post model and not an instance method   
Post.init(
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          post_text: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
          },
          price: {
            type: DataTypes.NUMBER,
            allowNull: false,
          }
        },
        {
          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: 'post'
        }
      );
    
      module.exports = Post;