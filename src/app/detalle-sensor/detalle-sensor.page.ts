//correr antes npm install --save highcharts
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { SensorService } from '../services/sensor.service';
import { Sensor } from '../model/sensor';
import { Medicion } from '../model/medicion';
import { MedicionService } from '../services/medicion.service';
import { LogRiego } from '../model/logRiego';
import { ElectrovalvulaService } from '../services/electrovalvula.service';

declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-detalle-sensor',
  templateUrl: './detalle-sensor.page.html',
  styleUrls: ['./detalle-sensor.page.scss'],
})
export class DetalleSensorPage implements OnInit {

  private idSensor: string
  private valorObtenido: number = 0;
  public myChart;
  private chartOptions;
  private sensor: Sensor = new Sensor();
  private medicion: Medicion = new Medicion();
  private log: LogRiego = new LogRiego();
  private aperturaEv: Number;

  constructor(private router: ActivatedRoute, private sensorService: SensorService, private medicionService: MedicionService, private electrovalvulaService: ElectrovalvulaService) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {

    // cuando estoy por entrar en la vista:
    //  1. Traigo sensor de base de datos
    //  2. Traigo ultima medicion de base de datos
    //  3. Traigo estado de la electrovalvula desde base de datos

    // 1. Traigo sensor
    let idSensor = this.router.snapshot.paramMap.get('id');
    this.sensorService.getSensor(idSensor).then((resultado: Sensor) => {
      console.log(resultado)
      this.sensor = resultado
    });

    // 2. Traigo ultima medicion
    this.medicionService.getUltimaMedicion(idSensor).then((resultado: Medicion) => {
      console.log(resultado)
      this.medicion = resultado
      this.valorObtenido = parseInt(this.medicion.valor)
    })

    // 3. Traigo estado de la electrovalvula (en el log)
    //let idElectrovalvula = this.router.snapshot.paramMap.get('id');
    let idElectrovalvula = idSensor;
    this.electrovalvulaService.getLogRiego(idElectrovalvula).then((resultado: LogRiego) => {
      this.log = resultado;
      this.aperturaEv = this.log.apertura;
      console.log(this.aperturaEv)
    })
  }

  ionViewDidEnter() {
    // actualizo chart
    var intervalId = setInterval(() => {
      this.update()
    }, 2000);
    this.generarChart();
  }

  generarChart() {
    this.chartOptions = {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
      }
      , title: {
        // text: 'Sensor N° 1'
        text: 'Sensor N° ' + this.sensor.dispositivoId
      }

      , credits: { enabled: false }


      , pane: {
        startAngle: -150,
        endAngle: 150
      }
      // the value axis
      , yAxis: {
        min: 0,
        max: 100,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: 'kPA'
        },
        plotBands: [{
          from: 0,
          to: 10,
          color: '#55BF3B' // green
        }, {
          from: 10,
          to: 30,
          color: '#DDDF0D' // yellow
        }, {
          from: 30,
          to: 100,
          color: '#DF5353' // red
        }]
      }
      ,

      series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
          valueSuffix: ' kPA'
        }
      }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions);
  }

  cerrarElectrovalvula() {
    // cierro valvula
    this.aperturaEv = 0
    // loggeo cierre
    this.electrovalvulaService.guardarLogRiego(this.sensor.electrovalvulaId, this.aperturaEv)
    // guardo medicion
    this.medicionService.guardarMedicion(this.valorObtenido, this.sensor.dispositivoId)
  }

  abrirElectrovalvula() {
    // abro electrovalvula
    this.aperturaEv = 1
    // loggeo apertura
    this.electrovalvulaService.guardarLogRiego(this.sensor.electrovalvulaId, this.aperturaEv)

  }

  update() {

    console.log("Cambio el valor del sensor");
    console.log("Apertura Ev ", this.aperturaEv);
    if (this.aperturaEv === 1) {
      this.valorObtenido -= 3;
      // Si se llega a 100 saturo el valor:
      if (this.valorObtenido <= 0) {
        //clearInterval(intervalId)
        this.valorObtenido = 0;
      }
    }
    else {
      this.valorObtenido += 1;
      // Si se llega a 100 saturo el valor:
      if (this.valorObtenido >= 100) {
        //clearInterval(intervalId)
        this.valorObtenido = 100;
      }
    }

    //llamo al update del chart para refrescar y mostrar el nuevo valor
    this.myChart.update({
      series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
          valueSuffix: ' kPA'
        }
      }]
    });
  }


}