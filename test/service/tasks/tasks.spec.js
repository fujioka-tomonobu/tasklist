(function () {
  'use strict';

  describe('Service: TasksService', function() {

    var TasksService, $rootScope;

    beforeEach(module('tasklist.service.tasks'));

    beforeEach(inject(function (_$rootScope_, _TasksService_) {
      TasksService = _TasksService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing', function() {
      it('someThing', function() {

      });
    });
  });
})();
