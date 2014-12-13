/* @flow */
'use strict';
var Hapi = require('hapi');

var page = require('./page.generated.js');

var stats = require('./stats.generated.json');

var server = new Hapi.Server();
server.connection({port: 3000});


server.route({
  method: 'GET',
  path: '/{params*}',
  handler: function (request, reply) {
    var html = page(request, stats.assetsByChunkName.main);
    reply(html);
  }
});


server.route({
  method: 'GET',
  path: '/assets/{param*}',
  handler: {
    directory: {
      path: 'public/assets'
    }
  }
});


var options = {
  opsInterval: 1000,
  reporters: [{
    reporter: require('good-console'),
    args:[{ log: '*', request: '*' }]
  }]
};


server.register({
  register: require('good'),
  options: options
}, function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    server.start(function () {
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  }
});
