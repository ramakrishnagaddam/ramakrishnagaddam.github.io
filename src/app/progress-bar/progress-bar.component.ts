import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  animations: [
    trigger('progressBar', [
      state('*', style({
        'stroke-dashoffset': '472'
      })),
      state('circle', style({
        'stroke-dashoffset': '{{percentage}}'
      }), {params: {percentage: 472}}),
      transition(
        '* => circle',
        animate(
          '2s ease',
          keyframes(
            [style({ strokeDasharray: 472, strokeDashoffset: '{{percentage}}', offset: 1 })]
          )
        ), {params: {percentage: 472}}
      ),
    ]),
  ],
})
export class ProgressBarComponent implements OnInit {
  @Input()
  percentage: any;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  getPercentage() {
    if(this.percentage !== 'more') {
      const result = 472 - (472 * (this.percentage * 10 )) / 100;
      const value = {
        value: 'circle',
        params: { percentage: result },
      };
      return value; 
    } else {
      return {
        value: 'circle',
        params: { percentage: 0 },
      };
    }
  }

  viewAllSkills() {
    if(this.percentage === 'more') {
      this.route.navigate(["/skills"]);
    }
  }
}
