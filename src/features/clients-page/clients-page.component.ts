import {AfterViewInit, Component, ElementRef, NO_ERRORS_SCHEMA, ViewChild} from '@angular/core';
import {LandingPageComponent} from '../../shared/landing-page/landing-page.component';

interface IService {
  id: number;
  header: string;
  description: string;
  points: any[]
}
@Component({
  selector: 'app-clients-page',
  imports: [
    LandingPageComponent
  ],
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.css',
  schemas: [NO_ERRORS_SCHEMA]
})
export class ClientsPageComponent implements AfterViewInit {
  protected services: IService[] = [
    {
      id: 1,
      header: 'Search Engine Optimization ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus nam optio quo suscipit tenetur veritatis? Alias cupiditate dolorem, doloribus eos, facilis fuga fugiat officia omnis porro quia ullam, voluptate?',
      points: [
        {id: 1, point: 'Keyword research'},
        {id: 2, point: 'On-page optimization'},
        {id: 3, point: 'Technical SEO'},
        {id: 4, point: 'Basic backlink building'},
        {id: 5, point: 'Website performance improvements'},
      ]
    },
    {
      id: 2,
      header: 'Paid Advertisement:',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus nam optio quo suscipit tenetur veritatis? Alias cupiditate dolorem, doloribus eos, facilis fuga fugiat officia omnis porro quia ullam, voluptate?',
      points: [
        {id: 1, point: 'Audience targeting'},
        {id: 2, point: 'Ad creative optimization'},
        {id: 3, point: 'Basic performance tracking'},
        {id: 4, point: 'Conversion monitoring'},
      ]
    },
    {
      id: 3,
      header: 'Content creation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus nam optio quo suscipit tenetur veritatis? Alias cupiditate dolorem, doloribus eos, facilis fuga fugiat officia omnis porro quia ullam, voluptate?Content creation ',
      points: [
        {id: 1, point: 'Social media graphics + captions'},
        {id: 2, point: 'Short-form videos (Reels, TikTok, Shorts)'},
        {id: 3, point: 'Carousels and storytelling posts'},
      ]
    },
    {
      id: 4,
      header: 'Social media accounts management ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus nam optio quo suscipit tenetur veritatis? Alias cupiditate dolorem, doloribus eos, facilis fuga fugiat officia omnis porro quia ullam, voluptate?',
      points: [
        {id: 1, point: 'Content scheduling and publishing'},
        {id: 2, point: 'Profile optimization'},
        {id: 3, point: 'Monthly analytics monitoring'},
      ]
    },
    {
      id: 5,
      header: 'Videography/Photography',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus nam optio quo suscipit tenetur veritatis? Alias cupiditate dolorem, doloribus eos, facilis fuga fugiat officia omnis porro quia ullam, voluptate?',
      points: [
        {id: 1, point: 'Brand storytelling videos'},
        {id: 2, point: 'Product/service showcases'},
      ]
    },
    {
      id: 6,
      header: 'Email Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus nam optio quo suscipit tenetur veritatis? Alias cupiditate dolorem, doloribus eos, facilis fuga fugiat officia omnis porro quia ullam, voluptate?',
      points: [
        {id: 1, point: 'Newsletter campaigns'},
        {id: 2, point: 'Automations'},
        {id: 3, point: 'Product launch emails'},
        {id: 4, point: 'Retention campaigns'},
      ]
    },
    {
      id: 7,
      header: 'Business development consultation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut doloribus nam optio quo suscipit tenetur veritatis? Alias cupiditate dolorem, doloribus eos, facilis fuga fugiat officia omnis porro quia ullam, voluptate?',
      points: [
        {id: 1, point: 'Newsletter campaigns'},
        {id: 2, point: 'Automations'},
        {id: 3, point: 'Product launch emails'},
        {id: 4, point: 'Retention campaigns'},
      ]
    },
  ];

  protected showDropdown: boolean = false;
  protected selectedId!: number;

  protected openDropdown(id: number): void {
    this.selectedId = id;
    this.showDropdown = true;
  }

  protected closeDropdown(): void {
    this.showDropdown = false;
    this.selectedId = 0;
  }

  protected setDropdown(id: number): void {
    if (this.selectedId !== id) {
      this.openDropdown(id)
    } else {
      this.closeDropdown();
    }
  }


//   Mask gradient removal
  @ViewChild('faq', { static: false }) containerRef!: ElementRef<HTMLDivElement>;
  ngAfterViewInit() {
    if (this.containerRef?.nativeElement) {
      this.checkScrollPosition();
    }
  }

  // Handler for the scroll event
  onScroll(event: Event): void {
    this.checkScrollPosition();
  }

  // Logic to check the scroll position and toggle the class
  private checkScrollPosition(): void {

    const faq = this.containerRef?.nativeElement;
    if (!faq) return;

    // Calculate if the user is at the bottom (+1 buffer for rounding)
    const isAtBottom: boolean = faq.scrollHeight - faq.scrollTop <= faq.clientHeight + 1;

    // Adding class to turn off mask gradients
    if (isAtBottom) {
      faq.classList.add('scrolled-to-bottom');
    } else {
      faq.classList.remove('scrolled-to-bottom');
    }
  }
}
