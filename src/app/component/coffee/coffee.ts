export class Coffee {
  name: string;
  email: string;
  phoneNo: string;
  drink:string;
  tempPreferenve:string;
  sendText:boolean;


  constructor(name: string,email: string, phoneNo: string, drink:string , tempPreferenve:string, sendText:boolean) {
    this.name = name;
    this.email = email;
    this.phoneNo = phoneNo;
    this.drink = drink;
    this.tempPreferenve = tempPreferenve;
    this.sendText = sendText;

  }
}
