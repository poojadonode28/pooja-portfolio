import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Braces,
  Check,
  CodeXml,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  ServerCog,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { siGithub, siLeetcode } from "simple-icons";
import BrandIcon, { linkedinIcon } from "./BrandIcon";
import { experience, profile, projects, skillGroups } from "./content";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
] as const;

const impactMetrics = [
  { value: "95%+", label: "test coverage" },
  { value: "50%", label: "faster data retrieval" },
  { value: "60%", label: "faster SQL processing" },
  { value: "70+", label: "production APIs shipped" },
] as const;

const expertiseIcons = [ServerCog, CodeXml, Check, Database] as const;

// Seat plan behind the PopcornTime card: "X" already booked, "S" the pair being
// picked, "." still free.
const seatRows = ["..XX....", ".XX..XX.", ".SS.....", "X......X"] as const;

const seatStatus = (seat: string) =>
  seat === "X" ? "taken" : seat === "S" ? "chosen" : "open";

const shopProducts = [
  { tone: "one", price: "₹799" },
  { tone: "two", price: "₹1,299" },
  { tone: "three", price: "₹499" },
  { tone: "four", price: "₹2,199" },
] as const;

const maskedPhone = "+91 96••• •••••";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen) {
      mobileNavigationRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    }
  }, [isMenuOpen]);

  const handleMobileNavigationKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      menuButtonRef.current?.focus();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const links = Array.from(
      mobileNavigationRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [],
    );
    const firstLink = links[0];
    const lastLink = links.at(-1);

    if (event.shiftKey && document.activeElement === firstLink) {
      event.preventDefault();
      lastLink?.focus();
    } else if (!event.shiftKey && document.activeElement === lastLink) {
      event.preventDefault();
      firstLink?.focus();
    }
  };

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

          <a className="button button-small nav-cta" href="#contact">
            Let&apos;s talk
            <ArrowDownRight aria-hidden="true" size={17} />
          </a>

          <button
            ref={menuButtonRef}
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
            ref={mobileNavigationRef}
            className={`mobile-nav ${isMenuOpen ? "mobile-nav-open" : ""}`}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            hidden={!isMenuOpen}
            onKeyDown={handleMobileNavigationKeyDown}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu}>
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
              <h1>Pooja Donode</h1>
              <p className="hero-summary">{profile.summary}</p>
              <div className="hero-actions">
                <a className="button" href="#experience">
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
                  <BrandIcon icon={linkedinIcon} />
                  LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <BrandIcon icon={siGithub} />
                  GitHub
                </a>
                <a href={profile.leetcode} target="_blank" rel="noreferrer">
                  <BrandIcon icon={siLeetcode} />
                  LeetCode
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
          <div className="section">
            <div className="section-heading section-heading-compact">
              <h2>About</h2>
            </div>
            <div className="about-copy">
              <p>
                I&apos;m a <strong>Software Engineer with 5+ years of experience</strong>,
                currently working at <strong>JFrog</strong>, building scalable backend
                systems and developer-focused platforms.
              </p>
              <p>
                I specialize in{" "}
                <strong>
                  Java, Spring Boot, APIs, distributed systems, and system design
                </strong>
                , with a focus on performance, reliability, and clean architecture.
              </p>
              <p>
                I enjoy solving complex engineering problems and turning them into{" "}
                <strong>simple, scalable, and intuitive product experiences</strong>.
              </p>
              <div className="education-card">
                <GraduationCap aria-hidden="true" />
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

        <section className="experience-section" id="experience">
          <div className="section">
            <div className="section-heading section-heading-compact">
              <h2>Experience</h2>
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
                    <h3>
                      <a
                        className="company-link"
                        href={role.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {role.company}
                      </a>
                    </h3>
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

        <section className="section projects-section" id="projects">
          <div className="section-heading section-heading-compact">
            <h2>Personal projects</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-${index + 1}`} key={project.title}>
                <div className="project-topline">
                  <span>0{index + 1}</span>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <ExternalLink aria-hidden="true" size={20} />
                    </a>
                  ) : (
                    <ExternalLink aria-hidden="true" size={20} />
                  )}
                </div>
                <div className="project-graphic" aria-hidden="true">
                  {index === 0 ? (
                    <div className="booking-graphic">
                      <div className="screen-arc" />
                      <p className="screen-label">Screen this way</p>
                      <div className="seat-map">
                        {seatRows.map((row, rowIndex) => (
                          <div className="seat-row" key={row}>
                            {[...row].map((seat, seatIndex) => (
                              <span
                                className={`seat seat-${seatStatus(seat)}`}
                                key={`${rowIndex}-${seatIndex}`}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                      <div className="ticket">
                        <span>SEAT</span>
                        <strong>A12</strong>
                      </div>
                    </div>
                  ) : (
                    <div className="commerce-graphic">
                      <div className="storefront">
                        <div className="shop-search">
                          <span />
                          <p>Search products</p>
                        </div>
                        <div className="product-shelf">
                          {shopProducts.map((product) => (
                            <div
                              className={`product-tile product-tile-${product.tone}`}
                              key={product.price}
                            >
                              <span />
                              <strong>{product.price}</strong>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="cart-chip">
                        <ShoppingBag aria-hidden="true" size={16} />
                        <strong>2</strong>
                        <span>in cart</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-copy">
                  <p>{project.eyebrow}</p>
                  <h3>
                    {project.url ? (
                      <a
                        className="company-link"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
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

        <section className="section expertise-section" id="expertise">
          <div className="section-heading section-heading-compact">
            <h2>Expertise</h2>
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
              {isPhoneVisible ? (
                <a
                  className="button button-light"
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  aria-label="Call Pooja"
                >
                  <Phone aria-hidden="true" size={19} />
                  {profile.phone}
                </a>
              ) : (
                <button
                  className="button button-light"
                  type="button"
                  onClick={() => setIsPhoneVisible(true)}
                  aria-label="Show phone number"
                >
                  <Phone aria-hidden="true" size={19} />
                  {maskedPhone}
                </button>
              )}
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
    </div>
  );
};

export default App;
