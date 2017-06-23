import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <h1>FA Input</h1>

    <fa-input icon="envelope">
      
      <input inputRef type="email" placeholder="Email">
      
    </fa-input>
    
    <fa-input icon="lock" >

      <input inputRef type="password" placeholder="Password">
      
    </fa-input>
  `
})
export class AppComponent {


}
