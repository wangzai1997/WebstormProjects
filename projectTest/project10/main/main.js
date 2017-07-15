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
    appendMember() {
        if(which.no = Student.klass)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    assignLeader(name) {
        if(!appendMember) {
            return`It is not one of us.`;
        }
        else {
            this.leader = Student.name;
        }
    }

}

class Student extends Person {
    constructor(name,age,Class) {
        super(name,age);
        this.klass = Class.which;
    }

    introduce() {
        if(this.name == Class.assignLeader)
        {
            return(super.introduce()+` I am a Student. I am Leader of Class ${this.klass}.`);
        }
        else
        {
            return(super.introduce()+` I am a Student. I am at Class ${this.klass}.`);
        }
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

}

module.exports = {
    Person:Person,
    Student:Student,
    Teacher:Teacher,
    Class:Class
}

