import { User } from "./user";

export class Notification{

      idNotification?:any;
	
	  type?:any;
	  object?:any;
	  message?:any;
	  firstname? :any;
      lastname? :any;
      email?:any;
	  sent_on?:any;
	  recepientId?:any;
	  isSended?:any;
	  sendBy?:any;
	  user:User;
	  created_at?:any;
      users?:any;
   	  checked?:boolean; 
}