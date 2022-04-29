import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  messages:string="";
  class:string="";
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
