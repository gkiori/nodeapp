import {expect} from "chai";

describe('Simple Math Test', () => {
    it('should return 2', function () {
        //assert.equal(1+1, 2);
        expect(1+1).to.equal(2);
    });
    it('should return 9', function () {
        //assert.equal(3*3, 9);
        expect(3*3).to.equal(9);
    });
});