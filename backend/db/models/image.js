'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    rentalId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};