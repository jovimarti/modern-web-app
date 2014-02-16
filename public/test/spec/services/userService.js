/**
 * Created by JoseVicente on 16/02/14.
 */
'use strict';

describe('Service: UserService', function () {

    beforeEach(module('mainApp'));

    var svc,
        httpBackend;

    beforeEach(inject (function (UserService, $httpBackend) {
        svc = UserService;
        httpBackend = $httpBackend;
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should be able to fetch a List of all users', function () {
        var users = [{"id": "1", "username": "admin", "email": "jovimartinezamoros@gmail.com", "create_at": "2014-02-16 10:36:37", "update_at": "2014-02-16 10:36:37"}];
        httpBackend.expectGET('/admin/user').respond(users);

        var result = svc.query();

        httpBackend.flush();

        expect(result[0].id).toBe(users[0].id);
        expect(result[0].username).toBe(users[0].username);
        expect(result[0].email).toBe(users[0].email);

    });

});