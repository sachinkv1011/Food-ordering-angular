import { Component } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  username=""
  password=""

  loginFunction=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password
    }
    console.log(data)
  }

}
