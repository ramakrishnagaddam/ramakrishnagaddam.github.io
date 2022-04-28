import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  about: any;
  
  constructor(private aboutService: AboutService) {
    this.aboutService.getData().subscribe((data: any) => {
      this.about = data;
    });
  }

  ngOnInit(): void {
  }

}
