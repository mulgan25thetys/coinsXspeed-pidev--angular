import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
const subject = webSocket("ws://localhost:8081");

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  pageTitle = "Chat";
  message = "hello";
  subject = webSocket("ws://localhost:8889/")
  constructor() { }

  ngOnInit(): void {
  }

  sendToserver($event){
    this.subject.subscribe();
    this.subject.next(this.message);
    this.subject.complete();
  }
}
