import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicionService } from '../services/medicion.service';
import { Medicion } from '../model/medicion';
import { Sensor } from '../model/sensor';


@Component({
  selector: 'app-tabla-mediciones',
  templateUrl: './tabla-mediciones.page.html',
  styleUrls: ['./tabla-mediciones.page.scss'],
})
export class TablaMedicionesPage implements OnInit {

  // private sensor:Sensor = new Sensor();
  //@Input() sensor: Sensor;
  private sensorId;
  private mediciones:Medicion[];// = new Array<Medicion>();

  constructor(private router: ActivatedRoute, private medicionService:MedicionService) { 
    this.sensorId = this.router.snapshot.paramMap.get('id'); 
    medicionService.getTodas(this.sensorId).then((resultado :Medicion[])=>{
      this.mediciones = resultado
    });


  }

  ngOnInit() {
  }

}
