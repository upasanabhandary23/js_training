const side1 = prompt('Enter 1st side= ');
const side2 = prompt('Enter 2nd side= ');
const side3 = prompt('Enter 3rd side= ');

if (side1 == side2 == side3) {
    let area1 = (Math.sqrt(3) / 4) * (side1 * side1);
    console.log(`Area of Equiateral Traingle= ${area1}`);
} else {
    const s = (side1 + side2 + side3) / 2;
    const area2 = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    console.log(`Area of Traingle= ${area2}`);
}