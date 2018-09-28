import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
  { path: 'login',    component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: '**',       component: NopagefoundComponent }
];

export const APP_ROUTERS = RouterModule.forRoot( appRoutes, { useHash: true } );
