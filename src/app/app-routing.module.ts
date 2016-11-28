import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OffersComponent }      from './offers/offers.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';

const routes: Routes = [
  {path: 'offers', component: OffersComponent},
  {path: 'offer-details', component: OfferDetailComponent}
];

@NgModule ({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
export const routingComponents = [ OffersComponent, OfferDetailComponent ]