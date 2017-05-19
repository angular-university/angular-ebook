import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'fa-input',
  template: `

    <i class="fa" [ngClass]="classes"></i>
    
    <input (keyup)="value.emit(input.value)" #input>
    
  `,
  styles: [`
  
    :host {
      border: 1px solid grey;
    }
    
    input {
      border:none;
      outline: none;
    }
  
  `]
})
export class FaInputComponent  {

  @Input()
  icon:string;

  @Output()
  value = new EventEmitter<string>();

  get classes() {
    const cssClasses = {
      fa:true
    };

    cssClasses['fa-' + this.icon] = true;

    return cssClasses;
  }

}
