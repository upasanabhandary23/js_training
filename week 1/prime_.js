const num = parseInt(prompt('Enter number to be checked for Prime: '));
let flag = true;

if (num === 1 || num === 0)
    console.log('1 and 0 are neither Prime nor Composite numbers');

else if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }

    if (flag) {
        console.log("Its Prime");
    } else {
        console.log("Not Prime");
    }
} else {
    console.log("NONE");
}