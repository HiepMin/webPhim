import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./../../../assets/scss/layout_admin/_sidebar.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  constructor(private routes:Routes) { }

  ngOnInit() {
    // this.menuItems = routes.filter(menuItem => menuItem);
  }
//   isMobileMenu() {
//       if ( window.innerWidth > 991) {
//           return false;
//       }
//       return true;
//   };
}
