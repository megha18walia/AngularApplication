import {Component} from "@angular/core"
import {IEmployee} from "./IEmployee"
@Component({
    selector : "employeeTest",
    templateUrl : "./employeetest.component.html",
    styleUrls : ["employeeTest.css"]
})
export class employeetest
{
    employees : IEmployee[];

    constructor() {
        this.employees = [
            {code : "001", name : "ABC@123", age : 29, gender:"Female", salary : 1000.393, location : "Delhi",dateofbirth:"09/01/2000"},
            {code : "002", name : "DEF@456", age : 39, gender:"Female", salary :1300.9999, location : "Delhi100",dateofbirth:"09/02/2001"},
            {code : "003", name : "GHI@789", age : 49, gender:"Male", salary : 1600.6709, location : "Delhi200",dateofbirth:"09/03/2002"},
            {code : "004", name : "ABC1@1231", age : 20, gender:"Male", salary : 1007.078898, location : "Delhi899",dateofbirth:"09/04/2003"},
            {code : "005", name : "ABC2@1232", age : 25, gender:"Male", salary : 1009, location : "Delhi099",dateofbirth:"09/01/2000"}
        ];
    }

    radiobuttonselectedvalue : string = "All";
    getAllEmployees() : number {
        return this.employees.length;
    }

    getFemaleEmployees() : number {
        return this.employees.filter(x => x.gender === "Female").length;
    }

    getMaleEmployees() : number {
        return this.employees.filter(p => p.gender === "Male").length;
    }

    OnRadioButtonSelectedValueChanged (selectedValueChanged : string) : void{
        this.radiobuttonselectedvalue = selectedValueChanged;
    }


}