import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChickenComponent } from './chicken/chicken.component';
import { TurkeyComponent } from './turkey/turkey.component';
import { PricesComponent } from './prices/prices.component';
import { YourGrowersComponent } from './your-growers/your-growers.component';
import { BeefComponent } from './beef/beef.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'index', redirectTo: '' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'order/chicken', component: ChickenComponent },
  { path: 'order/turkey', component: TurkeyComponent },
  { path: 'info/prices', component: PricesComponent },
  { path: 'info/yourGrowers', component: YourGrowersComponent },
  { path: 'beef', component: BeefComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ChickenComponent,
    TurkeyComponent,
    PricesComponent,
    YourGrowersComponent,
    BeefComponent,
    BlogComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
