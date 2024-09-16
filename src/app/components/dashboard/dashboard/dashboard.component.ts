import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{





  ngOnInit(): void {
  }



  images = [
    './assets/img/media/1.jpg',
    './assets/img/media/2.jpg',
    './assets/img/media/3.jpg',
    './assets/img/media/4.jpg',
    './assets/img/media/5.jpg',
    './assets/img/media/6.jpg',
    './assets/img/media/7.jpg',
    './assets/img/media/8.jpg',
  ];

}
