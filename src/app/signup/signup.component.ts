import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import swal from 'sweetalert';

import { UserService } from '../services/services.index';
import { User } from '../models/user.model';

declare function init_plugins();

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private _userService: UserService,
    private _router: Router) { }
  form: FormGroup;

  ngOnInit() {
    init_plugins();

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      confirm: new FormControl(null, Validators.required),
      agree: new FormControl(false)
    }, {
      validators: this.areEquals('password', 'confirm')
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    if (!this.form.value.agree) {
      swal('Importante', 'Debes aceptar los términos de uso', 'warning');
      return;
    }

    const user = new User(
      this.form.value.name,
      this.form.value.lastname,
      this.form.value.email,
      this.form.value.password
    );

    this._userService.createUser(user)
      .subscribe(res => {
        console.log('User', res);
        this._router.navigate([ '/login' ]);
      });
  }

  areEquals(field1: string, field2: string) {
    return (group: FormGroup) => {
      const _field1 = group.controls[field1].value;
      const _field2 = group.controls[field2].value;

      if (_field1 === _field2) {
        return null;
      }

      return {
        areEquals: true
      };
    };
  }
}
