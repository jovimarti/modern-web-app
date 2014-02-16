/**
 * Created by JoseVicente on 15/02/14.
 */
'use strict';

angular.module('mainApp')
    .controller('UsersController', function($scope,UserService){
        $scope.users = UserService.query();
    })
    .controller('UserController', function($scope,UserService){

    });
