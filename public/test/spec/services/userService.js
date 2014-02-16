/**
 * Created by JoseVicente on 16/02/14.
 */
'use strict';

describe('Service: UserService', function () {

    beforeEach(module('mainApp'));

    var svc,
        httpBackend,
        mockUser,
        fetchUser;

    fetchUser = function(){
        httpBackend.expectGET('/admin/user/1').respond(mockUser);
        var user = svc.get({id:1});

        httpBackend.flush();

        return user;

    }

    beforeEach(inject (function (UserService, $httpBackend) {
        svc = UserService;
        httpBackend = $httpBackend;
        mockUser = {"id": "1", "username": "admin", "email": "jovimartinezamoros@gmail.com", "create_at": "2014-02-16 10:36:37", "update_at": "2014-02-16 10:36:37"}
    }));

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should be able to fetch a List of all users', function () {
        var users = new Array();
        users.push(mockUser);

        httpBackend.expectGET('/admin/user').respond(users);

        var result = svc.query();

        httpBackend.flush();

        expect(result[0].id).toBe(users[0].id);
        expect(result[0].username).toBe(users[0].username);
        expect(result[0].email).toBe(users[0].email);

    });

    it('should be able fetch a single user', function(){

       var user = fetchUser();
       expect(user.username).toBe(mockUser.username);
    });

    it('should be able to create a new user', function(){

        var user = svc.new();
        user.username = mockUser.username;
        user.email = mockUser.email;

        httpBackend.expectPOST('/admin/user', user).respond(mockUser);
        user.$save();
        httpBackend.flush();
    });

    it('should be able to edit a fetched user', function(){
        var user = fetchUser();
        user.username = "new Username";
        user.email = "new Email";

        mockUser.username = user.username;
        mockUser.email = user.email;

        httpBackend.expectPUT('/admin/user/' + user.id, user).respond(mockUser);
        user.$update();
        httpBackend.flush();
    });

    it('should be able to delete a fetched user', function(){
        var user = fetchUser();

        httpBackend.expectDELETE('/admin/user/'+ user.id, user).respond({message:'DELETE OK'});
        user.$delete();
        httpBackend.flush();


    });


});