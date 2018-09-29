import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routes
import { PAGES_ROUTERS } from './pages.routes';

// Modules
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// TODO: Temp
import { VariationComponent } from '../components/variation/variation.component';
import { GraphicDonutComponent } from '../components/graphic-donut/graphic-donut.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
    VariationComponent,
    GraphicDonutComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphic1Component,
  ],
  imports: [
    PAGES_ROUTERS,
    SharedModule,
    FormsModule,
    ChartsModule
  ],
  providers: []
})

export class PagesModule { }
