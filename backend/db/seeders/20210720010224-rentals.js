'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Rentals', [
        {
        userId: 4,
        address: '1385 Ranchview Dr',
        city: 'North Tustin',
        state: 'California',
        country: 'US',
        lat: 33.74820964043364, 
        lng: -117.79437578846085,
        name: 'ATV',
        description: 'Awesome ATV (all-terain-vehicle), includes enough gas to get you to the desert but not enough to make it back. This thing is fast as heck and I am not liable for any injury or destruction it might (and probably will) cause.',
        price: 100
      },
      {
        userId: 5,
        address: '1121 Walnut Hill Ln',
        city: 'DeSoto',
        state: 'Texas',
        country: 'US',
        lat: 32.60996185668045,
        lng: -96.82905187314314,
        name: 'Dirtbike',
        description: 'We simply want you to enjoy your time out in the dirt. With that in mind, our entire fleet of side-by-sides, ATVs and dirt bikes are meticuously maintained both mechanically and cosmetically. We guarentee your rental vehicle will perform well and look great while doing it. Top-of-the-line DOT approved Fly Racing helmets at no additional charge.',
        price: 150
      }, {
        userId: 6,
        address: '2776 Miller Avenue',
        city: 'Escondido',
        state: 'California',
        country: 'US',
        lat: 33.08158804613491,
        lng: -117.0827707884747,
        name: 'DJI Air 2S (Drone)',
        description: 'The compact and foldable design of the DJI Air 2S Drone lets you easily capture breathtaking aerial images and video whenever the mood strikes. Its an ideal alternative for use when travelling on vacation or for photography enthusiasts looking to record from new and unique perspectives.',
        price: 50
      }, {
        userId: 7,
        address: '2936 Worden St',
        city: 'San Diego',
        state: 'California',
        country: 'US',
        lat: 32.75180731450937,
        lng: -117.22290293081085,
        name: 'Kayak',
        description: 'Go kayaking now with my brand new Yak, I got it straight outta Costco, its legit, it floats, plenty of storage space for snacks and beers',
        price: 75
      }, {
        userId: 7,
        address: '2936 Worden St',
        city: 'San Diego',
        state: 'California',
        country: 'US',
        lat: 32.75180731450937,
        lng: -117.22290293081085,
        name: 'JetSki',
        description: 'What is the coolest thing in the world? A jetski. Dont believe me? try it out for yourself and i 100% guarantee (not really you wont get your money back) that you will have the greatest time of your life',
        price: 200
      }, {
        userId: 8,
        address: '8902 East Pecan Street',
        city: 'Tucson',
        state: 'Arizona',
        country: 'US',
        lat: 32.16428617671888,
        lng: -110.82634216360579,
        name: 'Paintball Guns (x2)',
        description: 'Go paintballing with a friend. One stop shop for an epic day in the hot AZ sun. price includes 2 guns, face masks, and enough paintball rounds to play for about 3 hours straight.',
        price: 60
      }, {
        userId: 9,
        address: '293 Donohue Dr',
        city: 'North Tustin',
        state: 'California',
        country: 'US',
        lat: 43.65626966376236,
        lng: -83.87760045350984,
        name: 'Speed Boat (2022 28 SURF)',
        description: 'Luxurious and extremely fast speed boat. Sip champagne at speeds of 70+ mph. Included in the price is a wakeboard, and a 3 person float to be pulled behind. Epic rides to be had.',
        price: 500
      }, {
        userId: 10,
        address: '1440 La Playa St.',
        city: 'San Francisco',
        state: 'California',
        country: 'US',
        lat: 37.75950715679758,
        lng: -122.50881740185814,
        name: 'WindSurfing Rig',
        description: 'Take to the sea and the skys with this epic widsurfing rig. San Fran is the perfect windy city for this 10 ft rig to set sail. Catch some waves and feel true freedom',
        price: 220
      }, {
        userId: 11,
        address: '525 Ocean View Blvd',
        city: 'Pacific Grove',
        state: 'California',
        country: 'US',
        lat: 36.6232622224061,
        lng: -121.91513949177937,
        name: 'Onward 2 Passenger Golf Cart',
        description: 'Fun electric Golf Cart to cruise around with. Quick and agile enough to do some light offroading with. Drive it around my beachfront property or take it somewhere else.',
        price: 200
      }, {
        userId: 12,
        address: '3120 Shoemaker Pl',
        city: 'Marina',
        state: 'California',
        country: 'US',
        lat: 36.68853496653221,
        lng: -121.80537526382176,
        name: 'Surf Boards (2) long + short',
        description: 'One longboard and one shortboard. Both in great condition, and good sized for most riders. Short one is probably best for more experienced riders but the longboard is perfect for all levels.',
        price: 85
      }, {
        userId: 13,
        address: '472 Pine Knot Ave #363',
        city: 'Big Bear Lake',
        state: 'California',
        country: 'US',
        lat: 34.24424487377111,
        lng: -116.91169153405502,
        name: '2021 MXZ Snowmobile',
        description: 'Top of the line snowmobile, perfect for cruising the slopes of Big Bear! hit moguls, jumps, whatever you find this baby can shred it. Does not come with a lift ticket but employees wont be able to catch you at full speed.',
        price: 450
      }, {
        userId: 13,
        address: '472 Pine Knot Ave #363',
        city: 'Big Bear Lake',
        state: 'California',
        country: 'US',
        lat: 34.24424487377111,
        lng: -116.91169153405502,
        name: 'Salomon Sight X Snowboard 2022',
        description: 'Brand new Salomon snowboard perfect for anyone between the heights of 5"4 and 5"8. Epic smooth rides. Will not be disappointed',
        price: 75
      }, {
        userId: 14,
        address: '718 Shepard St',
        city: 'San Pedro',
        state: 'California',
        country: 'US',
        lat: 33.70721922713729,
        lng: -118.29191313023664,
        name: 'OneWheel Pint',
        description: 'The Onewheel ride experience distilled into a smaller package for your every-day journeys and adventures. Electric and very fast and easy to controll',
        price: 100
      }, {
        userId: 14,
        address: '718 Shepard St',
        city: 'San Pedro',
        state: 'California',
        country: 'US',
        lat: 33.70721922713729,
        lng: -118.29191313023664,
        name: 'Ninebot S-MAX',
        description: 'The S-MAX is a supercharged version of the Ninebot S and the newest addition to the self-balancing scooter lineup. It can be added to the Gokart Conversion Kit (sold separately) to achieve the same speeds and range as the Gokart PRO',
        price: 120
      }, {
        userId: 15,
        address: '2776 Miller Avenue',
        city: 'Escondido',
        state: 'California',
        country: 'US',
        lat: 33.08158804613491,
        lng: -117.0827707884747,
        name: 'Skateboard',
        description: 'Basic skateboard. In town and didnt bring your board? no prob. borrow one of mine. If u want i can show you some sick spots to skate or you can grab the board and do your own thing. either way works for me.',
        price: 35
      }, {
        userId: 16,
        address: '6788 Radcliffe Ct',
        city: 'San Diego',
        state: 'California',
        country: 'US',
        lat: 32.85745754298339, 
        lng: -117.20848293124857,
        name: 'GoKart',
        description: 'Gas powered gokart to do with what you want. not exactly street legal. ever wanted to play real life mario cart? now is the time. comes with gas, but you might have to refill after and hour or so.',
        price: 160
      }, {
        userId: 17,
        address: '114 N Lake Havasu Ave',
        city: 'Lake Havasu City',
        state: 'Arizona',
        country: 'US',
        lat: 34.47760164772462, 
        lng: -114.34565420873047,
        name: 'Double Decker Pontoon Boat w/ Slide',
        description: 'This thing is a floating party. Two stories of fun with a slide that sends you right into the water underneath. Bathroom on board with lots of space for drinks',
        price: 550
      }, {
        userId: 18,
        address: '509 N Prospect Ave',
        city: 'Redondo Beach',
        state: 'California',
        country: 'US',
        lat: 33.851904626769674,
        lng: -118.37946424835276,
        name: '2 Beach Cruiser Bikes',
        description: 'Whats more fun than cruising the beach on a bicycle? doing it with a frind! rent 2 beach cruisers and hit the streets in style. Perfect weather all summer long you wont want to waste time walking when you could be having twice the fun in half the time.',
        price: 120
      }, {
        userId: 19,
        address: '842B Bethel St',
        city: 'Honolulu',
        state: 'Hawaii',
        country: 'US',
        lat: 21.309692453751495,
        lng: -157.86355394042602,
        name: 'Stand Up Paddle Board',
        description: 'Epic SUP with batwing sail to propell you without paddling (depending on wind level), this thing is so rad you will be stoked you rented it. Perfect activity all year round',
        price: 190
      }, {
        userId: 19,
        address: '842B Bethel St',
        city: 'Honolulu',
        state: 'Hawaii',
        country: 'US',
        lat: 21.309692453751495,
        lng: -157.86355394042602,
        name: '11ft Longboard (surfboard)',
        description: 'Get barreled with this beautiful 11ft perfect for all levels of experience from beginner to expert. I can take you to a perfect little spot that only locals go to if you want.',
        price: 90
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Rentals', null, {});
  }
};
