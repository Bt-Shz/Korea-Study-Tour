export const site = {
  title: 'Seoul Tech & Culture Tour 2026',
  department: 'CityU CS Department',
  university: 'City University of Hong Kong',
  description:
    "A four-day academic immersion into Korea's innovation ecosystem, from world-class universities to Seoul's smart-city control center.",
} as const;

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Visit Schedule', href: '/visit-schedule' },
  { label: 'Student Takeaways', href: '/student-takeaways' },
] as const;
