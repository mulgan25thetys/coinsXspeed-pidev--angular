import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pageTitle:string ="Blog > Add Post"
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
