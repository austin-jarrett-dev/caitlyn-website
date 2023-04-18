import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  brandText = "Caitlyn's/Wyatt's Chickens";

  homepageTitle = "homepage";
  aboutTitle = "about";
  contactTitle = "contact";

}
