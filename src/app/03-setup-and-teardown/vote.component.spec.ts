import {VoteComponent} from './vote.component';

/*
//triple A structure
let component = new VoteComponent();    //arrange-create instance of VoteComponent
component.upVote();                     //act-call the method
expect(component.totalVotes).toBe(1);   //assert-expectation
*/

describe('VoteComponent', function() {
    let component: VoteComponent;    

    //beforeEach removes the problem of values overlapping:
    //the second test would not pass,
    //due to the component value changing in the first test
    beforeEach(function() {
        component = new VoteComponent();
    });

    it('should increment totalVotes when upvoted', () => {
        component.upVote();                     
        expect(component.totalVotes).toBe(1);   
    });
    it('should decrement totalVotes when downvoted', () => {
        component.downVote();
        expect(component.totalVotes).toBe(-1);
    });
});