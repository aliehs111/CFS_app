// src/pages/Projects.jsx
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-heading text-primary mb-6">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Downtown Mall Renovation"
          location="Denver, CO"
          image="/assets/mall-renovation.jpg"
          description="Comprehensive flooring replacement in a high-traffic shopping center, featuring custom tile patterns and durable materials for longevity."
        />
        <ProjectCard
          title="Corporate Office Park"
          location="Boulder, CO"
          image="/assets/office-park.jpg"
          description="Installed premium carpet tiles and hardwood flooring across multiple office suites, enhancing aesthetic appeal and acoustics."
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

