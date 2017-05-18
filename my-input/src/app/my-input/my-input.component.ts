import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-input',
    template: `        
        <div class="my-input" tabindex="0" (keyup)="onKeyUp($event)">
            {{value ? value : placeholder}}
        </div>
    `,
    styles: [`
        .my-input {
            border: 1px solid lightgray;
            height: 25px;
            line-height: 25px;
            padding-left: 5px;
            width: 170px;
            color: lightgray;
            vertical-align: middle;
        }`]
})
export class MyInputComponent {
    @Input()
    placeholder;

    value = '';

    onKeyUp($event: KeyboardEvent) {

        if (this.value.length > 0 && $event.key === 'Backspace') {
            this.value = this.value.slice(0, this.value.length - 1);
        }
        else if (!$event.metaKey && !$event.ctrlKey && !$event.altKey && $event.key != 'Shift') {
            console.log($event.key);
            this.value += $event.key;
        }
    }
}
