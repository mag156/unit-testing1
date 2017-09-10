import {greet} from './greet';

describe('greet', function() {
    it('should include the name in the message', function(){
        //expect(greet('Mag')).toBe('Welcome Mag'); ==> fragile test
        expect(greet('Mag')).toContain('Mag');
    })

})