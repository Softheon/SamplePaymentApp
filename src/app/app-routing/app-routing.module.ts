import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { CreditCardInfoComponent } from '../credit-card-info/credit-card-info.component';
import { BillingInfoComponent } from '../billing-info/billing-info.component';
import { PaymentResultsComponent } from '../payment-results/payment-results.component';
import { environment } from '../../environments/environment';

const appRoutes: Routes = [
  { path: 'credit-card-info', component: CreditCardInfoComponent },
  { path: 'billing-info', component: BillingInfoComponent },
  { path: 'payment-results', component: PaymentResultsComponent },
  { path: '', redirectTo: '/credit-card-info', pathMatch: 'full' },
  { path: '**', redirectTo: '/credit-card-info', pathMatch: 'full' }
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
