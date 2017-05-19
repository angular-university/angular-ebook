import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <h1>FA Input</h1>

    <fa-input icon="envelope" (value)="onNewValue($event)"></fa-input>


    <fa-input icon="lock"></fa-input>  
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
