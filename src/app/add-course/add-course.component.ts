import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course: Course = {
    name: '',
    duration: '',
    price: 0,
    id: 0
  };

  constructor(
    private router: Router,
    private courseService: CourseService
  ) { }

  onSubmit(): void {
    this.courseService.addCourse(this.course)
      .subscribe(() => {
        console.log('Course added successfully!');
        this.router.navigate(['/courses']); // Navigate back to courses list after adding
      });
  }
}
