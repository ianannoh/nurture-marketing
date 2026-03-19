import {Component, Input} from '@angular/core';
import {SharedButtonComponent} from '../shared-button/shared-button.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [
    SharedButtonComponent,
    NgClass
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  @Input() imgSrc: string = '';
  @Input() imgSrc1: string = '';
  @Input() imgSrc2: string = '';
  @Input() className: string = '';
}
