import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pets } from './pets';

@Injectable({
  providedIn: 'root'
})
export class SavePetsService {

  constructor() { }
  mascotas: Array<Pets> = [];

  savePets(mascota : Pets):void{
    this.mascotas.push(mascota);
    console.log(this.mascotas);
  }

  clear() {
    this.mascotas = [];
  }

  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.mascotas);
           }, 1000);
    });

    return studentsObservable;
}
}
