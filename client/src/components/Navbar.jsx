// src/components/Navbar.jsx
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Qualifications', to: '/qualifications' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-slate-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 text-white">
        <Link to="/" className="text-xl font-bold">Cavalier Flooring</Link>
        <div className="hidden lg:flex lg:space-x-8">
          {links.map(l => <Link key={l.name} to={l.to} className="hover:text-amber-400">{l.name}</Link>)}
        </div>
        <div className="lg:hidden">
          <button onClick={() => setOpen(true)}><Bars3Icon className="h-6 w-6"/></button>
        </div>
        {/* Mobile menu */}
        <Dialog open={open} onClose={setOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-0 bg-slate-800 p-6">
            <button onClick={() => setOpen(false)}><XMarkIcon className="h-6 w-6"/></button>
            <div className="mt-6 space-y-4">
              {links.map(l => (
                <Link key={l.name} to={l.to} onClick={() => setOpen(false)} className="block">{l.name}</Link>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}
