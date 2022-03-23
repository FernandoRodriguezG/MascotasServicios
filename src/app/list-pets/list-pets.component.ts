import { Component, OnInit } from '@angular/core';
import { Pets } from '../pets';
import {SavePetsService} from '../save-pets.service';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit {

  constructor(private savepetsservice:SavePetsService) { }

  pets : Pets[] = [];

  ngOnInit(): void {
    const studentsObservable = this.savepetsservice.getStudents();
        studentsObservable.subscribe((studentsData: Pets[]) => {
            this.pets = studentsData;
        });
  }

 


}
