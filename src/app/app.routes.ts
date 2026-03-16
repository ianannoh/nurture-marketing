import { Routes } from '@angular/router';
import {HomePageComponent} from '../features/home-page/home-page.component';
import {AboutPageComponent} from '../features/about-page/about-page.component';
import {ClientsPageComponent} from '../features/clients-page/clients-page.component';
import {ContactPageComponent} from '../features/contact-page/contact-page.component';
import {NewslettersComponent} from '../features/newsletters/newsletters.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home | Nurture Marketing',
  },
  {
    path: 'about',
    component: AboutPageComponent,
    title: 'About | Nurture Marketing',
  },
  {
    path: 'newsletters',
    component: NewslettersComponent,
    title: 'Newsletters | Nurture Marketing',
  },
  {
    path: 'services',
    component: ClientsPageComponent,
    title: 'Services | Nurture Marketing',
  },
  {
    path: 'get-in-touch',
    component: ContactPageComponent,
    title: 'Get In Touch | Nurture Marketing',
  }
];
