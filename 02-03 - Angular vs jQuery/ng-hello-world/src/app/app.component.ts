import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  lessons: any[];

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get('https://final-project-recording.firebaseio.com/lessons.json')
      .pipe(map(res => Object.values(res.json())))
      .subscribe(lessons => this.lessons = lessons);
  }

  updateCourses() {
    this.lessons.forEach((lesson, index) => {
      this.lessons[index].description = index + ' - ' + this.lessons[index].description
    });
  }

}


