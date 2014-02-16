/**
 * Created by JoseVicente on 15/02/14.
 */
'use strict';

describe('Controller: UsersController', function(){
    //Cargamos la aplicacion
    beforeEach(module('mainApp'));

    //Declaramos la variables que vamos autilizar
    var UsersCtl,
        scope;


    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        UsersCtl = $controller('UsersCtl',{
            $scope: scope
        });
    }));

    it('should have a title', function(){
        expect(scope.title).toBe('Lista de Usuarios');
    });
});
