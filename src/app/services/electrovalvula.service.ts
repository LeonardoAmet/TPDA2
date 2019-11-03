import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogRiego } from '../model/logRiego';

const urlApi = 'http://localhost:3600/loggerRiegos';

@Injectable({
  providedIn: 'root'
})
export class ElectrovalvulaService {

  constructor(private http: HttpClient) { }

  public getLogRiego(id): Promise<LogRiego> {
    return this.http.get(urlApi + '/leer/' + id).toPromise().then((resultado:LogRiego[]) =>{
      console.log('log: ' + resultado[0] + ' desde getLogRiego')
      return resultado[0];
    })
  }

  // {"apertura":boolean, "fecha": String, "electrovalvulaId": Number}
  public guardarLogRiego(id, apertura): Promise<any>{
    var fechaActual = new Date().toJSON().slice(0, 19).replace('T', ' ')
    var log = {"apertura":apertura, "fecha": fechaActual, "electrovalvulaId": id}
    return this.http.post(urlApi + '/agregar', log).toPromise().then(()=>{console.log("promesa del post cumplida")})
  }

  public getTodosLogs(id):  Promise<LogRiego[]> {
    return this.http.get(urlApi + '/leertodos/' + id).toPromise().then((resultado:LogRiego[]) =>{
      console.log('log: ' + resultado[0] + ' desde getLogRiego')
      return resultado;
    })
  }
}
