import HelloService from './hello.service.js';

let controller = {
    sayHello(req, res, next){
        HelloService.sayHello()
            .then(hello => {res.send({hello})})
            .catch(next);
    }
};

export default controller;