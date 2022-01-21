import { Injectable } from '@angular/core';
import { Person } from './person';
import { PERSON } from './mock-person';


@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor() { }

  getAllPersons() : Person[]{
    return PERSON
  }

  addPerson(){
    
  }
}
