/**
 * @author sandip nirmal
 * homeController.js 25/09/2015
 */

(function () {
  'use strict';
  angular
        .module('todoList')
        .controller('homeController', HomeController);

  // inject controller dependancies
  HomeController.$inject = ['taskservice'];

  //controller defination
  function HomeController(taskservice) {
    var vm = this;

    vm.addTask = addTask;
    vm.deleteTask = deleteTask;
    vm.getTasks = getTasks;
    //vm.tasks;
    vm.totalTaks = 0;

    // Get all tasks
    getTasks();

    /**
     * Add task implementation
     */
    function addTask() {
      taskservice.addTask(vm.task)
      .success(function () {
         console.log('Task Added successfully!!');
         getTasks();
      })
      .error(function () {
        console.log('Failed to add task!!');
      });
      vm.task = "";
    }

    /**
     * delete task implementation
     */
    function deleteTask(id) {
      taskservice.deleteTask(id)
      	.success(function(data) {
            console.log('Deleted successfully!!');
            getTasks();
        })
        .error(function() {
            console.log('Failed to delete task!!');
        });
    }

    /**
     * get tasks implementation
     */
    function getTasks() {
    taskservice.getTasks()
        .success(function(data) {
            vm.tasks = data.data;
        })
        .error(function() {
            console.log('Failed to get task!!');
        });
}
}

}());