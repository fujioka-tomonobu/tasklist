/**
 * Tasks Service module.
 *
 * @module tasklist.service.tasks
 */
(function() {
  'use strict';

  angular
    .module('tasklist.service.tasks', [])
    .factory('TasksService', TasksService);

  TasksService.$inject = ['$firebaseArray'];

  /**
   * TasksService
   *
   * @class TasksService
   * @constructor
   */
  function TasksService($firebaseArray) {

    var ref = new Firebase('https://resplendent-inferno-2076.firebaseio.com/tasklist');
    var tasksArray = $firebaseArray(ref);

    var tasksService = {

      getTasks: function() {
        return tasksArray;
      },

      addTask: function(task, aftfnc) {
        tasksArray.$add(task).then(function() {
          if (aftfnc) {
            aftfnc();
          }
        });
      }
    };

    return tasksService;
  }

})();
