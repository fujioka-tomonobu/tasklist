(function() {
  'use strict';

  describe('Controller: TasksController', function() {

    beforeEach(module('tasklist.components.tasks'));

    var TasksController;

    beforeEach(inject(function($controller) {
      TasksController = $controller('TasksController');
    }));

    describe('TasksController', function() {
      it('Test Case', function() {
        TasksController.activate();
      });
    });
  });
})();
