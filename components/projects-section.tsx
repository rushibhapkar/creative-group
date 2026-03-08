'use client';

import { useState } from 'react';
import { MapPin, Calendar, Ruler } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/app/data/projectsData';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'renovation', label: 'Renovation' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
            Our Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Featured Projects
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of completed and ongoing projects that showcase our commitment to excellence.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-auto bg-zinc-900 border border-zinc-800">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className="text-sm md:text-base py-3 text-gray-300 data-[state=active]:bg-orange-500 data-[state=active]:text-black"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4">
                  <Badge
                    className={
                      project.status === 'completed'
                        ? 'bg-green-600'
                        : 'bg-orange-500 text-black'
                    }
                  >
                    {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                  </Badge>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="h-4 w-4 text-orange-500 mr-2" />
                    {project.location}
                  </div>

                  <div className="flex items-center text-sm text-gray-300">
                    <Ruler className="h-4 w-4 text-orange-500 mr-2" />
                    {project.area}
                  </div>

                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar className="h-4 w-4 text-orange-500 mr-2" />
                    {project.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Want to see more of our work?
          </p>

          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center bg-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Request Full Portfolio
          </button>
        </div>

      </div>
    </section>
  );
}