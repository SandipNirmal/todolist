// Task service
//
(function () {
  'use strict';

  angular
        .module('todoList')
        .factory('taskservice', taskservice);

   taskservice.$inject = ['$http'];

  // taskservice function
  function taskservice($http) {
    var tasks = [];

    var service = {
      getTasks: getTasks,
      addTask: addTask,
      deleteTask: deleteTask
      //editTask : editTask
    };
    return service;

    /**
     * Returns all available tasks
     */
    function getTasks() {
      // implementation of getTasks
      // return promise for getting tasks from server
      //tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      //make API request to data from server
      return $http.get('http://localhost:3000/todos');
    }

    /**
     * Adds new task into tasks array
     * @param {string} task - task to be added
     */
    function addTask(task) {
      // implementation for add task
      var newTask = {
        task: task,
        timeAdded: new Date().toString()
      };
      //tasks.push(newTask);

      //make API request to save on server
      return $http.post('http://localhost:3000/todo',newTask)
      //localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    /**
     * Remove item from array at specified index
     * @param {number} index - index of task to be removed
     */
    function deleteTask(id) {
      // implementation for delete task
      /*tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));*/
      //make API request to delete task
      return $http.delete('http://localhost:3000/todo/'+id);
    }
  }
}());
