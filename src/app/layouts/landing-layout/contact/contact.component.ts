import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new Contact();
  constructor() { }

  ngOnInit(): void {
  }

  onSumitContact(requeste:NgForm){
    console.log(this.contact);
    requeste.reset();
  }
}
