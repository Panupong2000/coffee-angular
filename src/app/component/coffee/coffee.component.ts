import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Coffee } from './coffee';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  form: FormGroup;
  coffee: Coffee;
  confirm: Boolean = false;
  myDate = Date.now();

  constructor(private fb: FormBuilder) {
    this.coffee = new Coffee("","","","","",false);

    this.form = this.fb.group({
      name: ['', Validators.required],
      phoneNo: ['',[ Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      drink: ['', Validators.required],
      tempPreference: ['', Validators.required],
      sendText: [false, Validators.required],
    });


   }

   myClickFunction() {
    this.confirm = true;
    alert("comfirm Orders !!!!");
 }

 changeDefaultName(str: string){
  this.coffee.name = str;
}


  ngOnInit(): void {
  }

}
