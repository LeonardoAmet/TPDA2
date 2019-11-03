import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sensor } from '../model/sensor';

const urlApi = 'http://localhost:3600/sensores';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  public listadoSensores:Sensor[];
  public Sensor:Sensor= new Sensor();

  constructor(private http:HttpClient) { }

  getListado():Promise<Sensor[]>{
    return this.http.get(urlApi).toPromise().then((resultado:Sensor[]) => {
          console.log(resultado)
          return resultado;
        })
  }

  getSensor(id): Promise<Sensor> {
    return this.http.get(urlApi + '/'+id).toPromise().then((resultado:Sensor[])=>{
      console.log('sensor'+ resultado[0] + 'desde getSensor')
      return resultado[0];
    })
  }

  
}
