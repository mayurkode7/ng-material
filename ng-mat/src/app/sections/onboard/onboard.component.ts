import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {

  title = 'Onboard';
  constructor() { }

  ngOnInit() {
    console.log('onboard title: ', this.title);
  }

}
