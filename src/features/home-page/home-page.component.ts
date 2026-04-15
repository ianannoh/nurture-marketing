import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {LandingPageComponent} from '../../shared/landing-page/landing-page.component';
import {SharedButtonComponent} from '../../shared/shared-button/shared-button.component';

@Component({
  selector: 'app-home-page',
  imports: [
    LandingPageComponent,
    SharedButtonComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomePageComponent {

}
