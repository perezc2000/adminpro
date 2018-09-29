import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/services.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( private _settings: SettingsService ) { }

  ngOnInit() {
    this.applyCheck();
  }

  changeTheme( theme: string ) {
    this._settings.applyTheme(theme);
    this.applyCheck();
  }

  applyCheck() {
    const selectors: any = document.getElementsByClassName('selector');
    const theme: string = this._settings.settings.theme;

    for ( const ref of selectors ) {
      ref.classList.remove('working');
    }

    for ( const ref of selectors ) {
      if ( ref.getAttribute('data-theme') === theme ) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
