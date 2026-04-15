import {Component, NO_ERRORS_SCHEMA} from '@angular/core';
import {LandingPageComponent} from '../../shared/landing-page/landing-page.component';

@Component({
  selector: 'app-contact-page',
  imports: [
    LandingPageComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class ContactPageComponent {

}
