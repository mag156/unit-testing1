export function hypotenuse(a, b) {
    if(a >0 && b>0) {
        return Math.hypot(a, b);
    } else throw('Haha');
}