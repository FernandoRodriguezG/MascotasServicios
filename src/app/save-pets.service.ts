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
    let m : Pets = {tipo:mascota.tipo,edad:mascota.edad,raza:mascota.raza};
    this.mascotas.push(m);
    console.log(this.mascotas);
  }

  clear() {
    this.mascotas = [];
  }

  public getPets(): any {
    const PetObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.mascotas);
           }, 1000);
    });

    return PetObservable;
}
}
