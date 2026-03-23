import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-shared-button',
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './shared-button.component.html',
  styleUrl: './shared-button.component.css'
})
export class SharedButtonComponent {
  @Input() route: string = '';
  @Input() className: string = '';

}
