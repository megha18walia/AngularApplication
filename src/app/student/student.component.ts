import {Component} from "@angular/core"

@Component({
    selector: "studentInfo",
    templateUrl : "./student.component.html",
    styleUrls: ["./student.css"]

})
export class studentComponent{
    StudentName = "Megha Walia";
    Age = 29;
    ImageSchUrl = "https://www.smashbros.com/wiiu-3ds/sp/images/character/link/main.png";
    ImageCollURL = "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Wakerlink.jpg/170px-Wakerlink.jpg";

    getImageURL() : string{
        if(this.Age > 18)
        {
        return this.ImageSchUrl;
        }
        else
        {
            this.ImageCollURL;
        }
    }




}