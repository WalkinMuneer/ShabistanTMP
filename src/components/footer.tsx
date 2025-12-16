import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import Logo from '@/components/logo';
import { Separator } from './ui/separator';

const footerLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/#specials', label: 'Specials' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#visit-us', label: 'Contact' },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

const socialLinks = [
  { icon: <Instagram />, href: 'https://www.instagram.com/shabistan_the_meeting_point/', label: 'Instagram' },
  { icon: <WhatsAppIcon />, href: 'https://wa.me/919700460343', label: 'WhatsApp' },
];



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card w-full border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Logo width={720} height={180} className="h-24 w-auto" />
            <p className="mt-2 text-sm text-foreground/70">Shabistan – The Meeting Point.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/70 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and Ordering */}
          <div>
            <h3 className="font-semibold uppercase tracking-wider text-foreground">Connect With Us</h3>
            <div className="mt-4 flex justify-center gap-4 md:justify-start">
              {socialLinks.map(social => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-foreground/70 transition-colors hover:text-primary">
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-foreground/70">
              You can also order on <span className="font-semibold">Swiggy</span>.
            </p>
          </div>
        </div>
        
        <Separator className="my-8" />

        <div className="text-center text-sm text-foreground/60">
          <p>© {currentYear} Shabistan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
