import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: "Salutation"
})
export class SalutationPipe implements PipeTransform {
    transform(value: string, input: Number): string {
        if (input < 30) {
            return "Junior " + value;
        }
        if (input >= 30 && input <= 40) {
            return "Mr " + value;
        }
        if (input > 40) {
            return "Senior " + value;
        }
    }
}
