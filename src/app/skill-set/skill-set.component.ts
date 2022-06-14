import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css'],
})
export class SkillSetComponent implements OnInit {
  activeTab: string = 'tech';
  tabs: { key: string; value: string }[] = [
    { key: 'tech', value: 'Technical' },
    { key: 'tools', value: 'Tools' },
    { key: 'others', value: 'Personal' },
  ];

  skills: any = {};

  constructor(private skillService: SkillsService) {}

  ngOnInit(): void {
    this.tabs.forEach((tab) => {
      this.skills[tab.key] = [];
    });
    this.skillService.getData().subscribe((data) => {
      this.tabs = data.tabs;
      let value: Record<string, any> = {};
      this.tabs.forEach((tab) => {
        value[tab.key] = [];
      });
      data.skills.forEach((skill: any) => {
        this.tabs.forEach((tab) => {
          if (tab.key === skill.type) {
            skill.rating = Math.round(skill.rating) / 2;
            if (!Number.isInteger(skill.rating)) {
              skill.rating = skill.rating.toFixed(1) - 0.5;
              skill.isHalfRating = true;
            } else {
              skill.rating = skill.rating;
              skill.isHalfRating = false;
            }
            skill.rating = Array.from(new Array(skill.rating), (x, i) => i + 1);
            value[tab.key].push(skill);
          }
        });
      });
      this.skills = value;
    });
  }

  activateTab(tab: string) {
    this.activeTab = tab;
  }

  getSkills(key: string) {
    if (this.skills === undefined) {
      this.tabs.forEach((tab) => {
        this.skills[tab.key] = [];
      });
    }
    return this.skills[key];
  }
}
