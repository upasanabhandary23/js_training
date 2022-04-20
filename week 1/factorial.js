const num = parseInt(prompt('Enter a number to check Factorial '));

if (num < 0) {
    console.log("Factorial of Negative numbers is not possible");
} else if (num === 0) {
    console.log("Factorial of ) is not possible");
} else {
    let fact = 1;
    for (let i = 0; i <= num; i++) {
        fact = fact * i;
    }

    console.log(`Factorial of ${num} is ${fact}`);
}