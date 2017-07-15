'use strict';
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Class {
    which(no) {
        this.no = no;
    }
}

class Student extends Person {
    constructor(name,age) {
        super(name,age);
        this.klass = Class.which;
    }

    introduce() {
        return(super.introduce()+` I am a Student. I am at Class ${this.klass}.`);
    }
}

class Teacher extends Person {
    constructor(name,age,klass) {
        super(name,age);
        this.klass = klass;
    }

    introduce() {
        if(this.klass > 0)
        {
            return(super.introduce()+` I am a Teacher. I teach Class ${this.klass}.`);
        }
        else
        {
            return(super.introduce() + ` I am a Teacher. I teach No Class.`);
        }
    }

    introduceWith(student) {
        if(this.klass == Class.which)
        {
            return(super.introduce()+` I am a Teacher. I teach Jerry.`);
        }
        else
        {
            return(super.introduce()+` I am a Teacher. I don't teach Jerry.`);
        }
    }
}

module.exports = {
    Person:Person,
    Student:Student,
    Teacher:Teacher,
    Class:Class
}

