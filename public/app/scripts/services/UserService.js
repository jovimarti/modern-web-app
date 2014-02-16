/**
 * Created by JoseVicente on 16/02/14.
 */
'use strict';

angular.module('mainApp')
    .factory('UserService', function ($resource) {

        var UserS = $resource('/admin/user/:id', {id:'@id'}, {
            update: {method: 'PUT'}, params: {id:'@id'}
        });

        UserS.new = function(){
            return new UserS();
        }
        return UserS;

    });