import {Component , Input , Output, EventEmitter} from "@angular/core"

@Component({
    selector : "empradio",
    templateUrl : "./empradio.component.html",
    styleUrls : ["empradio.css"]
})
export class empradio
{
    @Input()
    All:Number 

    @Input()
    Male:Number 

    @Input()
    Female:Number 

    RadioButtonChangedValue : string = "All";

    @Output()
    RadioButtonChanged : EventEmitter<string> = new EventEmitter<string>();

    OnRadioButtonChangedEvent()
    {
        this.RadioButtonChanged.emit(this.RadioButtonChangedValue);
    }
}