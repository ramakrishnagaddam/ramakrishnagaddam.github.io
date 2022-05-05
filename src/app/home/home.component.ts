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

  downloadCV() {
    let link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.about?.resume_url);
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
