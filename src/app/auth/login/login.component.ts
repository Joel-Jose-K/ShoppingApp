import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // email: string = '';

  form: LoginForm= {
    email: '',
    password: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form);
  }

}
