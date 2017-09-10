import {hypotenuse} from './hyp.component';

describe('hypotenuse', () => {
    it('should return length value of hypotenuse', () => {
        const result = hypotenuse(3,4);
        expect(result).toBe(5);
    });
    it('should have only positive values inserted and returned', () => {
            const result = hypotenuse(3,4);
            expect(result).toBeGreaterThan(0);
    });
    it('should not contain values equal to zero', () => {
            const result = hypotenuse(0,0);
            expect(result).toThrow(); 
    });
    it('should not contain A value being equal to zero', () => {
            const result = hypotenuse(0, 5);
            expect(result).toThrow();
    });
    it('should not contain B value being equal to zero', () => {
            const result = hypotenuse(5, 0);
            expect(result).toThrow();
    });
});
