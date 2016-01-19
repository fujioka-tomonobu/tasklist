/**
 * This is tasklist module.
 *
 * @module tasklist
 */
(function () {
  'use strict';

  angular
    .module('tasklist', [
      'ngNewRouter',
      'firebase',
      'tasklist.config',
      'tasklist.components.tasks'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    {path: '/',       redirectTo: '/tasks'},
    {path: '/tasks', component: 'tasks'}
  ];

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main tasklist
   * @constructor
   */
  function AppController () {}
})();
