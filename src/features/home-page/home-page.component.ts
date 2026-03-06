import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {LandingPageComponent} from '../../shared/landing-page/landing-page.component';

@Component({
  selector: 'app-home-page',
  imports: [
    LandingPageComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomePageComponent {

}
