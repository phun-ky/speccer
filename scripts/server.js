#!/usr/bin/env node
/* eslint no-console: 0 */

const { spawn } = require('child_process');
const bs = require('browser-sync').create();

bs.watch('./dev/*.html').on('change', bs.reload);

bs.watch('./src/**/*.styl', function (event) {
  if (event === 'change') {
    spawn('npm', ['run', 'build'], { stdio: 'inherit' }).on('exit', function (error) {
      if (error) {
        console.error(error);
      }

      bs.reload(['*.css']);
    });
  }
});
bs.watch('./src/**/*.ts', function (event) {
  if (event === 'change') {
    spawn('npm', ['run', 'build'], { stdio: 'inherit' }).on('exit', function (error) {
      if (error) {
        console.error(error);
      }

      bs.reload(['*.js']);
    });
  }
});

bs.init({
  server: ['./dev', './']
});
