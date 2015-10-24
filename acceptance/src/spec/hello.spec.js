import requestApi from '../requestApi.js';

describe('/hello', () => {
    describe('GET', () => {
        it('should say hello', (done) => {
            requestApi.get("/hello")
                .then((hello) => {
                    expect(hello).toEqual({hello: "Hello World"});
                    done();
                })
                .catch((err) => {
                    expect(err).toBe(null);
                    done();
                });
        });
    });
});