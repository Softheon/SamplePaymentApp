import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from '../models/address.model';
import { CreditCardService } from '../services/credit-card.service';
import { AccessTokenRequest } from '../models/access-token-request.model';
import { environment } from '../../environments/environment';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css']
})
export class BillingInfoComponent implements OnInit {
  
  public states: string[] = [
    'AK',
    'AL',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ];

  constructor(
    private router: Router,
    private authorizeService: AuthorizationService,
    public cardService: CreditCardService,    
  ) { }

  ngOnInit() {
  }

  public back(): void {
    this.router.navigate(['/credit-card-info']);
  }

  public submit(): void {
    this.authorizeService.authorize().subscribe(res => {
      console.log(res);
    })
  }
}
