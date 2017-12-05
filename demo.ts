import { Employee,add, topic } from './classdemo';
// import {  topic } from './classdemo';

import * as cls from './classdemo'; // Not suggested

let empObj= new Employee(6,'Pavan');

cls.add(3,4);

add(4,5);

let firstName: string; // string

let age: number; //number

let isValid: boolean = false; //boolean can take true or false, by defult it is undefined

let dob: Date; // date data type

dob = new Date('12-dec-2017');

let employee: any; // Not suggested to be used

employee = 'Ajinkya';
employee = 10;
employee = false;

let unionTypes: string | string[] | number; // Union Data types

let employeeList: string[] = []; // array of type string

let departmentList: Array<string> = new Array<string>(); // array of string

departmentList.push('IT');
departmentList.push('marketing');
departmentList.push('Finance');

departmentList.forEach(function (department) {
    console.log(department);
});

for (let department of departmentList) {
        console.log(department);
}

for (let department in departmentList) {
    console.log(department);
}