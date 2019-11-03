import { Component } from '@angular/core';
import { Sensor } from '../model/sensor';
import { SensorService } from '../services/sensor.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listado:Sensor[];

  constructor(public sensorService: SensorService) {
    sensorService.getListado().then((listadoSensores)=>{
      this.listado = listadoSensores;
    })
  }


}
