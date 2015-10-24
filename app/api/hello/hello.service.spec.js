import HelloService from './hello.service.js';

describe('HelloService', () => {
    describe('sayHello', () => {
        it('should say hello', done => {
            HelloService.sayHello().then(hello => {
                expect(hello).toEqual("Hello World");
                done();
            });
        });
    });
});