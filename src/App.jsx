import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  ExternalLink,
  Mail,
  FileDown,
  Sparkles,
  Layers,
  GraduationCap,
  Award,
  Send,
  Menu,
  X,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Database,
  Cpu,
  Boxes,
  Workflow
} from 'lucide-react';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const personalInfo = {
    name: 'Malyala Mounika',
    headline: 'Software Developer | AI & Full-Stack Enthusiast',
    location: 'Guntur, Andhra Pradesh, India',
    email: 'malyalamounika051@gmail.com',
    github: 'https://github.com/malyalamounika051-bit',
    linkedin: 'https://www.linkedin.com/in/malyala-mounika-100736372/',
    bio: 'Second-year B.Tech Computer Science student specializing in Artificial Intelligence. Passionate about problem solving with C++, developing modern full-stack web applications, and building AI-assisted solutions with clean architectures.',
  };

  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <Terminal size={20} />,
      skills: ['C++ (Preferred)', 'Python', 'JavaScript', 'SQL']
    },
    {
      category: 'Frontend Development',
      icon: <Layers size={20} />,
      skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI']
    },
    {
      category: 'AI, LLMs & APIs',
      icon: <Cpu size={20} />,
      skills: ['LangChain', 'Gemini API', 'Prompt Engineering', 'REST APIs']
    },
    {
      category: 'Backend & Databases',
      icon: <Database size={20} />,
      skills: ['Firebase', 'MongoDB', 'RESTful Services', 'Node.js Basics']
    },
    {
      category: 'Developer Tools & Deployment',
      icon: <Workflow size={20} />,
      skills: ['Git', 'GitHub', 'Vercel', 'Hugging Face Spaces', 'Gradio']
    }
  ];

  const projects = [
    {
      id: 'nexus-career-os',
      name: 'Nexus Career OS / Pathfinder One',
      status: 'Live',
      problem: 'Helping students bridge the gap between academic learning and industry job readiness.',
      description: 'An AI-powered career guidance platform delivering automated resume analysis, personalized career roadmaps, skill-gap analysis, and interactive interview preparation.',
      contribution: 'Built responsive frontend interface, integrated Gemini API and LangChain pipelines for dynamic recommendations, and connected Firebase services.',
      techStack: ['Firebase', 'Gemini API', 'LangChain', 'Vercel'],
      github: 'https://github.com/malyalamounika051-bit/nexsus.career.os',
      liveDemo: 'https://frontend-alpha-one-pe8l8ucgpb.vercel.app/'
    },
    {
      id: 'cogni-path',
      name: 'CogniPath',
      status: 'Live',
      problem: 'Empowering neurodivergent learners with personalized cognitive learning modes and accessible task breakdown.',
      description: 'An accessible cognitive learning and task navigation platform featuring intelligent focus cards, practice bridges, concept decoders, and structured task breakdown.',
      contribution: 'Developed full-stack architecture with accessibility contexts, interactive dashboard features, authentication, and MongoDB/Firebase backend integrations.',
      techStack: ['Tailwind CSS', 'Firebase', 'MongoDB', 'Node.js', 'Vercel'],
      github: 'https://github.com/malyalamounika051-bit',
      liveDemo: 'https://cognipath-indol.vercel.app/'
    },
    {
      id: 'supplyguard-ai',
      name: 'SupplyGuard AI',
      status: 'Hackathon Project',
      problem: 'Real-time detection and mitigation of supply chain disruptions.',
      description: 'A hackathon project delivering AI-assisted supply-chain risk analysis, supplier health tracking, disruption alerts, and automated contingency recommendations.',
      contribution: 'Collaborated on dashboard views, prompt architectures, and structured API risk analysis workflows using AI-assisted tooling.',
      techStack: ['Python', 'Gemini API', 'Data Analytics', 'Risk Models'],
      github: 'https://github.com/malyalamounika051-bit',
      liveDemo: null
    },
    {
      id: 'ai-notes-generator',
      name: 'AI Notes Generator',
      status: 'Live',
      problem: 'Converting dense, unstructured topic inputs into structured academic revision notes.',
      description: 'A study assistant application that converts user-provided topics into well-formatted, hierarchical notes using Gemini API and LangChain.',
      contribution: 'Implemented the prompt generation logic and built an interactive Gradio interface deployed to Hugging Face Spaces.',
      techStack: ['Python', 'LangChain', 'Gemini API', 'Gradio', 'Hugging Face'],
      github: 'https://github.com/malyalamounika051-bit/AI-notesGenerator',
      liveDemo: 'https://malyalamounika0-ai-notesgenerator.hf.space/'
    },
    {
      id: 'llm-chatbot',
      name: 'AI Chatbot with Gemini',
      status: 'Live',
      problem: 'Contextual conversational interaction with fast multi-turn responses.',
      description: 'An interactive chatbot designed to provide context-aware responses with streaming-style conversational output using Gemini API.',
      contribution: 'Developed the LLM orchestration pipeline with LangChain and created a clean chat UI with Gradio.',
      techStack: ['Python', 'LangChain', 'Gemini API', 'Gradio', 'Hugging Face'],
      github: 'https://github.com/malyalamounika051-bit/LLM-ChatBot',
      liveDemo: 'https://malyalamounika0-llm-chatbot.hf.space/'
    }
  ];

  const educationList = [
    {
      degree: 'B.Tech in Computer Science (Artificial Intelligence)',
      institution: 'Chalapathi Institute of Engineering and Technologies',
      timeline: '2025 – 2029',
      grade: 'CGPA: 9.27 / 10'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'NRI Junior College',
      timeline: '2023 – 2025',
      grade: 'Score: 97.1%'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Vijnana Vihara English Medium High School',
      timeline: '2022 – 2023',
      grade: 'Score: 96.3%'
    }
  ];

  const achievements = [
    {
      title: 'Makers Conclave Finalist',
      badge: 'Hackathon & Innovation',
      description: 'Finalist at the Makers Conclave AI-driven innovation event, recognized for innovative prototype design and problem-solving capability.'
    },
    {
      title: 'Student of the Year Award',
      badge: 'Leadership & Academics',
      description: 'Honored with the Student of the Year title in recognition of outstanding academic performance, discipline, and student leadership.'
    },
    {
      title: 'Inter-Collegiate Sports Championship',
      badge: 'Athletics & Teamwork',
      description: 'Won throwball championship titles across inter-collegiate and school levels, demonstrating teamwork, strategy, and resilience.'
    }
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Subtle ambient lighting blobs */}
      <div className="bg-ambient" aria-hidden="true">
        <div className="ambient-blob-1"></div>
        <div className="ambient-blob-2"></div>
        <div className="ambient-blob-3"></div>
      </div>

      {/* Navigation Bar */}
      <header className="nav-header">
        <div className="container nav-content">
          <a href="#" className="brand-logo" aria-label="Malyala Mounika Home">
            <span className="brand-badge">MM</span>
            <span>Mounika<span className="gradient-text">.dev</span></span>
          </a>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>
                  Education
                </a>
              </li>
              <li>
                <a href="#achievements" onClick={(e) => { e.preventDefault(); scrollToSection('achievements'); }}>
                  Achievements
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  download="Malyala_Mounika_Resume.pdf"
                  className="nav-cta"
                  title="Download Verified Resume PDF"
                >
                  <FileDown size={14} /> Resume
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-pill">
                <span className="status-dot"></span>
                <span>Open for SDE & AI Internships</span>
              </div>

              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              <h2 className="hero-subtitle">
                {personalInfo.headline}
              </h2>

              <p className="hero-bio">
                {personalInfo.bio}
              </p>

              <div className="hero-actions">
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                  className="btn-primary"
                >
                  Explore Projects <ArrowRight size={18} />
                </a>

                <a
                  href="/resume.pdf"
                  download="Malyala_Mounika_Resume.pdf"
                  className="btn-secondary"
                  title="Download verified resume PDF"
                >
                  <FileDown size={18} /> Download Resume
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={20} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="social-link"
                  aria-label="Email Me"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="section" id="about">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Background</span>
              <h2 className="section-title">About Me</h2>
              <p className="section-desc">
                Building a strong foundation in core computer science, software development, and AI engineering.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <p className="about-text">
                  I am a second-year B.Tech student in Computer Science (Artificial Intelligence) at Chalapathi Institute of Engineering and Technologies, Guntur. I maintain a <strong>9.27 CGPA</strong> with consistent academic discipline.
                </p>
                <p className="about-text">
                  My programming foundation is built with <strong>C++</strong> for object-oriented programming and data structures, complemented by <strong>Python</strong> for AI pipelines and <strong>JavaScript/React</strong> for user interfaces.
                </p>
                <p className="about-text">
                  I actively participate in hackathons, prototype AI-driven web apps using tools like LangChain and Google's Gemini API, and utilize modern AI-assisted engineering tools to build high-quality solutions honestly and efficiently.
                </p>

                <div className="about-highlights">
                  <div className="highlight-item">
                    <CheckCircle2 size={20} className="highlight-icon" />
                    <div>
                      <div className="highlight-title">Problem Solving</div>
                      <div className="highlight-sub">Core C++ & DSA logic</div>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle2 size={20} className="highlight-icon" />
                    <div>
                      <div className="highlight-title">Full-Stack Prototyping</div>
                      <div className="highlight-sub">React, Firebase & REST</div>
                    </div>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle2 size={20} className="highlight-icon" />
                    <div>
                      <div className="highlight-title">LLM Integration</div>
                      <div className="highlight-sub">LangChain & Gemini API</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Box */}
              <div className="about-card" id="education">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.4rem' }}>
                  <GraduationCap size={24} color="#818cf8" />
                  <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Education</h3>
                </div>

                <div className="education-timeline">
                  {educationList.map((edu, idx) => (
                    <div key={idx} className="edu-item">
                      <div className="edu-year">{edu.timeline}</div>
                      <h4 className="edu-degree">{edu.degree}</h4>
                      <div className="edu-institution">{edu.institution}</div>
                      <div className="edu-grade">{edu.grade}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="section" id="skills">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Expertise</span>
              <h2 className="section-title">Technical Skills</h2>
              <p className="section-desc">
                Verified tools, languages, and frameworks used in my coursework and projects.
              </p>
            </div>

            <div className="skills-grid">
              {skillsData.map((cat, idx) => (
                <div key={idx} className="skill-category-card">
                  <div className="category-header">
                    <div className="category-icon-wrapper">
                      {cat.icon}
                    </div>
                    <h3 className="category-name">{cat.category}</h3>
                  </div>

                  <div className="skill-pills">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="section" id="projects">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Portfolio</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-desc">
                Hands-on applications demonstrating full-stack engineering, API integration, and hackathon prototypes.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div>
                    <div className="project-top">
                      <span
                        className={`project-status ${
                          project.status === 'Live' ? 'status-live' : 'status-hackathon'
                        }`}
                      >
                        ● {project.status}
                      </span>
                    </div>

                    <h3 className="project-name">{project.name}</h3>
                    <div className="project-problem">Problem: {project.problem}</div>
                    <p className="project-desc">{project.description}</p>

                    <div className="project-contribution">
                      <strong>Contribution:</strong> {project.contribution}
                    </div>

                    <div className="project-techs">
                      {project.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-primary"
                      >
                        <ExternalLink size={15} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn project-btn-secondary"
                      >
                        <GithubIcon size={15} /> Code Repo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section" id="achievements">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Recognition</span>
              <h2 className="section-title">Achievements & Milestones</h2>
              <p className="section-desc">
                Milestones from hackathons, academic excellence, and extracurricular leadership.
              </p>
            </div>

            <div className="achievements-grid">
              {achievements.map((item, idx) => (
                <div key={idx} className="achievement-card">
                  <div className="achievement-icon">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="achievement-title">{item.title}</h3>
                    <p className="achievement-desc">{item.description}</p>
                    <span className="achievement-badge">{item.badge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact">
          <div className="container">
            <div className="contact-container">
              <h2 className="contact-title">Let's Connect</h2>
              <p className="contact-text">
                I am actively seeking SDE and AI internship opportunities where I can apply my problem solving and development skills to impactful, real-world products.
              </p>

              <div className="contact-cards">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-pill"
                  title="Send email"
                >
                  <Mail size={18} color="#818cf8" />
                  <span>{personalInfo.email}</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-pill"
                  title="Connect on LinkedIn"
                >
                  <LinkedinIcon size={18} color="#38bdf8" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-pill"
                  title="Check GitHub Repositories"
                >
                  <GithubIcon size={18} color="#c084fc" />
                  <span>GitHub Profile</span>
                </a>
              </div>

              <div className="contact-location">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-text">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <ul className="footer-nav">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
