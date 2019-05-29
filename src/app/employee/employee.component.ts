import {Component} from "@angular/core"

@Component({
    selector : "employeeenfo",
    templateUrl : "./employee.component.html",
    styleUrls :["./employee.css"]
})
export class employeeComponent
{
    FirstName = "Megha";
    LastName = "Walia";
    Gender = "Female";
    Age = "29";
    IsDisabled = false;
    Colspan:Number = 2;
    ClassesToApply : string="boldClass italicClass colorClass";
    Apply:boolean = true;
    ApplyBoldClass : boolean = true;
    ApplyItalicClass : boolean = true;
    ApplyColorClass : boolean = false;
    isBold : boolean = false;
    fontsize:Number = 30;
    isItalic:boolean = true;
    ShowDetails : boolean = false;
    Name:string = "Megha";

    addClasses() {
        let classes = {
                boldClass : this.ApplyBoldClass,
                italicClass : this.ApplyItalicClass,
                colorClass : this.ApplyColorClass
        };
        return classes;
    }

    addStyles(){
                let styles = {
                    'fontSize.px' : this.fontsize,
                    'fontWeight' : this.isBold ? 'bold' : 'normal',
                    'fontStyle' : this.isItalic ? 'italic' : 'normal' 
                };
            return styles;
    }

    ShowHideDetails(){
        this.ShowDetails = !this.ShowDetails;
       // alert("Show hide details");
    }

    onClick(){
        alert("This is the button clicked");
    }

    

  


}