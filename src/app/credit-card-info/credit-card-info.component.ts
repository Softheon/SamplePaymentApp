import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreditCardService } from '../services/credit-card.service';

@Component({
  selector: 'app-credit-card-info',
  templateUrl: './credit-card-info.component.html',
  styleUrls: ['./credit-card-info.component.css']
})
export class CreditCardInfoComponent implements OnInit {

  public months: number[] = Array(12).fill(null).map((x, i) => i + 1); // [1,2,3,4,...,12];

  public monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  public expirationYears: number[] = Array(21).fill(new Date().getFullYear()).map((x, i) => x + i); //[2017,2018,2019,...,2037];

  constructor(
    private router: Router,
    public cardService: CreditCardService
  ) { }

  ngOnInit() {
  }

  public next() : void {
    this.router.navigate(['/billing-info']);
  }
}
