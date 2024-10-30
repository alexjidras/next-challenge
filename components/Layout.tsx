import React from 'react';

import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  pagePathnames?: { [locale: string]: string };
  children?: React.ReactNode;
}

export const Layout = ({ children, pagePathnames }: LayoutProps) => {
  return (
    <div className="container mx-auto">
      <Navbar pagePathnames={pagePathnames} />
      <div className="flex flex-start">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
};
