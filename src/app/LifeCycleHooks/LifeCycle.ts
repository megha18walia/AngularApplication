import {Component, Input, OnChanges, SimpleChanges} from '@angular/core'

@Component({
    selector : 'simple',
    templateUrl : 'LifeCycle.html'
})
export class LifeCycle implements OnChanges
{
    @Input()
    inputText : string;
    
    ngOnChanges(changes : SimpleChanges){
        for(let pname in changes)
        {
            let change = changes[pname];
            let current = JSON.stringify(change.currentValue);
            let prev = JSON.stringify(change.previousValue);
            console.log("Current Value : "+current+ " Previous Value : "+prev);
        }
    } 
}