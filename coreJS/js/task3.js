const number = 5;
let counter = 1;
let result;

for (let i = 1; i <= 10; i++) {
    result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}

while (counter <= 10) {
    result = number * counter;
    console.log(`${number} x ${counter} = ${result}`);
    counter++;
}
