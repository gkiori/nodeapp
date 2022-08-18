import {assert} from "chai/index.mjs";
import {describe} from "mocha/lib/cli/run.js";

describe('Simple Math Test', () => {
    it('should return 2', function () {
        assert.equal(1+1, 2);
    });
    it('should return 9', function () {
        assert.equal(3*3, 9)
    });
});