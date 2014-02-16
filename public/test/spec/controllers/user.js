/**
 * Created by JoseVicente on 15/02/14.
 */
'use strict';

describe('Controller: Users', function(){
    //Cargamos la aplicacion
    beforeEach(module('mainApp'));

    //Declaramos la variables que vamos autilizar
    var UsersController,
        controller,
        httpBackend,
        scope;


    beforeEach(inject(function($controller, $rootScope,$httpBackend){
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        controller = $controller;
    }));

    //Nos aseguramos que no queden expectativas
    afterEach(function(){
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch a list of users', function(){
        httpBackend.expectGET('/admin/user').respond();
        UsersController = controller('UsersController',{
            $scope:scope
        });

        httpBackend.flush();
    });


});
