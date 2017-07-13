'use strict';

describe("fizzbuzzwhizz", () => {


    it('when there is the first rule, should print fizz if num is 3', () => {
        let num  = 3;
        let result = "fizz";
        expect(fizzbuzzwhizz(num)).toEqual(result);
    })

    it('when there is the secend rule, should print buzz if num is 5', () => {
        let num  = 5;
        let result = "buzz";
        expect(fizzbuzzwhizz(num)).toEqual(result);
    })

    it('when there is the third rule, should print whizz if num is 7', () => {
        let num  = 7;
        let result = "whizz";
        expect(fizzbuzzwhizz(num)).toEqual(result);
    })

    it('when there is the forth rule, should print fizzbuzz if num is 15', () => {
        let num  = 15;
        let result = "fizzbuzz";
        expect(fizzbuzzwhizz(num)).toEqual(result);
    })

    it('when there is the fifth rule, should print fizzwhizz if num is 21', () => {
        let num  = 21;
        let result = "fizzwhizz";
        expect(fizzbuzzwhizz(num)).toEqual(result);
    })

    it('when there is the sixth rule, should print buzzwhizz if num is 35', () => {
        let num  = 70;
        let result = "buzzwhizz";
        expect(fizzbuzzwhizz(num)).toEqual(result);
    })

    it('when there is the seven rule, should print fizzbuzzwhizz if num is 105', () => {
        let num  = 105;
        let result = "fizzbuzzwhizz";
        expect(fizzbuzzwhizz(num)).toEqual(result);
    })

    it('when there is the eighth rule, should print num if else', () => {
        let num  = 4;
        let result = num;
        expect(fizzbuzzwhizz(num)).toEqual(result);
    })

    it('when there is the ninth rule, should print num if num contains 3', () => {
        let num  = 31;
        let result = "fizz";
        expect(fizzbuzzwhizz(num)).toEqual(result);
    })
  });

