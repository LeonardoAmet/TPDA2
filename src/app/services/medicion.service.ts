import { Injectable } from '@angular/core';
import { Medicion } from '../model/medicion';
import { HttpClient } from '@angular/common/http';

const urlApi = 'http://localhost:3600/mediciones';

@Injectable({
  providedIn: 'root'
})
export class MedicionService {

  constructor(private http: HttpClient) { }

  getUltimaMedicion(id): Promise<Medicion> {
    return this.http.get(urlApi + '/' + id).toPromise().then((resultado: Medicion[]) => {
      console.log('medicion ' + resultado[0] + ' desde getUltimaMedicion')
      return resultado[0];
    })
  }

  // {fecha:"", valor: Number, dispositivoId: Number}
  guardarMedicion(valor, id): Promise <any>{
    var fechaActual = new Date().toJSON().slice(0, 19).replace('T', ' ')
    class nuevaMedicion {fecha:String
                         valor:Number
                         dispositivoId:Number}

    var medicion = new nuevaMedicion()
    medicion = {"fecha": fechaActual, "valor":valor, "dispositivoId":id}
    return this.http.post(urlApi + '/agregar', medicion).toPromise().then(()=>{console.log("promesa del post cumplida")})
  } 

}
