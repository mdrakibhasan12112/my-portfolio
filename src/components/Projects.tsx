// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiExternalLink } from 'react-icons/fi';

// const projects = [
//   {
//     title: 'B-Tiles',
//     description:
//       'A specialized tile management and display platform built with Next.js.',
//     tags: ['Next.js', 'Tailwind', 'Responsive'],
//     image:
//       'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=800',
//     link: 'https://b13-assignment-08.vercel.app/',
//   },
//   {
//     title: 'Dragon News',
//     description:
//       'A comprehensive news portal featuring category-based filtering and dynamic content routing.',
//     tags: ['Next.js', 'API Integration'],
//     image:
//       'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800',
//     link: 'https://dragon-news-next-pink.vercel.app/',
//   },
//   {
//     title: 'Friendship Goals',
//     description:
//       'An interactive social bonding platform focused on relationship management.',
//     tags: ['React.js', 'Framer Motion'],
//     image:
//       'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800',
//     link: 'https://keen-keeper-friendship.netlify.app/',
//   },
//   {
//     title: 'Digitools',
//     description:
//       'A professional suite of digital utility tools designed to enhance productivity.',
//     tags: ['React.js', 'Material UI'],
//     image:
//       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
//     link: 'https://b-13-a6-digitools.netlify.app/',
//   },
//   {
//     title: 'Landing Page',
//     description:
//       'A high-conversion landing page implementation focusing on clean aesthetics.',
//     tags: ['JavaScript', 'CSS3'],
//     image:
//       'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=800',
//     link: 'https://tranquil-cendol-e716a6.netlify.app/',
//   },
//   {
//     title: 'Ecomars Website',
//     description:
//       'A visually stunning e-commerce landing page demonstrating advanced CSS layouts and modern UI/UX principles.',
//     tags: ['HTML5', 'CSS3', 'Responsive'],
//     image:
//       'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
//     link: 'https://guileless-kataifi-d324bc.netlify.app/',
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="py-24 bg-background" id="projects">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
//         <div className="text-center space-y-4 mb-16">
//           <h2 className="text-4xl md:text-5xl font-black text-on-surface uppercase tracking-tighter">
//             Featured <span className="text-primary">Projects</span>
//           </h2>
//           <div className="w-20 h-1 bg-primary mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, i) => (
//             <a
//               key={i}
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block group"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 className="bg-surface-container rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all shadow-2xl h-full"
//               >
//                 <div className="relative h-60 overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
//                     <FiExternalLink className="text-on-surface text-4xl" />
//                     <span className="text-on-surface font-bold text-xs uppercase tracking-widest">
//                       View Project
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-8 space-y-4">
//                   <div className="flex gap-2">
//                     {project.tags.map(tag => (
//                       <span
//                         key={tag}
//                         className="text-[10px] uppercase font-bold text-primary tracking-widest"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <h3 className="text-2xl font-bold text-on-surface">
//                     {project.title}
//                   </h3>
//                   <p className="text-on-surface-variant text-sm line-clamp-2">
//                     {project.description}
//                   </p>
//                 </div>
//               </motion.div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React from 'react';
import { ExternalLink, GitHub, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DriveFleet',
      subtitle: 'Premium Car Rental Platform',
      description:
        'A high-performance full-stack car rental platform featuring an intuitive fleet browser, dynamic listing systems, and a seamless car booking workflow.',
      techStack: [
        'Next.js',
        'Tailwind CSS',
        'React',
        'Node.js',
        'MongoDB',
        'Express.js',
        'Better-Auth',
      ],
      features: [
        'Dynamic Fleet Exploration with multi-category sorting.',
        'Custom dashboard for listing management and reservation tracking.',
        'Fully flexible architecture handling smooth interactive data grids.',
      ],
      liveLink: 'https://drive-fleet-car-mu.vercel.app/',
      githubLink: 'https://github.com/mdrakibhasan12112/Assignment-09',
      imageSrc:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'KinKeeper / Leafy Plan',
      subtitle: 'Family Memory & Asset Organizer',
      description:
        'A beautiful, premium digital ecosystem built for preserving secure family memories, digital legacies, and vital records with absolute accessibility.',
      techStack: [
        'React',
        'Tailwind CSS',
        'React Router',
        ' Recharts',
        'React Toastify',
        ' Context API ',
      ],
      features: [
        'Elegant, secure document vaulting and media memory galleries.',
        'Deep focus on responsive interfaces optimized precisely down to 576px screens.',
        'Clean UX architecture featuring fast fluid transitions.',
      ],
      liveLink: 'https://leafy-malabi-ab2bd1.netlify.app/',
      githubLink: 'https://github.com/mdrakibhasan12112/Assignment-07',
      imageSrc:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'AI DigiTools',
      subtitle: 'Next-Gen AI Product Directory',
      description:
        'A centralized platform highlighting state-of-the-art artificial intelligence models and digital utilities. Built for speed, exploration, and clean performance.',
      techStack: [
        'React',
        'Tailwind CSS',
        'Lucide Icons',
        'Context API',
        ' DaisyUI',
        'React Toastify',
      ],
      features: [
        'Interactive directory displaying advanced AI tool microservices.',
        'Instant multi-axis client-side search indexing and live filtering.',
        'Adaptive UI layers responding beautifully across light and dark theme matrices.',
      ],
      liveLink: 'https://ai-digi-tools.netlify.app/',
      githubLink: 'https://github.com/mdrakibhasan12112/B13-Assignment-06',
      imageSrc:
        'https://api.microlink.io?url=https%3A%2F%2Fai-digi-tools.netlify.app%2F&screenshot=true&embed=screenshot.url',
    },
  ];

  return (
    // FIX 1: bg-slate-50 bodle pure native dynamically adaptive 'bg-background' override
    <section className="py-20 px-4 max-w-7xl mx-auto bg-background transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center mb-16">
        {/* FIX 2: Text typography native 'text-on-surface' follow korbe */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface tracking-tight mb-4 font-space-grotesk">
          FEATURED PROJECTS
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      {/* Responsive Grid System */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div
            key={project.id}
            // FIX 3: Card background-ke pure component container setup logic 'bg-surface-container' kora holo
            className="group flex flex-col justify-between h-full bg-surface-container rounded-3xl border border-border/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 overflow-hidden"
          >
            {/* Thumbnail Image Container */}
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-background border-b border-border/40">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={project.imageSrc}
                  alt={`${project.title} Thumbnail`}
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute top-3 right-3 z-20">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-primary bg-background/80 border border-border/50 px-2.5 py-1 rounded-md shadow-sm backdrop-blur-sm">
                    LIVE DEMO
                  </span>
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors duration-200 tracking-wide font-space-grotesk">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-on-surface-variant mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Tech Pills (Contrast matches perfectly now) */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded bg-background text-on-surface-variant border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Main Description */}
                <p className="text-sm text-on-surface-variant/90 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 text-xs text-on-surface-variant"
                    >
                      <span className="text-primary mt-0.5 shrink-0">
                        <CheckCircle2 size={14} />
                      </span>
                      <span className="leading-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Control Actions */}
            <div className="p-6 pt-0 mt-4 border-t border-border/30 flex items-center gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase bg-primary hover:bg-primary-dark text-white py-2.5 px-4 rounded-xl shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>Launch App</span>
                <ExternalLink size={14} />
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase bg-background text-on-surface hover:bg-border/10 py-2.5 px-4 rounded-xl border border-border transition-all duration-200 active:scale-95"
              >
                {/* <GitHub size={14} /> */}
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;