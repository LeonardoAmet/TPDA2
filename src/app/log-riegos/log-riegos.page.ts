import { Component, OnInit, Input } from '@angular/core';
import { Sensor } from '../model/sensor';
import { LogRiego } from '../model/logRiego';
import { ActivatedRoute } from '@angular/router';
import { ElectrovalvulaService } from '../services/electrovalvula.service';

@Component({
  selector: 'app-log-riegos',
  templateUrl: './log-riegos.page.html',
  styleUrls: ['./log-riegos.page.scss'],
})
export class LogRiegosPage implements OnInit {

  //@Input() sensor: Sensor;
  private sensorId;
  private logs:LogRiego[];

  constructor(private router: ActivatedRoute, private logService: ElectrovalvulaService) { 
    this.sensorId = this.router.snapshot.paramMap.get('id'); 
    logService.getTodosLogs(this.sensorId).then((resultado :[])=>{
      this.logs = resultado
    })
  }

  ngOnInit() {
  }

}
