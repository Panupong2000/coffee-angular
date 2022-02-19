import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {



  ngOnInit(): void {
  }

  name:string="Yel";
  title:string ="Welcome to my E-Store";
  isDisable = true;
  item:string ="item";
  searchItem: string="";
  numItem=0;

  searchItems():void{
    this.numItem=5;
    this.searchItem=this.item;
  }
  greet():void{
    this.name="Yel"
  }

}
