import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'detalle-sensor/:id', loadChildren: './detalle-sensor/detalle-sensor.module#DetalleSensorPageModule' },
  { path: 'tabla-mediciones/:id', loadChildren: './tabla-mediciones/tabla-mediciones.module#TablaMedicionesPageModule' },
  { path: 'log-riegos/:id', loadChildren: './log-riegos/log-riegos.module#LogRiegosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
