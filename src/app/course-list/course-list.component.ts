import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: any[] = []; // Assuming courses property exists
  hasCourses: boolean = false; // Declare hasCourses property

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  editCourse(id: number): void {
    this.router.navigate(['/update-course', id]);
  }

  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id)
      .subscribe(() => {
        this.courses = this.courses.filter(course => course.id !== id);
      });
  }

  addCourse(): void {
    this.router.navigate(['/add-course']);
  }

  listCourses(): void {
    // Implement the functionality to list courses
  }
}
