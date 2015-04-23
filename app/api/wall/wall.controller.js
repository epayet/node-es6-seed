import WallService from './wall.service.js';

let controller = {
    getWall(req, res){
        WallService.getWall().then(wall => {
            res.send(wall);
        });
    }
};

export default controller;