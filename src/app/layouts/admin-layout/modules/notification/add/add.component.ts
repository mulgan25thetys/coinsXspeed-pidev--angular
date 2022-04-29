import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pageTitle : string ="Notifications > Add";
  baseLink : string ="/admin/notification/";
  constructor() { }

  ngOnInit(): void {
  }

}
