const { expect } = require("chai");
const mylib = require("../mylib");

describe("Mylib unit testing", function () {

    before(function() {
        console.log("Beginning of testing")
    });

    after(function() {
        console.log("Tests are done");
    });

    it("pluslasku", function() {
        expect(mylib.add(5, 4)).to.equal(9);
    });

    it("miinuslasku", function() {
        expect(mylib.subtract(5, 4)).to.equal(1);
    });

    it("kertolasku", function() {
        expect(mylib.multiply(5, 4)).to.equal(20);
    });

    it("jakolasku", function() {
        expect(mylib.divide(8, 2)).to.equal(4);
    });
    
    it("jakolasku error", function() {
        expect(() => mylib.divide(5, 0)).to.throw("ZeroDivision");
    });
});