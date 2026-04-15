import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const fragment = this.router.parseUrl(this.router.url).fragment;

      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);

          if (el) {
            const navbar = document.querySelector('nav');
            const offset = navbar?.offsetHeight || 80;

            const y = el.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
              top: y,
              behavior: 'smooth'
            });
          }

          const urlWithoutFragment = this.router.url.split('#')[0];
          this.location.replaceState(urlWithoutFragment);

        }, 100);
      }
    });
  }

  protected date: Date = new Date();
  protected currentYear: number = new Date().getFullYear();
}
