import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-crud-button',
  templateUrl: './crud-button.component.html',
  styleUrls: ['./crud-button.component.css']
})
export class CrudButtonComponent implements OnInit {

  @Input() addLink:string="";
  @Input() editLink:string="";
  @Input() deleteLink:string="";
  @Input() excelLink:string="";

  @Input() is_deleted:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  addEntity() {
    window.location.href='/'+this.addLink;
  }
}
