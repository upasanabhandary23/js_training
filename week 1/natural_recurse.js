function sum(num) {
    if (num > 0) {
        return num + sum(num - 1);
    } else {
        return num;
    }
}

const n = parseInt(prompt("Enter number"));

const res = sum(n);

console.log(res);