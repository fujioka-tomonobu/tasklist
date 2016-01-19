(function() {
  'use strict';

  angular
    .module('tasklist.mock.service.tasks', [])
    .factory('TasksService', TasksService);

  function TasksService() {
    return {
      some: someSpy
    };
  }

  var someSpy = jasmine.createSpy().and.returnValue(
    function(cb) {
      return result;
    }
  );

  var result = {};
})();
