/**
 * @desc disaplays add task input
 * @example <add-task></add-task>
 */

(function () {
  'use strict';

  angular
        .module('todoList')
        .directive('addTask', addTask);

  function addTask() {

    var directive = {
      link: link,
      template: '<div class="add-task">
        <form name="taskForm">
            <input class="add-task-input" ng-model="vm.task" placeholder="Add New Task" required="required" />
            <button class="add-task-btn" ng-disabled="taskForm.$invalid" ng-click="vm.addTask()">Add</button>
        </form>
    </div>',
      restrict: EA
    };
    return directive;

    function link(scope, element, attrs) {

    }
  }
}());

