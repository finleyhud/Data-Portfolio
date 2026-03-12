import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Download, 
} from 'lucide-react';

// Types for our project data
interface Project {
  id: string;
  title: string;
  category: 'Excel Lab' | 'Tableau';
  description: string;
  learningPoints: string[];
  imageUrl: string;
  downloadUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Basic Excel',
    category: 'Excel Lab',
    description: 'Developed spreadsheet emphasizing clean data entry, error handling, and maintainable design principles.',
    learningPoints: [
      'Data Validation & Controlled Inputs – Designed drop-down menus to restrict inputs and reduce downstream data errors.',
      'Named Ranges & Structured Referencing – Improved formula readability and scalability through defined range names.',
      'Error Handling (IFERROR) – Implemented user-friendly outputs to prevent raw calculation errors from surfacing in reports.'
    ],
    imageUrl: 'images/lab2.png',
    downloadUrl: 'downloads/lab2.xlsx',
  },
  {
    id: '2',
    title: 'Contextual Menus in Excel',
    category: 'Excel Lab',
    description: 'Built interactive spreadsheets where inputs dynamically controlled downstream options and visual indicators.',
    learningPoints: [
      'Dependent Drop-Down Menus (INDIRECT) – Created cascading selection logic to simulate relational data behavior inside Excel.',
      'Conditional Formatting – Applied rule-based formatting to visually categorize financial transactions.'
    ],
    imageUrl: 'images/lab31.png',
    downloadUrl: 'downloads/lab31.xlsx',
  },
  {
    id: '3',
    title: 'Pivot Tables',
    category: 'Excel Lab',
    description: 'Transformed raw datasets into structured summaries for rapid business insight.',
    learningPoints: [
      'Pivot Tables – Aggregated, filtered, and reorganized large datasets without complex formulas to enable multidimensional analysis.',
      'Pivot Charts – Connected visualizations to summarized datasets for interactive reporting.'
    ],
    imageUrl: 'images/pivot_tables.png',
    downloadUrl: 'downloads/pivot_tables.xlsx',
  },
  {
    id: '4',
    title: 'Data Cleaning',
    category: 'Excel Lab',
    description: 'Cleaned and structured a raw CSV dataset, preparing it for analysis.',
    learningPoints: [
      'Text Parsing (Text to Columns) – Standardized inconsistent field structures.',
      'String Normalization (SUBSTITUTE, TRIM) – Removed hidden characters and excess spacing to ensure reliable lookups and matching.',
      'Data Quality Control – Resolved formatting inconsistencies that would otherwise distort analysis results.'
    ],
    imageUrl: 'images/lab1.png',
    downloadUrl: 'downloads/lab1.xlsx',
  },
  {
    id: '5',
    title: 'Sumif and VLookups',
    category: 'Excel Lab',
    description: 'Built cost-estimating models requiring dynamic lookups across variable tables.',
    learningPoints: [
      'VLOOKUP – Designed flexible lookup systems capable of handling shifting row/column structures.',
      'SUMIF & Conditional Aggregation – Calculated totals based on defined categories.',
      'Structured Naming Conventions – Improved maintainability through defined table and lookup arrays.'
    ],
    imageUrl: 'images/lab3.png',
    downloadUrl: 'downloads/lab3.xlsx',
  },
  {
    id: '6',
    title: 'Lookup Tables in Cost Estimation System',
    category: 'Excel Lab',
    description: 'Converted printed pricing tables into an interactive estimation tool.',
    learningPoints: [
      'Digitized Reference Tables – Translated static pricing matrices into automated lookup-driven calculations.',
      'Input Validation & Error Checks – Applied logic tests to detect invalid user entries before calculations executed.'
    ],
    imageUrl: 'images/lab4.png',
    downloadUrl: 'downloads/lab4.xlsx',
  },
  {
    id: '7',
    title: 'Digital Marketing Analytics Model',
    category: 'Excel Lab',
    description: 'Built a performance model calculating key advertising metrics from campaign inputs.',
    learningPoints: [
      'Performance Metrics Modeling – Computed CPM, CPA, revenue, profit, and units per thousand impressions using CPC, CTR, conversion rate, and margin assumptions.'
    ],
    imageUrl: 'images/cpm.png',
    downloadUrl: 'downloads/cpm.xlsx',
  },
  {
    id: '8',
    title: 'Tableau Prep Data Cleaning & Joining Workflow',
    category: 'Tableau',
    description: 'Developed a Tableau Prep workflow to prepare and structure datasets.',
    learningPoints: [
      'Data Cleaning – Standardized field formats, corrected inconsistencies, and removed invalid records to ensure analytical accuracy.',
      'Data Joining – Combined multiple datasets using structured joins to create a unified, analysis-ready data source for visualization.'
    ],
    imageUrl: 'images/tableau_clean.png',
  },
  {
    id: '9',
    title: 'Tableau Analysis of San Mateo Airbnb Pricing',
    category: 'Tableau',
    description: 'Developed an interactive Tableau dashboard analyzing Airbnb pricing patterns across San Mateo County using geospatial visualization and parameter-driven controls.',
    learningPoints: [
      'Geospatial Mapping – Mapped listing locations to visualize geographic price distribution and identify neighborhood-level pricing clusters.',
      'Treemap for Comparative Analysis – Created a treemap to compare neighborhoods by pricing metrics, enabling rapid identification of high- and low-priced areas.',
      'Dynamic Parameters – Built user-controlled parameters to allow interactive filtering and ranking of neighborhoods based on selected metrics.'
    ],
    imageUrl: 'images/tableau_cluster_parameter.png',
  },
  {
    id: '10',
    title: 'Tableau Dashboard Global Indicators Analysis',
    category: 'Tableau',
    description: 'Developed an interactive Tableau dashboard analyzing global CO₂ emissions, population growth, and technology adoption across countries and regions.',
    learningPoints: [
      'Multi-Visualization Dashboard Design – Integrated bubble charts, bar charts, line graphs, and geospatial maps into a unified analytical view to support cross-metric comparison.',
      'Population Growth Trends – Built longitudinal line charts to compare population growth trajectories across continents.',
      'Geospatial Phone Usage Mapping – Created a choropleth map segmenting countries into usage tiers to illustrate disparities in technology adoption.'
    ],
    imageUrl: 'images/tableau_dashboard.png',
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-emerald-100">
      {/* Header / Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif italic text-xl tracking-tight">Finley Hudson</span>
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
                  src="https://finhudsonphoto.wordpress.com/wp-content/uploads/2026/03/27407.jpg" 
                  alt="Finley Hudson" 
                  className="w-full h-full object-cover"
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
              <h1 className="text-5xl md:text-8xl font-serif italic mb-8 leading-tight">
                Data <span className="text-emerald-700">Portfolio.</span>
              </h1>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed max-w-xl">
                My name is Finley Hudson, and I am a Graphic Communication student at Cal Poly.
                <br /><br />
                This data portfolio showcases the work I completed in my Data Management and Analytics course at Cal Poly, highlighting the projects, skills, and analytical techniques I developed throughout the class.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <a href="mailto:finleyhudson123@gmail.com" className="flex items-center space-x-3 px-8 py-4 bg-[#1A1A1A] text-white rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-200">
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
              <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Course Projects</h2>
              <p className="text-stone-500 max-w-md">A collection of work demonstrating technical proficiency in Excel and Tableau.</p>
            </div>
            <div className="mt-8 md:mt-0 flex space-x-6 text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">
              <span>Excel</span>
              <span>Tableau</span>
              <span>Analytics</span>
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
                        <span>Download</span>
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
          <span className="font-serif italic text-xl">Finley Hudson</span>
          <div className="flex space-x-12 text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
            <span>© 2026</span>
            <span>Cal Poly</span>
            <span>Graphic Communication</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
