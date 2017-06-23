import {Component, ContentChild, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {InputRefDirective} from "./input-ref.directive";

@Component({
  selector: 'fa-input',
  template: `

    <i class="fa" [ngClass]="classes"></i>

    <ng-content></ng-content>

  `,
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent {

  @Input() icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;


  @HostBinding("class.focus")
  get focus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {
      fa: true
    };

    cssClasses['fa-' + this.icon] = true;

    return cssClasses;
  }

}
