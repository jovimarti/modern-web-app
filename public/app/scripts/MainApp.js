'use strict';

angular.module('mainApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users', {
          templateUrl: '/app/views/users.html',
          controller: 'UsersController'
      })
      .when('/user/:id', {
          templateUrl: '/app/views/user.html',
          controller: 'UserController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
