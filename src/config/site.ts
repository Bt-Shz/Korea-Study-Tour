export const site = {
  title: 'Korea Visit 2026 (CS)',
  department: 'Department of Computer Science',
  university: 'City University of Hong Kong',
  description:
    'Study tour highlights organized by the Department of Computer Science at City University of Hong Kong.',
} as const;

export const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Visit Schedule', href: '/schedule' },
  { label: 'Experiences', href: '/experiences' },
  { label: 'The Visit Team', href: '/team' },
] as const;
