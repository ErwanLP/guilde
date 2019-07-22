const User = require('./../models/user');
const Player = require('./../models/player');
const Server = require('./../models/server');
const Worker = require('./../models/worker');
const Field = require('./../models/field');
const Farmhouse = require('./../models/production/farmhouse');

let assert = require('assert');
describe('Integration Test', function() {
  let server, user, player, locations, farmhouse, field, workers;
  describe('Create Server', function() {
    server = new Server();
    it('Check new server', function() {
      assert(server);
    });
    locations = server.generateLocation([
      {
        ratio: 5,
        itemType: 'Wheat',
      },
    ]);
    it('Check server location creation', function() {
      assert(locations[0].fertilityList[0].ratio === 5);
      assert(locations[0].fertilityList[0].itemType === 'Wheat');
    });
    workers = server.generateWorker(
        {
          workerName: 'Worker 1',
        },
    );
    it('Check server worker creation', function() {
      assert(workers[0].workerName === 'Worker 1');
    });
  });
  describe('Create User', function() {
    user = new User({userName: 'Test'});
    it('Check new user', function() {
      assert(user.userName === 'Test');
    });
  });
  describe('Create Player', function() {
    player = new Player();
    it('Check new player', function() {
      assert(player._id);
    });
    player.setUser(user);
    it('Check if the player is link to the user', function() {
      assert.equal(player.user, user._id, 'error - ' +
          player.user +
          '-' + user._id);
    });
  });
  describe('Player get location', function() {
    locations[0].setPlayer(player);
    it('Check if the location is link to the player', function() {
      assert.equal(locations[0].player, player._id, 'error - ' +
          locations[0].player +
          '-' + player._id);
    });
  });
  describe('Create FarmHouse', function() {
    farmhouse = new Farmhouse();
    it('Check new farmHouse ', function() {
      assert(farmhouse.type === 'Farmhouse');
      assert(farmhouse.level === 1);
    });
    farmhouse.setLocation(locations[0]);
    it('Check if the new farmHouse is link to the location ', function() {
      assert.equal(farmhouse.location, locations[0]._id, 'error - ' +
          farmhouse.location +
          '-' + locations[0]._id);
    });
    farmhouse.setPlayer(player);
    it('Check if the new farmHouse is link to the player ', function() {
      assert.equal(farmhouse.player, player._id, 'error - ' + farmhouse.player +
          '-' + player._id);
    });
  });
  describe('Create field', function() {
    field = new Field({itemType: 'Wheat'});
    it('Check new field', function() {
      assert(field._id);
      assert(field.itemType === 'Wheat');
    });
    field.setProduction(farmhouse);
    it('Check if the field is link to the farmHouse', function() {
      assert.equal(field.production, farmhouse._id, 'error - ' +
          field.production +
          '-' + farmhouse._id);
    });
    workers[0].setField(field);
    it('Check if the worker is linked to the field', function() {
      assert.equal(workers[0].field, field._id, 'error - ' +
          workers[0].field +
          '-' + field._id);
    });
  });
  describe('Process', function() {
    console.log(field);
    it('Check the number of worker', function(done) {
      Worker.find({field: field._id}).then(
          data => {
            console.log(data);
            done();

          },
      ).catch(
          err => {
            console.log(err);
            done();

          },
      );
    });

  });
});