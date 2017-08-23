import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CreditCardInfoComponent } from '../credit-card-info/credit-card-info.component';
import { BillingInfoComponent } from '../billing-info/billing-info.component';
import { environment } from '../../environments/environment';

const appRoutes: Routes = [
  { path: 'credit-card-info', component: CreditCardInfoComponent },
  { path: 'billing-info', component: BillingInfoComponent },
  { path: '', redirectTo: '/credit-card-info', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes     
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
