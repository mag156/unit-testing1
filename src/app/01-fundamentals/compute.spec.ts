//test files have spec.ts end
//karma looks for this pattern

//describe() => defining a suite
//it() => defining a spec
import {compute} from './compute';

//describe('compute', () => {}) ==> another way to write this
describe('compute', function() {
    it('should return 0 if input is negative', function() {
        const result = compute(-1);
        expect(result).toBe(0);
    })
    it('should increment the input if it is positive', function() {
        const result = compute(1);
        expect(result).toBe(2);
    })
})

//result of the test is visible in the Command Prompt
//OR the Karma window, after pressing DEBUG,
//result will be visible in the Console of Chrome Developer Tools