function fact(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * fact(num - 1);
    }
}

const x = prompt('Enter a number');

if (x >= 0) {
    const res = fact(x);
    console.log(res);
} else {
    console.log("Enter Positive Integer");
}