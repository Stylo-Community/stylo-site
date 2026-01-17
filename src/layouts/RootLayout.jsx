import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

export default function RootLayout() {
  const { pathname } = useLocation();

  // Some pages have bespoke backgrounds from the original HTML.
  const pageBgClass = React.useMemo(() => {
    if (pathname.startsWith('/comunidade')) return 'community-bg';
    if (pathname.startsWith('/contato')) return 'terminal-bg';
    return 'mesh-gradient';
  }, [pathname]);

  return (
    <div
      className={`relative min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white selection:bg-primary selection:text-black ${pageBgClass}`}
    >
      {pathname.startsWith('/contato') ? <div className="scanline" /> : null}

      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
