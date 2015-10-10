//
// To Do List Module
//
(function () {
  'use strict';
  angular
        .module('todoList', ['ngRoute'])
        .config(['$routeProvider',
            function ($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: 'views/home.html',
          controller: 'homeController',
          controllerAs: 'vm'
        }).otherwise({
          redirectTo: '/'
        });
      }
        ]);
}());