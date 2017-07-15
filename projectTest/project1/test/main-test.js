'use strict';

describe("00入门",function () {
    it("写一个类—1",function () {
        var result = new Person("Tom",21).Introduce();
        var expect_string = 'My name is Tom. I am 21 years old.';

        expect(expect_string).toEqual(result);

        });

});