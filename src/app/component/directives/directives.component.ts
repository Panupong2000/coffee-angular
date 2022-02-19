import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  students = [
    { name:'Mickey',email:'mickey@uva.edu',major:'CS',year:'second'},
    { name:'Minny',email:'minny@uva.edu',major:'CS',year:'third'},
    { name:'duh',email:'duh@uva.edu',major:'SWE',year:'third'},
    { name:'huh',email:'huh@uva.edu',major:'SWE',year:'second'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

