import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { User } from '../../models/user.model';
import { URL_SERVICES } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string;
  private user: User;

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) {
    this.loadStorage();
  }

  isLogged() {
    return (this.token.length > 0) ? true : false;
  }

  saveStorage(id: string, token: string, user: User) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.token = token;
    this.user = user;
  }

  loadStorage() {
    this.token = '';
    this.user = null;

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  login(user: User, remember: boolean = false) {
    const url = URL_SERVICES + '/login';

    if (remember) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    return this._http.post(url, user).pipe(
      map((res: any) => {
        this.saveStorage(res.id, res.token, res.user);

        return true;
      })
    );
  }

  loginGoogle(token: string) {
    const url = URL_SERVICES + '/login/google';

    return this._http.post(url, { token: token }).pipe(
      map((res: any) => {
        this.saveStorage(res.id, res.token, res.user);

        return true;
      })
    );
  }

  logout() {
    this.token = '';
    this.user = null;

    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this._router.navigate(['/login']);
  }

  createUser(user: User) {
    const url = URL_SERVICES + '/user';

    return this._http.post(url, user).pipe(
      map((res: any) => {
        swal('Usuario creado', user.email, 'success');
        return res.user;
      })
    );
  }
}
