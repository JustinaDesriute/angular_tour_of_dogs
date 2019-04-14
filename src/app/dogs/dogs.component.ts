import { Component, OnInit } from '@angular/core';
import { Dog } from './dog';
import { DOGS } from './mock-dogs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs = DOGS;

  dog: Dog = {
    id: 1,
    name: 'Doggy',
    breed: 'Pincher'
  };

  constructor() { }

  ngOnInit() {
  }

}
