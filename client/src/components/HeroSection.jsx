import React, { useState } from 'react'

import { Link } from 'react-router-dom'



export default function HeroSection() {
  

  return (
    <div className="relative bg-primary-dark">
      {/* <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          className="absolute inset-0 -z-10 size-full object-cover"
        />
</div> */}
      {/* Hero Content */}
      <div className="relative isolate overflow-hidden pt-20">
        <img
          src="/assets/hero-flooring.jpg"
          alt="Commercial Flooring Project"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-primary-dark opacity-60 -z-10" />
        <div className="container mx-auto px-6 pb-32 pt-20 text-center text-white">
          <h1 className="text-5xl font-heading sm:text-7xl">
            Commercial Flooring Excellence
          </h1>
          <p className="mt-6 text-lg leading-relaxed">
            Delivering superior quality and service to general contractors for over 40 years.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Link
              to="/projects"
              className="btn-primary"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="btn-secondary"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
