import { Component, OnInit } from '@angular/core';
import { Pets } from '../pets';
import {SavePetsService} from '../save-pets.service';

@Component({
  selector: 'app-capture-pets',
  templateUrl: './capture-pets.component.html',
  styleUrls: ['./capture-pets.component.css']
})
export class CapturePetsComponent implements OnInit {

  constructor(private savepetsservice:SavePetsService) { }

  ngOnInit(): void {
  }

  

  savePets(name:String,age:String,raza:String):void{
    const edad = Number(age);
    const p : Pets  = {tipo:name,edad:edad,raza:raza}
    this.savepetsservice.savePets(p);
  }
}
