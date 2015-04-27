import WallService from './wall.service.js';

describe('WallService', () => {
    describe('getWall', () => {
        it('should get wall', done => {
            WallService.getWall().then(wall => {
                expect(wall).toEqual({});
                done();
            });
        });
    });
});