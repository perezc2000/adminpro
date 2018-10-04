import { Routes, RouterModule } from '@angular/router';

import { RxjsComponent } from './rxjs/rxjs.component';

import { LoginGuardGuard } from '../services/services.index';

import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PromisesComponent } from './promises/promises.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
      { path: 'account-settings',  component: AccountSettingsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress',  component: ProgressComponent },
      { path: 'graphic1',  component: Graphic1Component },
      { path: 'promises',  component: PromisesComponent },
      { path: 'rxjs',  component: RxjsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
   }
];

export const PAGES_ROUTERS = RouterModule.forChild( pagesRoutes );
