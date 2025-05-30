import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Qualifications', to: '/qualifications' },
  { name: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-accent-dark shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-6">
        <Link to="/" className="text-white text-xl font-heading">
          Cavalier Flooring
        </Link>
        {/* Desktop Links */}
        <div className="hidden lg:flex lg:space-x-8">
          {links.map((l) => (
            <Link
              key={l.name}
              to={l.to}
              className="text-white hover:text-amber-400 font-medium"
            >
              {l.name}
            </Link>
          ))}
        </div>
        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setOpen(true)} className="text-white">
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <Dialog.Panel className="fixed inset-0 bg-accent-dark p-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-white text-xl font-heading">
              Cavalier Flooring
            </Link>
            <button onClick={() => setOpen(false)} className="text-white">
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {links.map((l) => (
              <Link
                key={l.name}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block text-white hover:text-amber-400 font-medium"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
