import {getCurrencies} from './getCurrencies';

describe('getCurrencies', function() {
    it('should return the supported currencies', function() {
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('DKK');
        expect(result).toContain('EUR');
    });
});