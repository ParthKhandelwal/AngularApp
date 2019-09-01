import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.css']
})
export class SideNavigationBarComponent implements OnInit {

  @Input('navItems') items: NavItem[];

  constructor() { }

  ngOnInit() {
  }

}

export interface NavItem{
  title: string;
  link: string;
  icon: string;
}
