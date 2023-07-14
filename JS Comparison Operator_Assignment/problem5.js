// You are given the sides of the rectangle 1: L1 and B1 and sides of the rectangle 2 : L2 and B2.

// You need print if area of rectangle 1 is greater than rectangle 2.

// You need print if perimeter of rectangle 1 is greater than rectangle 2.

let l1=1 , b1=2 , l2=2 , b2=3;

let area_rec1 = l1 * b1;
let area_rec2 = l2 * b2;

let peri_rec1 = 2+(l1+b1);
let peri_rec2 = 2+(l2+b2);

console.log(area_rec1 > area_rec2);
console.log(peri_rec1 > peri_rec2);