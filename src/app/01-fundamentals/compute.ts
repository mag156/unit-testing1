//function taking a number and returning a zero if it's negative, 
//otherwise incrementing the number

export function compute(number) {
    if(number <0) 
        return 0;
    return number+1;
}