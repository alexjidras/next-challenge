import Image from 'next/image';

import { LanguageSwitch } from './LanguageSwitch';

interface NavbarProps {
  pagePathnames?: { [locale: string]: string };
}

export const Navbar = ({ pagePathnames }: NavbarProps) => (
  <nav className="flex items-center px-6 h-[60px] border-b border-slate-900/10 ">
    <Image
      src="/next.svg"
      alt="Next.js Logo"
      width={100}
      height={15}
      priority
    />
    <LanguageSwitch pagePathnames={pagePathnames} />
  </nav>
);
