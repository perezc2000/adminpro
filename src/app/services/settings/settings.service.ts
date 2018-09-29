import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public settings: Settings = {
    theme:  'default-dark',
    urlTheme: 'assets/css/colors/default-dark.css'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.loadSettings();
  }

  saveSettings() {
    // console.log('Saving settings in localStorage');
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    if ( localStorage.getItem('settings') ) {
      // console.log('Loading settings from localStorage');
      this.settings = JSON.parse(localStorage.getItem('settings'));
    } else {
      // console.log('Using default values');
    }
    // Applying theme
    this.applyTheme(this.settings.theme);
  }

  applyTheme( theme: string ) {
    const urlTheme = `assets/css/colors/${ theme }.css`;
    this._document.getElementById('theme').setAttribute('href', urlTheme);

    this.settings.theme = theme;
    this.settings.urlTheme = urlTheme;
    this.saveSettings();
  }
}

interface Settings {
  theme: string;
  urlTheme: string;
}
