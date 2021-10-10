import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    '(window:click)': 'onClick()',
  },
})
export class NavbarComponent implements OnInit {
  public isOpen = false;
  public isShow = false;
  constructor() {}

  ngOnInit(): void {}

  toggle(e: any) {
    e.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  onClick() {
    this.isOpen = false;
  }
}
