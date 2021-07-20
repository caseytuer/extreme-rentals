'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', 
      [
        {
        rentalId: 2,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/1-atv-1.jpeg',
        },
        {
          rentalId: 2,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/1-atv-2.jpeg',
        },
        {
          rentalId: 2,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/1-atv-3.jpeg',
        },
        {
          rentalId: 2,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/1-atv-4.jpeg',
        },
        {
          rentalId: 2,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/1-atv-5.jpeg',
        },
        {
          rentalId: 3,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/2-dirtbike-1.jpeg',
        },
        {
          rentalId: 3,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/2-dirtbike-2.jpeg',
        },
        {
          rentalId: 3,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/2-dirtbike-3.jpeg',
        },
        {
          rentalId: 3,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/2-dirtbike-4.jpeg',
        },
        {
          rentalId: 3,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/2-dirtbike-5.jpeg',
        },
        {
          rentalId: 4,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/3-drone-1.jpeg',
        },
        {
          rentalId: 4,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/3-drone-2.jpeg',
        },
        {
          rentalId: 4,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/3-drone-3.jpeg',
        },
        {
          rentalId: 4,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/3-drone-4.jpeg',
        },
        {
          rentalId: 4,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/3-drone-5.jpeg',
        },
        {
          rentalId: 5,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/4-kayak-1.jpeg',
        },
        {
          rentalId: 5,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/4-kayak-2.jpeg',
        },
        {
          rentalId: 5,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/4-kayak-3.jpeg',
        },
        {
          rentalId: 5,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/4-kayak-4.jpeg',
        },
        {
          rentalId: 5,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/4-kayak-5.jpeg',
        },
        {
          rentalId: 6,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/5-jetski-1.jpeg',
        },
        {
          rentalId: 6,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/5-jetski-2.jpeg',
        },
        {
          rentalId: 6,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/5-jetski-3.jpeg',
        },
        {
          rentalId: 6,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/5-jetski-4.jpeg',
        },
        {
          rentalId: 6,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/5-jetski-5.jpeg',
        },
        {
          rentalId: 7,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/6-paintballgun-1.jpeg',
        },
        {
          rentalId: 7,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/6-paintballgun-2.jpeg',
        },
        {
          rentalId: 7,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/6-paintballgun-3.jpeg',
        },
        {
          rentalId: 7,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/6-paintballgun-4.jpeg',
        },
        {
          rentalId: 7,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/6-paintballgun-5.jpeg',
        },
        {
          rentalId: 8,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/7-boat-1.jpeg',
        },
        {
          rentalId: 8,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/7-boat-2.jpeg',
        },
        {
          rentalId: 8,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/7-boat-3.jpeg',
        },
        {
          rentalId: 8,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/7-boat-4.jpeg',
        },
        {
          rentalId: 8,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/7-boat-5.jpeg',
        },
        {
          rentalId: 9,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/8-windsurf-1.jpeg',
        },
        {
          rentalId: 9,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/8-windsurf-2.jpeg',
        },
        {
          rentalId: 9,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/8-windsurf-3.jpeg',
        },
        {
          rentalId: 9,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/8-windsurf-4.jpeg',
        },
        {
          rentalId: 9,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/8-windsurf-5.jpeg',
        },
        {
          rentalId: 10,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/9-golfcart-1.jpeg',
        },
        {
          rentalId: 10,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/9-golfcart-2.jpeg',
        },
        {
          rentalId: 10,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/9-golfcart-3.jpeg',
        },
        {
          rentalId: 10,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/9-golfcart-4.jpeg',
        },
        {
          rentalId: 10,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/9-golfcart-5.jpeg',
        },
        {
          rentalId: 11,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/10-surf-1.jpeg',
        },
        {
          rentalId: 11,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/10-surf-2.jpeg',
        },
        {
          rentalId: 11,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/10-surf-3.jpeg',
        },
        {
          rentalId: 11,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/10-surf-4.jpeg',
        },
        {
          rentalId: 11,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/10-surf-5.jpeg',
        },
        {
          rentalId: 12,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/11-snowmobile-1.jpeg',
        },
        {
          rentalId: 12,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/11-snowmobile-2.jpeg',
        },
        {
          rentalId: 12,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/11-snowmobile-3.jpeg',
        },
        {
          rentalId: 12,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/11-snowmobile-4.jpeg',
        },
        {
          rentalId: 12,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/11-snowmobile-5.jpeg',
        },
        {
          rentalId: 13,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/12-snowboard-1.jpeg',
        },
        {
          rentalId: 13,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/12-snowboard-2.jpeg',
        },
        {
          rentalId: 13,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/12-snowboard-3.jpeg',
        },
        {
          rentalId: 13,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/12-snowboard-4.jpeg',
        },
        {
          rentalId: 13,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/12-snowboard-5.jpeg',
        },
        {
          rentalId: 14,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/13-onewheel-1.jpeg',
        },
        {
          rentalId: 14,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/13-onewheel-2.jpeg',
        },
        {
          rentalId: 14,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/13-onewheel-3.jpeg',
        },
        {
          rentalId: 14,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/13-onewheel-4.jpeg',
        },
        {
          rentalId: 14,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/13-onewheel-5.jpeg',
        },
        {
          rentalId: 15,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/14-segwey-1.jpeg',
        },
        {
          rentalId: 15,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/14-segwey-2.jpeg',
        },
        {
          rentalId: 15,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/14-segwey-3.jpeg',
        },
        {
          rentalId: 15,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/14-segwey-4.jpeg',
        },
        {
          rentalId: 15,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/14-segwey-5.jpeg',
        },
        {
          rentalId: 16,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/15-skateboard-1.jpeg',
        },
        {
          rentalId: 16,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/15-skateboard-2.jpeg',
        },
        {
          rentalId: 16,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/15-skateboard-3.jpeg',
        },
        {
          rentalId: 16,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/15-skateboard-4.jpeg',
        },
        {
          rentalId: 16,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/15-skateboard-5.jpeg',
        },
        {
          rentalId: 17,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/16-gokart-1.jpeg',
        },
        {
          rentalId: 17,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/16-gokart-2.jpeg',
        },
        {
          rentalId: 17,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/16-gokart-3.jpeg',
        },
        {
          rentalId: 17,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/16-gokart-4.jpeg',
        },
        {
          rentalId: 17,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/16-gokart-5.jpeg',
        },
        {
          rentalId: 18,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/17-boat-1.jpeg',
        },
        {
          rentalId: 18,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/17-boat-2.jpeg',
        },
        {
          rentalId: 18,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/17-boat-3.jpeg',
        },
        {
          rentalId: 18,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/17-boat-4.jpeg',
        },
        {
          rentalId: 18,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/17-boat-5.jpeg',
        },
        {
          rentalId: 19,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/18-bike-1.jpeg',
        },
        {
          rentalId: 19,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/18-bike-2.jpeg',
        },
        {
          rentalId: 19,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/18-bike-3.jpeg',
        },
        {
          rentalId: 19,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/18-bike-4.jpeg',
        },
        {
          rentalId: 19,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/18-bike-5.jpeg',
        },
        {
          rentalId: 20,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/19-paddle-1.jpeg',
        },
        {
          rentalId: 20,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/19-paddle-2.jpeg',
        },
        {
          rentalId: 20,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/19-paddle-3.jpeg',
        },
        {
          rentalId: 20,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/19-paddle-4.jpeg',
        },
        {
          rentalId: 20,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/19-paddle-5.jpeg',
        },
        {
          rentalId: 21,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/20-longsurf-1.jpeg',
        },
        {
          rentalId: 21,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/20-longsurf-2.jpeg',
        },
        {
          rentalId: 21,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/20-longsurf-3.jpeg',
        },
        {
          rentalId: 21,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/20-longsurf-4.jpeg',
        },
        {
          rentalId: 21,
          url: 'https://extreme-rentals.s3.us-west-1.amazonaws.com/20-longsurf-5.jpeg',
        },
        
      ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
