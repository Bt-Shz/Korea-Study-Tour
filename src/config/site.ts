import { trip } from '../data/trip';

export const site = {
  title: trip.title,
  shortTitle: `${trip.title} (CS)`,
  department: 'CityU CS Department',
  university: 'City University of Hong Kong',
  description:
    "A five-day academic immersion into Korea's innovation ecosystem, from world-class universities to Seoul's smart-city control center.",
} as const;

export const cityuLinks = {
  university: 'https://www.cityu.edu.hk',
  contact: 'https://www.cs.cityu.edu.hk/about-us/contact-us',
} as const;

export const cityuLogos = {
  verticalCmyk: 'https://template.cityu.edu.hk/template/v2/logo/CityU/CityU_Vertical_Logo_CMYK.svg',
  mini: 'https://template.cityu.edu.hk/template/v2/logo/CityU/CityU_Mini_Logo.svg',
  verticalReverse: 'https://template.cityu.edu.hk/template/v2/logo/CityU/CityU_Vertical_Logo_Reverse.svg',
} as const;

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Visit Schedule', href: '/visit-schedule' },
  { label: 'Visit Team', href: '/visit-team' },
  { label: 'Experiences', href: '/experiences' },
] as const;

export const footerLinks = [
  { label: 'Privacy Policy', href: 'https://www.cityu.edu.hk/web/privacy' },
  { label: 'Copyright', href: 'https://www.cityu.edu.hk/web/copyright' },
  { label: 'Disclaimer', href: 'https://www.cityu.edu.hk/web/disclaimer' },
  { label: 'Accessibility', href: 'https://www.cityu.edu.hk/web/accessibility' },
  { label: 'Contact Us', href: cityuLinks.contact },
] as const;
