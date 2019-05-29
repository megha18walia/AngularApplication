export interface IEmployee
{
    code : string;
    name : string;
    age : Number;
    gender : string;
    salary : Number;
    location:string;
    dateofbirth : string;

}

export class Employee implements IEmployee
{
    constructor(public code : string, public name : string, public age : Number, public gender : string, public salary : Number, 
        public location : string, public dateofbirth : string)
        {

        }
}