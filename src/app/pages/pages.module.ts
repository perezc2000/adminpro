import { NgModule } from '@angular/core';

// Routes
import { PAGES_ROUTERS } from './pages.routes';

// Modules
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
  ],
  imports: [
    PAGES_ROUTERS,
    SharedModule
  ],
  providers: []
})

export class PagesModule { }
