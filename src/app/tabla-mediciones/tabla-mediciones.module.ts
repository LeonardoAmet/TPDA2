import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DetalleSensorPage } from '../detalle-sensor/detalle-sensor.page';

import { IonicModule } from '@ionic/angular';

import { TablaMedicionesPage } from './tabla-mediciones.page';

const routes: Routes = [
  {
    path: '',
    component: TablaMedicionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    //DetalleSensorPage
  ],
  declarations: [TablaMedicionesPage],
  exports:[TablaMedicionesPage]
})
export class TablaMedicionesPageModule {}
