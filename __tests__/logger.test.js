'use strict';

const logger = require('../src/middleware/logger');

describe('Logger Middleware', () => {
    // scoped locally and can use for mutliple tests
        const req = {};
        const res = {};
        const next = jest.fn();
        let consoleSpy;
        // turn shit off - start spying means stop spying

        beforeEach(() => {
            consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        });

        afterEach(() => {
            consoleSpy.mockRestore();
        });

    it('Works as expected', async () => {

        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalledWith(`REQUEST : ${req.method}, ${req.originalUrl}`)
        expect(next).toHaveBeenCalledWith();
        // expect(request.method).toEqual('GET');
    });
});
