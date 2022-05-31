import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderBlockComponent } from './landing/header-block/header-block.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './landing/about/about.component';
import { TokenComponent } from './landing/token/token.component';
import { HowToBuyComponent } from './how-to-buy/how-to-buy.component';
import { SalesComponent } from './landing/sales/sales.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'buy', component: HowToBuyComponent },
  { path: 'sale', component: SalesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderBlockComponent,
    FooterComponent,
    NavigationComponent,
    AboutComponent,
    TokenComponent,
    HowToBuyComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
