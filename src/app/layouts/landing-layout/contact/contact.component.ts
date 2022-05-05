import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { Notification } from 'src/app/models/notification';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  notification = new Notification();
  constructor(private service:NotificationService) { }

  ngOnInit(): void {
  }

  onSumitContact(requeste:NgForm){
    this.notification.type = "CONTACT"; 
     this.service.addContact(this.notification).subscribe(
       res => {
        alert('Contact has been sended!');
        requeste.reset();
       },
       error =>{
        alert("Please retry or contact support!");
       }
     )
  }
}
