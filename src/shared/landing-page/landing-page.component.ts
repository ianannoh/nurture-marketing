import {Component, Input} from '@angular/core';
import {SharedButtonComponent} from '../shared-button/shared-button.component';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    SharedButtonComponent,
    NgClass,
    RouterLink
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  @Input() imgSrc: string = '';
  @Input() imgSrc1: string = '';
  @Input() imgSrc2: string = '';
  @Input() className: string = '';
  @Input() route: string = '';
}
