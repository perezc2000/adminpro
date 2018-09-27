import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphic1Component } from './pages/graphic1/graphic1.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress',  component: ProgressComponent },
      { path: 'graphic1',  component: Graphic1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]
   },
  { path: 'login',    component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: '**',       component: NopagefoundComponent }
];

export const APP_ROUTERS = RouterModule.forRoot( appRoutes, { useHash: true } );
