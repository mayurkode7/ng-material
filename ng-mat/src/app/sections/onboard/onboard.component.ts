import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {

  title = 'Onboard';
  accounts: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.accounts = this.route.snapshot.data;

    console.log('accounts: ', this.accounts);

  }

}
