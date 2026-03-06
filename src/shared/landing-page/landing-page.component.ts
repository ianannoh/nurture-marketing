import {Component, Input} from '@angular/core';
import {SharedButtonComponent} from '../shared-button/shared-button.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    SharedButtonComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  @Input() imgSrc: string = '';
  @Input() className: string = '';
}
