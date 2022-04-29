import { Component, OnInit,Input,Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() homeOrdashboardLink:string;
  @Input() notificationLink:string;
  @Input() profileLink:string;
  @Input() redirectingLink:string;

  visitor:any;
  isAdmin_or_Agent:boolean=false;
  
  constructor(private authenticationService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.visitor = this.authenticationService.currentUserValue;
    this.isAdmin_or_Agent = this.visitor?.role == 'ADMIN' || this.visitor?.role ==  'AGENT' ? true :false;
  }

  logout() {
    swal.fire({
      title: 'Are you sure?',
      text: "You will disconnect!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.isAdmin_or_Agent =false;
        this.authenticationService.logout();
        swal.fire(
          'Disconnection!',
          'Good By!',
          'success'
        ).then(() =>{
          if(this.visitor.role == "CLIENT"){
            this.router.navigate(['/home'])
            .then(() => {
              window.location.reload();
            });
          }else{
            this.router.navigate(['auth/login'])
            .then(() => {
              window.location.reload();
            });
          }
        })
      }
    },dismiss =>{

    });
}


}
