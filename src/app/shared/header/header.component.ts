import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/services.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
  }

}
