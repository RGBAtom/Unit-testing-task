const mylib = require("./mylib");

function main() {
    console.log("Yhteenlasku", mylib.add(5, 7));
    console.log("Miinuslasku", mylib.subtract(7, 5));
    console.log("Kertolasku", mylib.multiply(1, 7));
    console.log("Jakolasku", mylib.divide(9, 2));
}

main();