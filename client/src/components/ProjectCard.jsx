import React from 'react';

export default function ProjectCard({ title, location, image, description }) {
  return (
    <div className="card max-w-md mx-auto">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-2xl font-heading text-primary mb-2">{title}</h3>
        <p className="text-sm text-neutral-dark mb-4">{location}</p>
        <p className="text-base text-neutral-dark line-clamp-3">{description}</p>
      </div>
    </div>
  );
}
