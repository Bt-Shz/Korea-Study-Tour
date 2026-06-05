export const site = {
  title: 'Seoul Tech & Culture Tour 2026',
  department: 'CityU CS Department',
  university: 'City University of Hong Kong',
  description:
    "A five-day academic immersion into Korea's innovation ecosystem, from world-class universities to Seoul's smart-city control center.",
} as const;

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Visit Schedule', href: '/visit-schedule' },
  { label: 'Visit Team', href: '/visit-team' },
  { label: 'Student Takeaways', href: '/student-takeaways' },
] as const;
