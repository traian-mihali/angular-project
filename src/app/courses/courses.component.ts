import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  title = 'List of Courses';
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  ngOnInit() {}

  getTitle() {
    return this.title;
  }
}
