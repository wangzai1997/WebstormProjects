'use strict';

describe("00入门",function () {
    it("写一个类—1",function () {
        var result = new Person("Tom",21).introduce();
        var expect_string = 'My name is Tom. I am 21 years old.';

        expect(expect_string).toEqual(result);

        });

    it("写一个类—2",function () {
        var result = new Student("Tom",21,3).introduce();
        var expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 3.';

        expect(expect_string).toEqual(result);

    });

    it("写一个类—3",function () {
        var result = new Worker("Tom",21).introduce();
        var expect_string = 'My name is Tom. I am 21 years old. I am a Worker. I have a job.';

        expect(expect_string).toEqual(result);

    });

});