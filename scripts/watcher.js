#!/usr/bin/env node
/* eslint no-console: 0 */

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var net = require('net');
var reload = require('reload');
var open = require('open');

const async = require('async');
const { spawn } = require('child_process');

var app = express();

const __www = path.join(__dirname, '../dev');
const __www_assets = path.join(__dirname, '../');
const src = path.join(__dirname, '../src');

app.use(
  bodyParser.json({
    type: ['application/manifest+json', 'application/json']
  })
);
app.use(express.static(__www));
app.use('/assets', express.static(__www_assets));
const server = http.createServer(app);

var watcher = require('node-watch')(
  [src, __www],
  { filter: f => !/node_modules/.test(f), recursive: true },
  function () {}
);

watcher.on('ready', function () {
  console.log('Ready to listen for changes');
});

var portrange = process.env.port || 45032;

function getPort(cb) {
  var port = portrange;
  portrange += 1;

  var server = net.createServer();
  server.listen(port, function () {
    server.once('close', function () {
      cb(port);
    });
    server.close();
  });
  server.on('error', function () {
    getPort(cb);
  });
}

// Reload code here

const reloadDev = port => {
  reload(app, { port })
    .then(function (reloadReturned) {
      // reloadReturned is documented in the returns API in the README

      getPort(startServer);

      watcher.on('change', function (evt, name) {
        console.log('Changed: ' + name);

        async.series(
          [
            function (callback) {
              spawn('npm', ['run', 'build'], { stdio: 'inherit' }).on('exit', function (error) {
                if (error) {
                  console.error(error);
                }
                callback(null, 'one');
              });
            }
          ],
          function (err) {
            if (err) {
              console.log(err);
            }
            reloadReturned.reload();
          }
        );
      });
    })
    .catch(function (err) {
      console.error('Reload could not start, could not start server/sample app', err);
    });
};

getPort(reloadDev);

const startServer = function (port) {
  port = process.env.port || port;
  server
    .listen(port, err => {
      if (err) {
        console.error(`Error: ${JSON.stringify(err)}`);
      }
      console.log(`🌎  Open http://localhost:${port} in a browser to view the app.`);
      open(`http://localhost:${port}`);
    })
    .on('error', err => {
      if (err.errno === 'EADDRINUSE') {
        console.error(`Port already in use! Please use another port. Error: ${JSON.stringify(err)}`);
      } else {
        console.error(`Error: ${JSON.stringify(err)}`);
      }

      process.exit(0);
    });
};

process.on('SIGINT', function () {
  watcher.close();
  process.exit(1);
});
process.on('exit', function () {
  watcher.close();
  process.exit(1);
});
