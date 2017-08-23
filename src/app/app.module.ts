import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import 'hammerjs';
import { AppComponent } from './app.component';
import { MaterialModules } from './material-modules/material-modules.module';
import { CreditCardInfoComponent } from './credit-card-info/credit-card-info.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CreditCardService } from './services/credit-card.service';
import { AuthorizationService } from './services/authorization.service';
import { PaymentService } from './services/payment.service';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardInfoComponent,
    BillingInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModules,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CreditCardService,
    AuthorizationService,
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
