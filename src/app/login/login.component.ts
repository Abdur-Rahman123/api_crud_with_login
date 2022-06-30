import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,private router: Router) { }
//faLock = faLock;
loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});
  ngOnInit(): void {
   if(this.auth.isLoggedIn()){
    this.router.navigate(['admin']);
   }
  }
  onSubmit(): void {
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(result => {
      this.router.navigate(['employee'])
      },(err:Error)=>{
        alert(err.message);
      })
    }
    
  }

}
