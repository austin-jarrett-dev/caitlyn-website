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
  infoTitle = 'info';
  beefTitle = 'beef';
  blogTitle = 'blog';
  contactTitle = 'contact';
}
