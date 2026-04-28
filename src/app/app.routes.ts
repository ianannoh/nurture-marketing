import { Routes } from '@angular/router';
import {HomePageComponent} from '../features/home-page/home-page.component';
import {AboutPageComponent} from '../features/about-page/about-page.component';
import {ClientsPageComponent} from '../features/services-page/clients-page.component';
import {ContactPageComponent} from '../features/contact-page/contact-page.component';
import {NewslettersComponent} from '../features/newsletters/newsletters.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Home | Nurture Marketing',
    data: {
      title: 'Home | Nurture Marketing',
      description: 'We help businesses grow and help startups gain the visibility they need.',
      keywords: ["Nurture Marketing", "Strategic storytelling", "Data-driven marketing", "SEO strategy", "Content creation", "Paid advertisement ROI", "Global impact partnerships", "Africa Europe business connections", "Startup support programs", "Cultural awareness branding", "Strategic partnerships", "Business growth acceleration", "Brand visibility", "Market analysis", "Sustainable development marketing"],
      imageUrl: 'https://nurturemarketing.online/assets/nav/nurture_green_icon.svg',
      pageUrl: 'https://nurturemarketing.online/'
    },
  },
  {
    path: 'about',
    component: AboutPageComponent,
    title: 'About | Nurture Marketing',
    data: {
      title: 'About | Nurture Marketing',
      description: 'Nurture is driven by a long-term vision to become a trusted partner in visibility, positioning, and growth for businesses and innovators shaping the future.',
      keywords: ["Nurture Marketing", "Trusted marketing partner", "Business visibility", "Startup growth support", "Strategic storytelling", "Collaborative partnerships", "Africa global markets", "Inclusive economic development", "Sustainability initiatives", "Climate innovation", "Health-tech platforms", "Education technology solutions", "Innovation programs", "SDG aligned development", "Brand identity scaling"],
      imageUrl: 'https://nurturemarketing.online/assets/nav/nurture_green_icon.svg',
      pageUrl: 'https://nurturemarketing.online/about'
    },
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
    data: {
      title: 'Services | Nurture Marketing',
      description: 'Nurture Marketing delivers SEO, paid ads, content creation, social media, and consultation services to boost brand growth and online visibility.',
      keywords: ["Nurture Marketing", "Search Engine Optimization", "Paid Advertisement", "Content creation", "Social media management", "Videography Photography", "Email Marketing", "Business development consultation", "Digital marketing services", "Brand growth strategies", "Online visibility", "Marketing consultation", "Creative content solutions", "Performance marketing", "Client success results"],
      imageUrl: 'https://nurturemarketing.online/assets/nav/nurture_green_icon.svg',
      pageUrl: 'https://nurturemarketing.online/services'
    },
  },
  {
    path: 'get-in-touch',
    component: ContactPageComponent,
    title: 'Get In Touch | Nurture Marketing',
    data: {
      title: 'Get In Touch | Nurture Marketing',
      description: 'Get in touch with Nurture Marketing for expert SEO, ads, and content solutions to grow your brand and build lasting partnerships.',
      keywords: ["Nurture Marketing", "Contact Nurture Marketing", "Digital marketing consultation", "Business growth support", "SEO and paid ads inquiry", "Content creation services", "Partnership opportunities", "Client communication", "Marketing solutions Ghana", "Global business connections"],
      imageUrl: 'https://nurturemarketing.online/assets/nav/nurture_green_icon.svg',
      pageUrl: 'https://nurturemarketing.online/get-in-touch'
    },
  }
];
