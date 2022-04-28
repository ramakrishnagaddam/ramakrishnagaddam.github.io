import { Component, OnInit } from '@angular/core';
import { EducationService } from '../services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations: any = [];

  constructor(private educationService: EducationService) { 
    this.educationService.getData().subscribe((data) => {
      this.educations = data;
    });
  }

  ngOnInit(): void {
  }

}
