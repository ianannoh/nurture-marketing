import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  protected showNav: boolean = false;
  protected openNav(): void {
    this.showNav = true;
  }
  protected closeNav(): void {
    this.showNav = false;
    this.closeSubLinks();
  }

  protected showSubLinks: boolean = false;
  protected openSubLinks(): void {
    this.showSubLinks = true;
  }
  protected closeSubLinks(): void {
    this.showSubLinks = false;
  }
}
