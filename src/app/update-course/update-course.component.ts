// update-course.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  courseId!: number;
  course: Course = { id: 0, name: '', duration: '', price: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.courseId = +params.get('id')!;
      this.courseService.getCourseById(this.courseId)
        .subscribe((course: Course | null) => {
          if (course !== null) {
            this.course = course;
          }
        });
    });
  }

  onSubmit(): void {
    this.courseService.updateCourse(this.courseId, this.course)
      .subscribe(updatedCourse => {
        // Optionally, you can handle any logic after successful update
        console.log("Course updated successfully:", updatedCourse);
        // Redirect to the course list component after successful update
        this.router.navigate(['/courses']);
      }, error => {
        // Handle error, if any
        console.error("Error updating course:", error);
      });
  }
}
