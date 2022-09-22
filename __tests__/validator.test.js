'use strict';

const validator = require('../src/middleware/validator');
const supertest = require('supertest');
const { app } = require('../src/server');

const request = supertest(app);

describe('Validator Middleware', () => {
    it('Handles routes without name queries', async () => {

        const req = {
            query: {
                name: 'Fred',
            },
        };
        const res = {};
        const next = jest.fn();

        const response = await request.get('/person');
        // expect(next).toHaveBeenCalled();
        expect(response.status).toEqual(500);
    });

    it('Handles routes with name queries', async () => {

        const response = await request.get('/person?name=something')
        console.log(response._body);
        expect(response._body).toBeTruthy()
        expect(response.statusCode).toEqual(200);
    });

    test('Fails as expected', async () => {
        const req = {
            query: {
                banana: 'hello',
            },
        };
        const res = {};
        const next = jest.fn();
        validator(req, res, next);
            expect(req.query.name).not.toBeTruthy();
            // expect(next).toHaveBeenCalledWith()
    })
});
