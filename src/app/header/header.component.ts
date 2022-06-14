import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  path: string = '';

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if(this.route.url !== "/" || (this.route.url === "/" && window.pageYOffset > 400)) {
      element.classList.remove('navbar-transparent');
    } else {
      element.classList.add('navbar-transparent');
    }
  }

  isNavBarBgHide(): boolean {
    console.log(this.route.url);
    
    return !(this.route.url !== "/" || (this.route.url === "/" && window.pageYOffset > 400));
  }

  displayMenu(): boolean {
    console.log(this.route.url);
    return this.route.url === "/";
  }

}
