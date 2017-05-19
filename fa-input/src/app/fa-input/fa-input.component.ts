import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';

@Component({
  selector: 'fa-input',
  template: `

    <i class="fa" [ngClass]="classes"></i>

    <input (focus)="inputFocus = true" (blur)="inputFocus = false"
           (keyup)="value.emit(input.value)" #input>

  `,
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent {

  @Input() icon: string;

  @Output() value = new EventEmitter<string>();

  inputFocus = false;

  get classes() {
    const cssClasses = {
      fa: true
    };

    cssClasses['fa-' + this.icon] = true;

    return cssClasses;
  }

  @HostBinding('class.focus')
  get focus() {
    console.log(this.inputFocus);
    return this.inputFocus;
  }

}
