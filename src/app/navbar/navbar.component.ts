import { createPopper } from '@popperjs/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  brandText = "Caitlyn's/Wyatt's Chickens";

  homepageTitle = 'homepage';
  orderTitle = 'order';
  chickenTitle = 'order chicken';
  turkeyTitle = 'order turkey'
  infoTitle = 'info';
  pricesTitle = 'prices';
  yourGrowersTitle = 'your growers';
  beefTitle = 'beef';
  blogTitle = 'blog';
  contactTitle = 'contact';
}
