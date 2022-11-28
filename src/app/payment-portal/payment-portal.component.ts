import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-portal',
  templateUrl: './payment-portal.component.html',
  styleUrls: ['./payment-portal.component.css']
})
export class PaymentPortalComponent {
  cardnumber=""
  expirydate=""
  cvv=""
  amount=""

  payment=()=>
  {
    let data:any={
      "cardnumber":this.cardnumber,
      "expirydate":this.expirydate,
      "cvv":this.cvv,
      "amount":this.cvv
    }
    console.log(data)
  }

}
