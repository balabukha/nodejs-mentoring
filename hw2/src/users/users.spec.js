import express from 'express';
import supertest from 'supertest';
import expressLoader from '../loaders/express';
import sequelize from '../loaders/db';
import { token } from '../helpers/jwtCreator';
import UserService from '../users/UserService';
import UserController from '../users/UserController';
import UserDAL from '../users/UserDAL';

const app = express();

import { resourceCreator } from '../helpers';
import models from '../loaders/models';
let request;


const regularUser = resourceCreator.createRegularUser();
const emptyUserFields = resourceCreator.createEmptyUserField();
// const emptyLoginField = resourceCreator.createEmptyLoginField();
// const emptyPasswordField = resourceCreator.createEmptyPasswordField();
// const noUsernameParams = resourceCreator.createWithNoLogin();
// const noPasswordParams = resourceCreator.createWithNoPassword();
// const invalidUserUsername = resourceCreator.userWithInvalidUsername();
// const onlyNumsUsername = resourceCreator.userWithOnlyNumsForUsername();
// const oneCharUsername = resourceCreator.userWithOneCharUsername();
// const invalidUserEmail = resourceCreator.userWithInvalidEmail();
// const invalidUserPassword = resourceCreator.userWithInvalidPassword();

const usersRoute = '/users/';
const loginRoute = '/login/';
const userId = '1';
const errorTextWhileLoginError  = 'Error validating request body. "login" is not allowed to be empty. "password" is not allowed to be empty. "age" is not allowed. "isDeleted" is not allowed.';
const FULL_JWT_IN_HEADER = (JWT) => (`Bearer ${JWT}`);
const REQUEST = (user) => ({
    body: user
});
const res = {
    end() {},
    status(s) {
        this.statusCode = s;
        return this;
    },
    send() { },
    json(err) {
        console.log(`\n : ${  err}`);
    }
};

describe('/users route tests', () => {
    beforeAll(async () => {
        await new models.Users();
        const resultApp = await expressLoader({ app });
        request = supertest.agent(resultApp);
    });

    describe('Web user types url request with error', () => {
        it('should return 404 status code', done => {
            request
                .get('/userd')
                .expect(404)
                .then(() => {
                    done();
                });
        });
    });

    describe('check all user routs for having a jwt', () => {
        it('we cant get all users if we are not logged in:', done => {
            request
                .get(usersRoute)
                .expect(403)
                .then(() => {
                    done();
                });
        });

        it('we cant GET a user by id if we are not logged in:', done => {
            request
                .get(`${usersRoute}${userId}`)
                .expect(403)
                .then(() => {
                    done();
                });
        });

        it('we cant CREATE a new user if we are not logged in:', done => {
            request
                .post(`${usersRoute}`)
                .send(regularUser)
                .expect(403)
                .then(() => {
                    done();
                });
        });

        it('we cant DELETE a new user if we are not logged in:', done => {
            request
                .delete(`${usersRoute}${userId}`)
                .send(regularUser)
                .expect(403)
                .then(() => {
                    done();
                });
        });
    });

    describe('test user route with jwt', () => {
        it('returns an error, because the fields are empty', done => {
            request
                .post(`${loginRoute}`)
                .send(emptyUserFields)
                .expect(400)
                .then((res) => {
                    expect(res.text).toEqual(errorTextWhileLoginError);
                    done();
                });
        });

        // it('method than creates token', done => {
        // TODO: DB starts later ????

        //     request
        //         .post(`${usersRoute}`)
        //         .set('Authorization', FULL_JWT_IN_HEADER(token()))
        //         .send(regularUser)
        //         .expect(200)
        //         .then((res) => {
        //             console.log(' -- res --', res);
        //             done();
        //         })
        //         .catch(err => console.log('err', err));
        // });

        it('Should CREATE a regular user, by calling to DB', async () => {
            const SPY = jest.fn(() => regularUser);
            jest
                .spyOn(UserDAL, 'createUser')
                .mockImplementation(() => SPY(regularUser));

            await UserController.createUser(REQUEST(regularUser), res);
            expect(SPY).toHaveBeenCalledTimes(1);
            expect(SPY).toHaveBeenCalledWith(regularUser);
        });

        it('Should DELETE a user, using an ID, by calling to DB', async () => {
            const SPY = jest.fn(() => '12345');
            jest
                .spyOn(UserDAL, 'deleteUser')
                .mockImplementation(() => SPY());

            await UserController.deleteUser({ params: { id: '12345' } }, res);
            expect(SPY).toHaveBeenCalledTimes(1);
        });

        it('Should DELETE a user, using an ID, by calling to DB', async () => {
            const SPY = jest.fn(() => '12345');
            jest
                .spyOn(UserDAL, 'deleteUser')
                .mockImplementation(() => SPY());

            await UserController.deleteUser({ params: { id: '12345' } }, res);
            expect(SPY).toHaveBeenCalledTimes(1);
        });
    });
});
