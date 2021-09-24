import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css'],
})
export class SectorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  data = [
    {
      img: './../../../assets/construction.jpg',
      title: 'Slide 1',
    },
    {
      img: './../../../assets/solar-panel.jpg',
      title: 'Slide 2',
    },
    {
      img: './../../../assets/electrician.jpg',
      title: 'Slide 3',
    },
    {
      img: './../../../assets/transmission.jpg',
      title: 'Slide 4',
    },
  ];
}
