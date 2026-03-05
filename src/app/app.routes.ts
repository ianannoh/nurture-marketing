import { Routes } from '@angular/router';
import {HomePageComponent} from '../features/home-page/home-page.component';
import {AboutPageComponent} from '../features/about-page/about-page.component';
import {ClientsPageComponent} from '../features/clients-page/clients-page.component';
import {ContactPageComponent} from '../features/contact-page/contact-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home | Nurture Marketing',
  },
  {
    path: 'About',
    component: AboutPageComponent,
    title: 'About | Nurture Marketing',
  },
  {
    path: 'clients',
    component: ClientsPageComponent,
    title: 'Clients | Nurture Marketing',
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    title: 'Contact | Nurture Marketing',
  }
];
