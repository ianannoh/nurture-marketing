import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../core/navbar/navbar.component';
import {FooterComponent} from '../core/footer/footer.component';
import {ViewportScroller} from '@angular/common';
import {filter} from 'rxjs';
import {SeoService} from '../directives/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'nurture-marketing';

  constructor( private router: Router, private viewportScroller: ViewportScroller, private activatedRoute: ActivatedRoute, private seoService: SeoService, ) {}

  ngOnInit():void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
        let route = this.activatedRoute;
        while (route.firstChild) route = route.firstChild;
        route.data.subscribe(data => {
          if (data['title'] && data['description']) {
            this.seoService.updateMeta(data['title'], data['description'], data['keywords'], data['pageUrl']);
          }
        });
      });
  }
}
