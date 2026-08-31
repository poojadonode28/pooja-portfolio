import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Braces,
  BriefcaseBusiness,
  Check,
  CodeXml,
  Database,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  ServerCog,
  Sparkles,
  X,
} from "lucide-react";
import { siGithub } from "simple-icons";
import BrandIcon from "./BrandIcon";
import { experience, profile, projects, skillGroups } from "./content";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
] as const;

const impactMetrics = [
  { value: "95%+", label: "test coverage" },
  { value: "50%", label: "faster data retrieval" },
  { value: "60%", label: "faster SQL processing" },
  { value: "9+", label: "production APIs shipped" },
] as const;

const expertiseIcons = [ServerCog, CodeXml, Check, Database] as const;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav-wrap" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Pooja Donode, home">
            <span className="wordmark-mark" aria-hidden="true">
              PD
            </span>
            <span>Pooja Donode</span>
          </a>

          <div className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a className="button button-small nav-cta" href={`mailto:${profile.email}`}>
            Let&apos;s talk
            <ArrowDownRight aria-hidden="true" size={17} />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>

          <div
            className={`mobile-nav ${isMenuOpen ? "mobile-nav-open" : ""}`}
            id="mobile-navigation"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`} onClick={closeMenu}>
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero section" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability">
                <span aria-hidden="true" />
                Software engineer · Bengaluru
              </div>
              <h1>
                Pooja Donode
                <span>builds software that holds up.</span>
              </h1>
              <p className="hero-summary">{profile.summary}</p>
              <div className="hero-actions">
                <a className="button" href="#work">
                  Explore my work
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a
                  className="button button-secondary"
                  href={`${import.meta.env.BASE_URL}pooja-donode-resume.pdf`}
                  download
                >
                  <Download aria-hidden="true" size={18} />
                  Download résumé
                </a>
              </div>
              <div className="social-row" aria-label="Professional profiles">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <ExternalLink aria-hidden="true" size={18} />
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <BrandIcon icon={siGithub} />
                  GitHub
                </a>
                <span>
                  <MapPin aria-hidden="true" size={18} />
                  {profile.location}
                </span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Engineering impact summary">
              <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
              <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
              <div className="code-window">
                <div className="code-window-bar">
                  <span />
                  <span />
                  <span />
                  <p>reliable-systems.java</p>
                </div>
                <div className="code-lines" aria-hidden="true">
                  <p>
                    <span className="code-keyword">public</span>{" "}
                    <span className="code-keyword">final</span> class Engineer {"{"}
                  </p>
                  <p className="code-indent">
                    String focus = <span className="code-string">&quot;impact&quot;</span>;
                  </p>
                  <p className="code-indent">
                    List&lt;String&gt; craft = List.of(
                  </p>
                  <p className="code-indent-two">
                    <span className="code-string">&quot;clean APIs&quot;</span>,
                  </p>
                  <p className="code-indent-two">
                    <span className="code-string">&quot;fast products&quot;</span>,
                  </p>
                  <p className="code-indent-two">
                    <span className="code-string">&quot;confident releases&quot;</span>
                  </p>
                  <p className="code-indent">);</p>
                  <p>{"}"}</p>
                </div>
                <div className="build-status">
                  <Check aria-hidden="true" size={16} />
                  Build successful
                  <span>95%+ covered</span>
                </div>
              </div>
              <div className="floating-card floating-card-top">
                <Braces aria-hidden="true" size={18} />
                Java · Spring Boot
              </div>
              <div className="floating-card floating-card-bottom">
                <Sparkles aria-hidden="true" size={18} />
                Backend × product
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section about-grid">
            <div>
              <p className="eyebrow">About</p>
              <h2>Engineering with ownership at every layer.</h2>
            </div>
            <div className="about-copy">
              <p>
                I&apos;m a software engineer who enjoys hard platform problems: event
                workflows, API design, performance tuning, data models, and the product
                interfaces that make complex systems usable.
              </p>
              <p>
                My work spans enterprise software at JFrog, mobility products at
                VidyutTech, automotive technology at Tekion, and large-scale data systems
                at Cognizant.
              </p>
              <div className="education-card">
                <BriefcaseBusiness aria-hidden="true" />
                <div>
                  <span>Education</span>
                  <strong>B.E. in Information Technology</strong>
                  <p>D.Y. Patil College of Engineering · 2017–2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics-section" aria-labelledby="impact-heading">
          <div className="section metric-wrap">
            <div className="metric-intro">
              <p className="eyebrow" id="impact-heading">
                Measurable impact
              </p>
              <ArrowRight aria-hidden="true" />
            </div>
            <div className="metrics-grid">
              {impactMetrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Systems designed for real-world load.</h2>
            </div>
            <p>
              Backend depth, thoughtful architecture, and performance gains that users can
              feel.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-${index + 1}`} key={project.title}>
                <div className="project-topline">
                  <span>0{index + 1}</span>
                  <ExternalLink aria-hidden="true" size={20} />
                </div>
                <div className="project-graphic" aria-hidden="true">
                  {index === 0 ? (
                    <div className="booking-graphic">
                      <div className="film-strip">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="ticket">
                        <span>SEAT</span>
                        <strong>A12</strong>
                      </div>
                    </div>
                  ) : (
                    <div className="commerce-graphic">
                      <div className="speed-ring">
                        <strong>15×</strong>
                        <span>faster</span>
                      </div>
                      <div className="cache-node cache-node-one" />
                      <div className="cache-node cache-node-two" />
                      <div className="cache-node cache-node-three" />
                    </div>
                  )}
                </div>
                <div className="project-copy">
                  <p>{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="outcome">
                    <ArrowRight aria-hidden="true" size={17} />
                    {project.outcome}
                  </div>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Experience</p>
                <h2>From data foundations to enterprise platforms.</h2>
              </div>
              <p>
                Four roles, one consistent thread: finding the bottleneck and making the
                system better.
              </p>
            </div>

            <div className="timeline">
              {experience.map((role, index) => (
                <article className="timeline-item" key={`${role.company}-${role.period}`}>
                  <div className="timeline-marker">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="timeline-meta">
                    <p>{role.period}</p>
                    <span>{role.location}</span>
                  </div>
                  <div className="timeline-content">
                    <p className="role-label">{role.role}</p>
                    <h3>{role.company}</h3>
                    <p className="role-summary">{role.summary}</p>
                    <ul className="highlight-list">
                      {role.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <ul className="tag-list" aria-label={`${role.company} technologies`}>
                      {role.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Expertise</p>
              <h2>Full-cycle engineering, without the handoffs.</h2>
            </div>
            <p>
              Comfortable moving from schemas and services to interfaces, tests, delivery,
              and production insight.
            </p>
          </div>
          <div className="expertise-grid">
            {skillGroups.map((group, index) => {
              const Icon = expertiseIcons[index];
              return (
                <article className="expertise-card" key={group.label}>
                  {Icon ? <Icon aria-hidden="true" /> : null}
                  <h3>{group.label}</h3>
                  <ul>
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Start a conversation</p>
              <h2>Building something that needs to be both fast and dependable?</h2>
              <p>
                I&apos;m open to thoughtful engineering conversations, product challenges,
                and opportunities to build systems with meaningful impact.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="button button-light"
                href={`mailto:${profile.email}`}
                aria-label="Email Pooja"
              >
                <Mail aria-hidden="true" size={19} />
                {profile.email}
              </a>
              <a
                className="text-link-light"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
                <ArrowDownRight aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section">
        <a className="wordmark" href="#top">
          <span className="wordmark-mark" aria-hidden="true">
            PD
          </span>
          <span>Pooja Donode</span>
        </a>
        <p>Designed and built with React · 2026</p>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <BrandIcon icon={siGithub} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
