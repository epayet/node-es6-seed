import WallService from './wall.service.js';

describe('WallService', () => {
    describe('getWall', () => {
        it('should get wall', done => {
            //expect(true).to.equal(true);
            //done();
            //WallService.getWall().then(wall => {
            //    expect(wall).to.equal({});
            //    done();
            //});

            var wall = WallService.getWall();
            expect(wall).to.eventually.equal('teste');
            done();
        });
    });
});