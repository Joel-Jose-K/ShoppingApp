import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };
  
  constructor() { }

  ngOnInit(): void {
  }

  regSubmit(){
    console.log(this.form);
  }
}
