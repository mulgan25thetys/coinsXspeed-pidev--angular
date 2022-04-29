import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user/user.service';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  errors = '';
  user = new User();
  users : User[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,private service:UserService) {
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) { 
      //    this.router.navigate(['/home']);
      // }
     }

  ngOnInit(): void {
    this.loading = true;
    this.service.getAllUsers().pipe(first()).subscribe(res => {
        this.loading = false;
        this.users = res;
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // console.log(this.returnUrl);
  }

  
  onLogin() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.user.userName, this.user.password,this.users)
        .subscribe(
            data => {
              this.errors = '';
              if ((data?.role == "ADMIN" || data?.role == "AGENT") && this.returnUrl == '/') {
                this.showAlert(this.user.userName,'/admin/dashboard');
              } else {
                this.showAlert(this.user.userName,this.returnUrl);
              }  
            },
            error => {
                this.errors = error;
                this.loading = false;
            });
      }
    
  showAlert(username:String,navigateUrl:String){
    swal.fire({
      title: 'Connection?',
      text: "Welcome "+username+", have a nice day!",
      icon: 'success',
      showConfirmButton: false,
      timer: 2000
    }).then(() =>{
      this.router.navigate([navigateUrl]);
    })
  }

}
