import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/services.index';
import { User } from '../models/user.model';
import { element } from 'protractor';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  remember: boolean = false;

  // Google
  auth2: any;

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 0) {
      this.remember = true;
    }
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const user = new User(
      null,
      null,
      form.value.email,
      form.value.password
    );

    this._userService.login(user, this.remember)
      .subscribe( res => {
        this._router.navigate([ '/dashboard' ]);
      });
  }

  googleInit() {
    gapi.load('auth2', () => {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '1030366607335-k44o7ouvrjtpk0f47874agslbf6mabts.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignIn(document.getElementById('btnGoogle'));
    });
  }

  // tslint:disable-next-line:no-shadowed-variable
  attachSignIn(element) {
    this.auth2.attachClickHandler( element, {}, (googleUser) => {
      const token = googleUser.getAuthResponse().id_token;

      this._userService.loginGoogle(token)
        .subscribe( res => {
          // this._router.navigate([ '/dashboard' ]);
          window.location.href = '#/dashboard';
        });
    });
  }
}


// 0412 333.60.33 150
