import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Layout,
  Search,
  Wrench,
  Headphones,
  LifeBuoy,
  Mail,
  Phone,
  Link as LinkIcon,
  ExternalLink,
  
  Award,
  X,
  ChevronRight,
  Menu,
  
  MapPin,
  Circle,
} from "lucide-react";
import floatingGraphic from "@/assets/floating-graphic.png";
import logoMark from "@/assets/logo-mark.png";
import logoMarkLight from "@/assets/logo-mark-light.png";

const services = [
  { icon: Code2, title: "Web Development", desc: "Custom, responsive websites built with modern frameworks and clean code." },
  { icon: Layout, title: "WordPress Development", desc: "Elementor builds, plugin integration, and tailored WordPress solutions." },
  { icon: Search, title: "SEO Optimization", desc: "Audits, keyword research, and on-page SEO to grow organic traffic." },
  { icon: Wrench, title: "Website Updates & Maintenance", desc: "Ongoing updates, backups, and performance tuning to keep sites healthy." },
  { icon: Headphones, title: "Virtual Assistance", desc: "Reliable remote support for admin, content, and daily business tasks." },
  { icon: LifeBuoy, title: "Technical Support", desc: "Troubleshooting, fixes, and clear guidance whenever you need help." },
];

const experience = [
  { role: "SEO Specialist", org: "Dropship", date: "March 2026 – Present", desc: "Performs SEO audits, keyword research, and on-page optimization to improve website rankings and organic traffic using GA4, Google Search Console, and SEO auditing platforms." },
  { role: "WordPress Developer", org: "Pagecents", date: "August 2025 – March 2026", desc: "Built custom websites using Elementor, integrated plugins, optimized functionality, and performed SEO to enhance performance and user experience." },
  { role: "Fullstack Developer Intern", org: "Miniclean", date: "May 2025 – June 2025", desc: "Built web applications using Laravel, Vue, and Tailwind to create industry-standard websites. Also used WordPress tools such as Elementor and Bakery." },
  { role: "Social Media Manager", org: "Tasty Media", date: "January 2024 – October 2024", desc: "Posted trendy and relevant content and worked with the team to review content effectiveness." },
  { role: "Executive Secretary", org: "Workedge", date: "August 2022 – April 2023", desc: "Assisted the CEO with daily tasks and administrative work." },
];

const skillGroups = [
  { title: "Programming & Web Development", items: ["HTML", "CSS", "Python", "Java", "PHP", "Laravel"] },
  { title: "WordPress & Website Tools", items: ["WordPress", "Elementor", "Plugin Integration", "Website Updates", "Website Maintenance"] },
  { title: "SEO & Marketing", items: ["SEO Audits", "Keyword Research", "On-page SEO", "GA4", "Google Search Console", "SEO Auditing Tools"] },
  { title: "Tools & Version Control", items: ["Git", "GitHub"] },
  { title: "Professional Skills", items: ["Problem Solving", "Attention to Detail", "Time Management", "Curiosity", "Continuous Learning", "Remote Work Reliability"] },
];

const certifications = [
  { title: "Information Technology Specialist in Databases", issuer: "Certiport", year: "2025" },
  { title: "Information Technology Specialist in HTML and CSS", issuer: "Certiport", year: "2025" },
  { title: "Digital Marketing and Virtual Assistance", issuer: "Virtualahan", year: "2023" },
];

type SubProject = { title: string; desc: string; tools: string[] };
type ProjectCategory = {
  title: string;
  desc: string;
  tools: string[];
  gradient: string;
  accent: string;
  items: SubProject[];
};

const projectCategories: ProjectCategory[] = [
  {
    title: "WordPress Website Development",
    desc: "Custom WordPress builds with Elementor, tailored themes, and integrated plugins.",
    tools: ["WordPress", "Elementor", "PHP"],
    gradient: "linear-gradient(135deg,#0b1a3a 0%,#1E3A8A 55%,#3B82F6 100%)",
    accent: "WP",
    items: [
      { title: "Business Landing Page", desc: "A conversion-focused landing page built with Elementor Pro and custom sections.", tools: ["WordPress", "Elementor Pro"] },
      { title: "Service Company Site", desc: "Multi-page WordPress site with booking form, blog, and on-brand design.", tools: ["WordPress", "Elementor", "ACF"] },
      { title: "Portfolio Blog", desc: "Editorial-style blog with custom post types and clean typography.", tools: ["WordPress", "PHP"] },
    ],
  },
  {
    title: "SEO Optimization Projects",
    desc: "On-page audits, keyword strategy, and technical SEO to lift organic traffic.",
    tools: ["GA4", "Search Console", "Ahrefs"],
    gradient: "linear-gradient(135deg,#052e2b 0%,#0f766e 50%,#14b8a6 100%)",
    accent: "SEO",
    items: [
      { title: "Technical SEO Audit", desc: "Full site crawl, Core Web Vitals fixes, and schema implementation.", tools: ["GA4", "Search Console", "Screaming Frog"] },
      { title: "Keyword & Content Strategy", desc: "Keyword mapping and content briefs aligned to search intent.", tools: ["Ahrefs", "SEMrush"] },
      { title: "On-page Optimization", desc: "Meta, headings, internal links, and image SEO across key pages.", tools: ["GA4", "Search Console"] },
    ],
  },
  {
    title: "Laravel Web Applications",
    desc: "Full-stack web apps using Laravel, Vue, and Tailwind for real business workflows.",
    tools: ["Laravel", "Vue", "Tailwind"],
    gradient: "linear-gradient(135deg,#3a0b12 0%,#7f1d1d 50%,#ef4444 100%)",
    accent: "LV",
    items: [
      { title: "Internal Ops Dashboard", desc: "Task and inventory dashboard with role-based access.", tools: ["Laravel", "Vue", "MySQL"] },
      { title: "Client Portal", desc: "Authenticated portal for file sharing and status updates.", tools: ["Laravel", "Tailwind"] },
    ],
  },
  {
    title: "Website Maintenance & Technical Support",
    desc: "Ongoing updates, performance tuning, and reliable technical assistance.",
    tools: ["WordPress", "Git", "DevTools"],
    gradient: "linear-gradient(135deg,#1a1030 0%,#4c1d95 50%,#8b5cf6 100%)",
    accent: "MX",
    items: [
      { title: "Monthly Care Plans", desc: "Backups, plugin/theme updates, and uptime monitoring.", tools: ["WordPress", "UpdraftPlus"] },
      { title: "Performance Tuning", desc: "Caching, image optimization, and Core Web Vitals improvements.", tools: ["WP Rocket", "DevTools"] },
      { title: "Bug Fixes & Support", desc: "Ad-hoc troubleshooting and technical support for clients.", tools: ["Git", "DevTools"] },
    ],
  },
];

const hobbies = [
  "Reading tech blogs",
  "Learning new frameworks",
  "Photography",
  "Coffee brewing",
  "Hiking",
  "Playing chess",
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

// Motion helpers — smooth, gentle reveal used site-wide.
const EASE = [0.22, 1, 0.36, 1] as const;

const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "ol" | "ul" | "aside";
}) {
  const MotionTag = motion[Tag] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: revealVariants.hidden,
        show: {
          ...revealVariants.show,
          transition: { ...revealVariants.show.transition, delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

function StaggerGroup({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ol" | "ul";
}) {
  const MotionTag = motion[Tag] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerParent}
    >
      {children}
    </MotionTag>
  );
}

export default function Portfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openCategory, setOpenCategory] = useState<ProjectCategory | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Web Developer",
    "SEO Specialist",
    "WordPress Expert",
    "Virtual Assistant",
  ];

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    const el = document.querySelector(href);
    if (!el) return;
    e.preventDefault();
    setMobileOpen(false);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", href);
  };

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 24);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openCategory || mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openCategory, mobileOpen]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header
        className={[
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled || mobileOpen
            ? "border-b border-border bg-background/80 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#top" onClick={(e) => handleNavClick(e, "#top")} className="flex shrink-0 items-center transition-opacity hover:opacity-85">
            <img
              src={scrolled || mobileOpen ? logoMark : logoMarkLight}
              alt="Rafael Mercado"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-10 w-auto sm:h-11"
            />
          </a>
          <ul className={`hidden gap-8 text-sm md:flex ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleNavClick(e, l.href)} className={`transition-colors ${scrolled ? "hover:text-foreground" : "hover:text-white"}`}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={[
              "hidden shrink-0 rounded-md px-4 py-2 text-xs font-medium transition-all md:inline-block",
              scrolled
                ? "bg-primary text-primary-foreground hover:opacity-90"
                : "border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/20",
            ].join(" ")}
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`inline-flex shrink-0 items-center justify-center rounded-md p-2 transition-colors md:hidden ${
              scrolled || mobileOpen
                ? "text-foreground hover:bg-secondary"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="overflow-hidden border-t border-border bg-background md:hidden"
            >
              <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleNavClick(e, l.href)}
                      className="block rounded-md px-3 py-2.5 text-foreground transition-colors hover:bg-secondary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="block rounded-md bg-primary px-3 py-2.5 text-center text-xs font-medium text-primary-foreground"
                  >
                    Get in touch
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section
        id="top"
        ref={heroRef}
        className="relative overflow-hidden text-white"
        style={{
          background:
            "radial-gradient(1200px 600px at 85% -10%, rgba(59,130,246,0.35), transparent 60%), radial-gradient(900px 500px at 10% 10%, rgba(30,58,138,0.55), transparent 55%), linear-gradient(180deg, #0b1a3a 0%, #12245a 55%, #1E3A8A 100%)",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at 50% 40%, black 40%, transparent 75%)",
          }}
          aria-hidden="true"
        />
        {/* Aurora blobs */}
        <div
          className="pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full opacity-60 blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.55), transparent 65%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 right-0 h-[380px] w-[380px] rounded-full opacity-50 blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(147,197,253,0.45), transparent 65%)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-32 sm:px-6 md:pt-40 md:pb-56">
          <motion.div
            initial="hidden"
            animate="show"
            variants={staggerParent}
            className="max-w-3xl"
          >

            <motion.h1
              variants={staggerItem}
              className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl"
            >
              Hi, I'm{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,#ffffff 0%,#bfdbfe 40%,#60a5fa 70%,#ffffff 100%)",
                }}
              >
                Rafael Mercado
              </span>
            </motion.h1>

            <motion.div
              variants={staggerItem}
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-white/85 sm:text-xl md:text-2xl"
            >
              <span className="text-white/60">I'm a</span>
              <span className="relative inline-flex h-8 items-center overflow-hidden sm:h-9 md:h-10">
                <span className="invisible whitespace-nowrap font-semibold" aria-hidden="true">
                  Virtual Assistant
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute inset-0 flex items-center whitespace-nowrap font-semibold text-white"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="h-6 w-[2px] bg-blue-300/80 sm:h-7 md:h-8" aria-hidden="true" />
            </motion.div>

            <motion.p variants={staggerItem} className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
              I help businesses build, manage, and optimize websites through web development, WordPress support, SEO, and reliable remote digital assistance.
            </motion.p>

            <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")} className="group inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-primary shadow-lg shadow-blue-950/30 transition-opacity hover:opacity-90">
                View My Work
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="rounded-md border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/20">Contact Me</a>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-white/70 sm:text-sm">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-300" /> Davao City, PH</span>
              <span className="inline-flex items-center gap-2"><Circle className="h-2 w-2 fill-blue-300 text-blue-300" /> 4+ years experience</span>
              <span className="inline-flex items-center gap-2"><Circle className="h-2 w-2 fill-blue-300 text-blue-300" /> Remote-first</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade into next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-secondary" aria-hidden="true" />

        {/* Floating draggable graphic — overlaps hero + about */}
        <motion.div
          drag
          dragConstraints={{ top: -30, bottom: 30, left: -40, right: 40 }}
          dragElastic={0.25}
          whileTap={{ cursor: "grabbing" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="pointer-events-auto absolute right-4 z-30 hidden cursor-grab select-none md:block"
          style={{ bottom: "-80px", width: 260, height: 260 }}
          aria-hidden="true"
        >
          <img
            src={floatingGraphic}
            alt=""
            width={260}
            height={260}
            draggable={false}
            className="h-full w-full drop-shadow-2xl"
          />
        </motion.div>

        {/* Mobile floating graphic — smaller, positioned to not obstruct */}
        <motion.div
          drag
          dragConstraints={{ top: -20, bottom: 20, left: -20, right: 20 }}
          dragElastic={0.25}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
          className="absolute right-2 z-30 block cursor-grab select-none md:hidden"
          style={{ bottom: "-40px", width: 120, height: 120 }}
          aria-hidden="true"
        >
          <img src={floatingGraphic} alt="" width={120} height={120} draggable={false} className="h-full w-full drop-shadow-xl" />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="relative bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-32">
          <Reveal><SectionHeader eyebrow="About" title="A little about me" /></Reveal>
          <StaggerGroup className="mt-10 grid gap-10 md:grid-cols-3">
            {/* Portrait placeholder */}
            <motion.div variants={staggerItem} className="md:col-span-1">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border shadow-sm"
                style={{
                  background:
                    "radial-gradient(120% 90% at 20% 15%, rgba(59,130,246,0.35), transparent 60%), linear-gradient(160deg,#12245a 0%,#1E3A8A 55%,#3B82F6 100%)",
                }}
                aria-label="Portrait placeholder"
              >
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-semibold tracking-tight text-white/90">RM</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-black/20 px-4 py-3 text-xs text-white/80 backdrop-blur">
                  <span>Rafael Mercado</span>
                  <span>Davao City, PH</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="md:col-span-2">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Rafael Mercado is a results-driven Virtual Assistant and Web Developer experienced in supporting businesses with website development, WordPress management, SEO optimization, website updates, and technical support. He is detail-oriented, reliable, and committed to delivering quality results in remote work environments.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {/* Hobbies */}
                <div className="rounded-lg border border-border bg-background p-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-primary">Hobbies & Interests</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {hobbies.map((h) => (
                      <li key={h} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-foreground">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          </StaggerGroup>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-32">
          <Reveal><SectionHeader eyebrow="Services" title="What I can help with" /></Reveal>
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <motion.div variants={staggerItem} key={s.title} className="rounded-lg border border-border bg-background p-6 transition-colors hover:border-primary/40">
                <s.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-32">
          <Reveal><SectionHeader eyebrow="Experience" title="Where I've worked" /></Reveal>
          <StaggerGroup as="ol" className="mt-12 space-y-6 border-l border-border pl-6 md:pl-8">
            {experience.map((e) => (
              <motion.li variants={staggerItem} key={e.role + e.org} className="relative">
                <span className="absolute -left-[33px] top-2 h-2.5 w-2.5 rounded-full bg-primary md:-left-[37px]" />
                <div className="rounded-lg border border-border bg-background p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold">{e.role} <span className="text-muted-foreground">— {e.org}</span></h3>
                    <span className="text-xs text-muted-foreground">{e.date}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
                </div>
              </motion.li>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-32">
          <Reveal><SectionHeader eyebrow="Skills" title="Tools & abilities" /></Reveal>
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <motion.div variants={staggerItem} key={g.title} className="rounded-lg border border-border bg-background p-6">
                <h3 className="text-sm font-semibold text-primary">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-md border border-border bg-secondary px-3 py-1 text-xs text-foreground">{s}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-32">
          <Reveal><SectionHeader eyebrow="Certifications" title="Credentials" /></Reveal>
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {certifications.map((c) => (
              <motion.div variants={staggerItem} key={c.title} className="rounded-lg border border-border bg-background p-6">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-sm font-semibold leading-snug">{c.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{c.issuer} · {c.year}</p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>


      {/* Projects */}
      <section id="projects" className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-32">
          <Reveal><SectionHeader eyebrow="Projects" title="Selected work" /></Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
              Click a category to zoom in and explore the individual projects inside.
            </p>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {projectCategories.map((cat) => {
              const isOpen = openCategory?.title === cat.title;
              return (
                <motion.button
                  variants={staggerItem}
                  layoutId={`cat-card-${cat.title}`}
                  key={cat.title}
                  type="button"
                  onClick={() => setOpenCategory(cat)}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background text-left shadow-sm transition-all hover:border-primary/40 hover:shadow-xl"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  style={{ visibility: isOpen ? "hidden" : "visible" }}
                >
                  <motion.div
                    layoutId={`cat-cover-${cat.title}`}
                    className="relative h-44 w-full overflow-hidden"
                    style={{ background: cat.gradient }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.14]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-4 left-5 text-4xl font-semibold tracking-tight text-white/90">
                      {cat.accent}
                    </span>
                    <span className="absolute right-4 top-4 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur">
                      {cat.items.length} project{cat.items.length === 1 ? "" : "s"}
                    </span>
                  </motion.div>
                  <div className="flex flex-1 flex-col p-6">
                    <motion.h3 layoutId={`cat-title-${cat.title}`} className="text-base font-semibold">
                      {cat.title}
                    </motion.h3>
                    <motion.p layoutId={`cat-desc-${cat.title}`} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {cat.desc}
                    </motion.p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cat.tools.map((t) => (
                        <span key={t} className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-foreground">{t}</span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-primary">
                      Explore
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </StaggerGroup>
        </div>

        {/* Category zoom — shared-element expand */}
        <AnimatePresence>
          {openCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="fixed inset-0 z-50 overflow-y-auto bg-foreground/50 backdrop-blur-md"
              onClick={() => setOpenCategory(null)}
            >
              <div className="flex min-h-full items-start justify-center p-0 md:p-8">
                <motion.div
                  layoutId={`cat-card-${openCategory.title}`}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-5xl overflow-hidden rounded-none border border-border bg-background shadow-2xl md:rounded-3xl"
                  transition={{ type: "spring", stiffness: 220, damping: 28 }}
                >
                  <motion.div
                    layoutId={`cat-cover-${openCategory.title}`}
                    className="relative h-64 w-full overflow-hidden md:h-80"
                    style={{ background: openCategory.gradient }}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.14]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
                        backgroundSize: "42px 42px",
                      }}
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-6 left-6 text-6xl font-semibold tracking-tight text-white/90 md:text-7xl">
                      {openCategory.accent}
                    </span>
                    <button
                      type="button"
                      onClick={() => setOpenCategory(null)}
                      aria-label="Close"
                      className="absolute right-4 top-4 rounded-full border border-white/25 bg-white/10 p-2 text-white backdrop-blur transition-colors hover:bg-white/20"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </motion.div>

                  <div className="p-6 md:p-10">
                    <p className="text-xs font-medium uppercase tracking-widest text-primary">Category</p>
                    <motion.h3
                      layoutId={`cat-title-${openCategory.title}`}
                      className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl"
                    >
                      {openCategory.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`cat-desc-${openCategory.title}`}
                      className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
                    >
                      {openCategory.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.5, ease: EASE }}
                      className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                      {openCategory.items.map((p, i) => (
                        <motion.div
                          key={p.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.06, duration: 0.5, ease: EASE }}
                          className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-shadow hover:shadow-lg"
                        >
                          <div
                            className="relative aspect-[16/10] w-full overflow-hidden"
                            style={{ background: openCategory.gradient }}
                          >
                            <div
                              className="absolute inset-0 opacity-[0.16] transition-transform duration-500 group-hover:scale-110"
                              style={{
                                backgroundImage:
                                  "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
                                backgroundSize: "24px 24px",
                              }}
                              aria-hidden="true"
                            />
                            <span className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-widest text-white/80">
                              Project {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div className="flex flex-1 flex-col p-5">
                            <h4 className="text-sm font-semibold">{p.title}</h4>
                            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {p.tools.map((t) => (
                                <span key={t} className="rounded border border-border bg-secondary px-2 py-0.5 text-[10px] text-foreground">{t}</span>
                              ))}
                            </div>
                            <button type="button" className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary transition-opacity hover:opacity-80">
                              View Project <ExternalLink className="h-3 w-3" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-32">
          <Reveal><SectionHeader eyebrow="Contact" title="Let's work together" /></Reveal>
          <StaggerGroup className="mt-12 grid gap-10 md:grid-cols-2">
            <motion.div variants={staggerItem} className="space-y-4 text-sm">
              <a href="mailto:rafaellmrcs@gmail.com" className="flex items-center gap-3 text-foreground transition-colors hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> rafaellmrcs@gmail.com
              </a>
              <a href="tel:09567539076" className="flex items-center gap-3 text-foreground transition-colors hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> 0956 753 9076
              </a>
              <a href="https://www.linkedin.com/in/rafael-mercado-6512b320b/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground transition-colors hover:text-primary">
                <LinkIcon className="h-4 w-4 text-primary" /> linkedin.com/in/rafael-mercado
              </a>
              <p className="pt-4 text-sm leading-relaxed text-muted-foreground">
                Available for remote web development, WordPress, SEO, and virtual assistance engagements.
              </p>
            </motion.div>

            <motion.form variants={staggerItem} onSubmit={onSubmit} className="space-y-4 rounded-lg border border-border bg-background p-6">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium">Name</label>
                <input id="name" name="name" required className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium">Message</label>
                <textarea id="message" name="message" required rows={5} className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              </div>
              <button type="submit" className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Send Message
              </button>
              {sent && <p className="text-center text-xs text-primary">Thanks — your message has been sent.</p>}
            </motion.form>
          </StaggerGroup>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-6">
          {/* Social bar — Shopify-theme style */}
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/rafael-mercado-6512b320b/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a
                href="https://github.com/rafaelmercado"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 22.096 24 17.609 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a
                href="mailto:rafaellmrcs@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <div className="h-px w-12 bg-border" />
            <div className="flex flex-col items-center gap-3 text-xs leading-relaxed text-muted-foreground">
              <p className="max-w-xs text-balance sm:max-w-md">
                Rafael Mercado — Virtual Assistant, Web Developer, WordPress Developer, and SEO Specialist.
              </p>
              <p>© {new Date().getFullYear()} Rafael Mercado</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl md:text-4xl">{title}</h2>
    </div>
  );
}