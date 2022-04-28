import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any = [];

  constructor(private skillService: SkillsService) { 
    this.skillService.getData().subscribe((data: any) => {
      
      for( let i = 0; i < 14; ) {
        let skillsArr = [];
        skillsArr.push(data.skills[i]);
        skillsArr.push(data.skills[i+1]);
        skillsArr.push(data.skills[i+2]);
        skillsArr.push(data.skills[i+3]);
        if((i + 4) !== 14) {
          skillsArr.push(data.skills[i+4]);
        } else {
          skillsArr.push({ name: '', rating: 'more' });
        }
        this.skills.push(skillsArr);
        i += 5;
      }
    });
  }

  ngOnInit(): void {
  }

}
