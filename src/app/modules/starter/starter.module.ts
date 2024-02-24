import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing.module';
import { StarterComponent } from './starter.component';
import { StarterHeaderComponent } from './components/starter-header/starter-header.component';
import { StarterFooterComponent } from './components/starter-footer/starter-footer.component';
import { StarterMainSliderComponent } from './components/starter-main-slider/starter-main-slider.component';
import { StarterMainServicesComponent } from './components/starter-main-services/starter-main-services.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { StarterPricingComponent } from './components/starter-pricing/starter-pricing.component';


@NgModule({
  declarations: [
    StarterComponent,
    StarterHeaderComponent,
    StarterFooterComponent,
    StarterMainSliderComponent,
    StarterMainServicesComponent,
    PricingComponent,
    StarterPricingComponent
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
