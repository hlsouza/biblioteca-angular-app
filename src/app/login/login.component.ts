import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  angularForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  createForm() {
    this.angularForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  doLogin(value) {
    this.authService.doLogin(value).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  ngOnInit() {

  }



}
