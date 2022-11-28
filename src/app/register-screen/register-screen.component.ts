import { Component } from '@angular/core';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.css']
})
export class RegisterScreenComponent {
  username=""
  password=""
  cpassword=""

  register=()=>
  {
    let data:any={
      "username":this.username,
      "password":this.password,
      "cpassword":this.cpassword
    }
    console.log(data)
  }

}
