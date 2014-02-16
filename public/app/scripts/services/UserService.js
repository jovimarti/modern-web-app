/**
 * Created by JoseVicente on 16/02/14.
 */
'use strict';

angular.module('mainApp')
    .factory('UserService', function ($resource) {

        var UserS = $resource('/admin/user');
        return UserS;

    });