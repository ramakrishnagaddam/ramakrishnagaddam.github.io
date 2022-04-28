import { Component, OnInit } from '@angular/core';
import { AboutService } from './services/about.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Portfolio';
  about: any;
  
  constructor(private aboutService: AboutService) {
    this.aboutService.getData().subscribe((data: any) => {
      this.about = data;
    });
  }

  ngOnInit(): void {
    
  }
  
}
