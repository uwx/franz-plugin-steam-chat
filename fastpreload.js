'use strict';

const { remote } = require('electron');

process.once('loaded', () => {
  window.__hansenCssRoot = __dirname + '/css';
  require(remote.getGlobal('__hansen_do_not_directly_reference_cssInjectionPath'));
});