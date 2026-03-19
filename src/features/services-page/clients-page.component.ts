import {AfterViewInit, Component, ElementRef, NO_ERRORS_SCHEMA, ViewChild} from '@angular/core';
import {LandingPageComponent} from '../../shared/landing-page/landing-page.component';

interface IService {
  id: number;
  header: string;
  description: string;
  points: any[]
}
@Component({
  selector: 'app-services-page',
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
      description: 'At Nurture Marketing, we use Search Engine Optimization (SEO) to help businesses become visible where customers begin their journey. Over 68% of online experiences begin with a search engine, organic search drives more than 53% of all website traffic, and 75% of users never move past the first page of results. Nurture Marketing positions your brand to appear at the exact moment potential customers are searching, turning search visibility into sustainable traffic, credibility, and long-term business growth.',
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
      description: 'At Nurture Marketing, we use Paid Advertising to help businesses reach the right audience at the right time with precision and speed. Paid ads allow brands to appear instantly in front of potential customers across multiple platforms, ensuring visibility exactly when people are ready to take action. Nurture Marketing transforms advertising budgets into strategic growth engines, helping businesses generate leads, increase brand visibility, and convert attention into measurable results.',
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
      description: 'Content isn’t just words or graphics. It’s how your brand speaks, connects, and converts. At Nurture Marketing, we create content that actually moves people, not just fills feeds. From social posts to brand storytelling and educational guides, every piece is crafted to resonate with your audience and build trust.',
      points: [
        {id: 1, point: 'Social media graphics + captions'},
        {id: 2, point: 'Short-form videos (Reels, TikTok, Shorts)'},
        {id: 3, point: 'Carousels and storytelling posts'},
      ]
    },
    {
      id: 4,
      header: 'Social media accounts management ',
      description: 'Your social media isn’t just a profile, it’s a stage for your brand to shine, connect, and grow. We manage your accounts with a strategy that balances engagement, consistency, and creativity, making sure every post tells your story and reaches the right people. From content planning and posting to audience engagement and analytics, we handle it all, so your brand stays active, relevant, and memorable across every platform.',
      points: [
        {id: 1, point: 'Content scheduling and publishing'},
        {id: 2, point: 'Profile optimization'},
        {id: 3, point: 'Monthly analytics monitoring'},
      ]
    },
    {
      id: 5,
      header: 'Videography/Photography',
      description: 'Your visuals are more than just images, they are the first impression your audience gets of your brand. With professional videography and photography, we capture stories, moments, and messages that resonate and stick. High-quality visuals increase engagement by over 80% on social platforms and make your brand instantly more memorable. From product shoots and brand storytelling videos to event coverage, we handle the entire process, ensuring every frame reflects your brand’s personality and communicates its value.',
      points: [
        {id: 1, point: 'Brand storytelling videos'},
        {id: 2, point: 'Product/service showcases'},
      ]
    },
    {
      id: 6,
      header: 'Email Marketing',
      description: 'Email isn’t old-school. It is one of the most powerful ways to reach your audience directly. With targeted campaigns, personalized messaging, and smart automation, email marketing drives results that last. On average, businesses see an ROI of $36 for every $1 spent, and over 80% of marketers say email is their most effective channel for customer retention. From newsletters and promotional campaigns to automated sequences, we design emails that grab attention, nurture leads, and convert readers into loyal customers.',
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
      description: 'Business growth doesn’t happen by chance. It is planned, measured, and executed strategically. Through our Business Development Consultation, we help organizations identify opportunities, streamline operations, and design strategies that turn potential into performance. Research shows that companies leveraging professional marketing and business consultants grow 2.5× faster and are 3× more likely to increase profitability compared to those without expert guidance.',
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
