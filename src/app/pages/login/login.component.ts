import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userObj: any = {
    username: '',
    password: ''
  }

  constructor(
    private _router: Router
  ){}
  
  onLogin(){
    if(this.userObj.username == 'admin' && this.userObj.password == '12345'){
      this._router.navigateByUrl("dashboard")
    }
    else{
      alert("Username and password is wrong!");
    }
  }
}
