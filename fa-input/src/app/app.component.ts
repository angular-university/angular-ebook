import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <h1>FA Input</h1>

    <fa-input icon="envelope" (value)="onNewValue($event)"></fa-input>
    
    <fa-input icon="lock" (value)="onNewValue($event)"></fa-input>
  `
})
export class AppComponent {

  onNewValue(val) {
    console.log(val);
  }

}
