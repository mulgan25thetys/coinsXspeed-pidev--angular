import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    //console.log();
  }

  activeMenu(parent : String,position :number) : String {
    const numm = position;
    return this.router.url.split("/")[numm] == parent ? "active" : "";
  }
}
