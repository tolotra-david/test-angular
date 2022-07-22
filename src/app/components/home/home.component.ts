import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus = [
    {
      link: 'lists',
      name: 'Lists'
    },
    {
      link: 'fake',
      name: 'Fake'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
