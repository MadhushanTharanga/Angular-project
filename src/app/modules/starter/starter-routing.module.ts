import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarterComponent } from './starter.component';
import {PricingComponent} from "./components/pricing/pricing.component";
// import {StarterPricingComponent} from "./components/starter-pricing/starter-pricing.component";

const routes: Routes = [
  { path: '', component: StarterComponent },
  { path: 'pricing',component:PricingComponent},
  // { path: 'pricing',component:StarterPricingComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
