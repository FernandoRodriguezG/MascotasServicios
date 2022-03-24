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

  mascota: Pets = {tipo:"",edad:0,raza:""};

  ngOnInit(): void {
  }

  savePets():void{
    this.savepetsservice.savePets(this.mascota);
  }
}
