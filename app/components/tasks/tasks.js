/**
 * Tasks Components module.
 *
 * @module tasklist.components.tasks
 */
(function () {
  'use strict';

  angular
    .module('tasklist.components.tasks', [
      'tasklist.service.tasks'
    ])
    .controller('TasksController', TasksController);

  TasksController.$inject = ['TasksService'];

  /**
   * TasksController
   *
   * @class TasksController
   * @constructor
   */
  function TasksController(TasksService) {
    console.log('TasksController Constructor');
    this.TasksService = TasksService;
  }

  /**
   * The controller activate makes it convenient to re-use the logic
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  TasksController.prototype.activate = function() {
    console.log('TasksController activate Method');
    vm = this;

    this.owners = ['大川' , '藤岡', '青屋'];

    this.progresses = ['0%', '20%', '40%', '60%', '80%', '100%'];

    var tasks = vm.TasksService.getTasks();
    vm.items = tasks;
  };

  TasksController.prototype.register = function() {
    console.log('TasksController register Method');

    var task = {
      owner : vm.owner,
      note: vm.note,
      progress : '0%'
    };

    // Firebaseに追加
    vm.TasksService.addTask(task);
    vm.note = '';
  };

  TasksController.prototype.removeTask = function(task) {
    console.log('TasksController register Method');
    if (window.confirm('ホントに消していいの？？？')) {
      vm.items.$remove(task);
    }
  };

  TasksController.prototype.setFilter = function(owner) {
    if (owner) {
      vm.ownerFileter = {owner : owner};
    } else {
      vm.ownerFileter = undefined;
    }
  };

  /**
   * Angular ViewModel
   *
   * @property vm
   * @type {Object}
   */
  var vm;
})();
