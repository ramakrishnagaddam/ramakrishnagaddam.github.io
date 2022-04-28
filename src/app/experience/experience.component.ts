import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  work_experiences: any = [];
  format: string = "MMMM yyyy";

  constructor(private experience: ExperienceService) { 
    this.experience.getData().subscribe((experiences) => 
    {
      this.work_experiences = experiences;
    });
  }

  ngOnInit(): void {
  }

}
