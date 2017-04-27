import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  lessons: any[];

  constructor(private http:Http) {}

  ngOnInit() {
    this.http.get('https://final-project-recording.firebaseio.com/lessons.json')
      .map(res => Object.values(res.json()))
      .subscribe(lessons => this.lessons = lessons);
  }

}


