import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { PERSON } from '../mock-person';
import { Person } from '../person';
import { PersonServiceService } from '../person-service.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  persons : Person[] = [];
  person : Person | undefined;


  constructor(private personService: PersonServiceService) { }

  ngOnInit(): void {
    this.getPersons()
  }

  getPersons() : void{
    this.persons = this.personService.getAllPersons()
  
  }

  onAddClick(){
    

  }

}
