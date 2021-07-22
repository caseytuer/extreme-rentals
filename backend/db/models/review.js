'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    rentalId: DataTypes.INTEGER,
    reviewBody: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};