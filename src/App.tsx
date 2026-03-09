import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Download, 
  ExternalLink, 
  FileSpreadsheet, 
  BarChart3, 
  Database, 
  Layers,
  User,
  ArrowRight
} from 'lucide-react';

// Types for our project data
interface Project {
  id: string;
  title: string;
  category: 'Excel Lab' | 'Tableau' | 'Database/ERD' | 'Analysis';
  description: string;
  learningPoints: string[];
  imageUrl: string;
  downloadUrl?: string;
  externalUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Advanced PivotTable Analysis',
    category: 'Excel Lab',
    description: 'A deep dive into sales performance metrics using dynamic data modeling.',
    learningPoints: [
      'Mastered the use of calculated fields to derive profit margins from raw revenue data.',
      'Implemented slicers and timelines to create an interactive dashboard experience.',
      'Utilized conditional formatting to highlight top-performing regions automatically.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '#', // Placeholder for ZIP
  },
  {
    id: '2',
    title: 'Supply Chain Delay Visualization',
    category: 'Tableau',
    description: 'Interactive visualization of global shipping routes and delay patterns.',
    learningPoints: [
      'Developed geographic maps to visualize shipping bottlenecks across continents.',
      'Created dual-axis charts to compare shipping costs against delivery times.',
      'Integrated dashboard actions to allow deep-dives into specific carrier performance.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800',
    externalUrl: 'https://public.tableau.com', // Placeholder
  },
  {
    id: '3',
    title: 'E-commerce Database Schema',
    category: 'Database/ERD',
    description: 'Conceptual and logical database design for a multi-vendor marketplace.',
    learningPoints: [
      'Designed a normalized schema to ensure data integrity across vendor and customer tables.',
      'Defined primary and foreign key relationships to support complex order tracking.',
      'Created a visual ERD that clearly communicates the data flow to stakeholders.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '#',
  },
  {
    id: '4',
    title: 'CPM/SEM Project Optimization',
    category: 'Analysis',
    description: 'Critical Path Method analysis for a large-scale construction project.',
    learningPoints: [
      'Identified the critical path to determine the minimum project duration.',
      'Calculated slack time for non-critical activities to optimize resource allocation.',
      'Performed sensitivity analysis to assess the impact of potential delays.'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    downloadUrl: '#',
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-emerald-100">
      {/* Header / Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif italic text-xl tracking-tight">Data Portfolio</span>
          <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest opacity-60">
            <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
            <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section id="about" className="mb-48">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden bg-stone-200 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                Available for opportunities
              </div>
              <h1 className="text-5xl md:text-8xl font-serif italic mb-8 leading-tight">
                Turning raw data into <span className="text-emerald-700">meaningful stories.</span>
              </h1>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-xl">
                I am a data analyst focused on uncovering insights through meticulous analysis and elegant visualization. 
                This portfolio showcases my work in Excel modeling, database design, and interactive storytelling.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <a href="mailto:finleyjhudson@gmail.com" className="flex items-center space-x-3 px-8 py-4 bg-[#1A1A1A] text-white rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-200">
                  <Mail size={18} />
                  <span className="font-medium">Get in touch</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-black/5 pb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Selected Projects</h2>
              <p className="text-stone-500 max-w-md">A collection of labs and visualizations demonstrating technical proficiency and analytical depth.</p>
            </div>
            <div className="mt-8 md:mt-0 flex space-x-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">
              <span>Labs</span>
              <span>Tableau</span>
              <span>ERD</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone-100 mb-10 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm border border-white/20">
                    {project.category}
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="text-3xl font-serif italic mb-4 group-hover:text-emerald-700 transition-colors">{project.title}</h3>
                  <p className="text-stone-500 mb-8 leading-relaxed text-lg">{project.description}</p>
                  
                  <div className="space-y-4 mb-10">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700 opacity-80">Learning Points</h4>
                    <ul className="space-y-3">
                      {project.learningPoints.map((point, i) => (
                        <li key={i} className="text-sm text-stone-600 flex items-start space-x-4">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="leading-relaxed italic">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center space-x-8">
                    {project.downloadUrl && (
                      <a 
                        href={project.downloadUrl} 
                        className="group/btn flex items-center space-x-3 text-xs font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover/btn:bg-emerald-50 transition-colors">
                          <Download size={16} />
                        </div>
                        <span>Download ZIP</span>
                      </a>
                    )}
                    {project.externalUrl && (
                      <a 
                        href={project.externalUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center space-x-3 text-xs font-bold uppercase tracking-widest hover:text-emerald-700 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover/btn:bg-emerald-50 transition-colors">
                          <ExternalLink size={16} />
                        </div>
                        <span>Tableau Public</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <span className="font-serif italic text-xl">Data Portfolio</span>
          <div className="flex space-x-12 text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
            <span>© 2026</span>
            <span>Built with Precision</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
