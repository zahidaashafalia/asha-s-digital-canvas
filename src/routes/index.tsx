import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import {
  ArrowDownRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Check, Code2,
  Database, ExternalLink, Github, GraduationCap, Instagram, Layers3, Linkedin,
  Mail, Menu, MessageCircle, MonitorSmartphone, Music2, Palette, Search,
  Sparkles, Sun, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileAsset from "@/assets/asha-profile.png.asset.json";

const navItems = ["Home", "About", "Skills", "Education", "Projects", "Experience", "Contact"];

const skills = [
  { mark: "Fg", name: "Figma", title: "Web & Interface Design", description: "Membuat desain dashboard, landing page, dan berbagai antarmuka website." },
  { mark: "Ca", name: "Canva", title: "Graphic Design & Visual Content", description: "Membuat kebutuhan desain grafis dan konten visual." },
  { mark: "H5", name: "HTML", title: "Website Structure", description: "Membangun struktur website yang rapi dan semantik." },
  { mark: "C3", name: "CSS", title: "Website Styling", description: "Membuat tampilan dan desain website yang responsif." },
  { mark: "JS", name: "JavaScript", title: "Web Interactivity", description: "Membuat interaksi dasar yang hidup pada website." },
  { mark: "PHP", name: "PHP", title: "Web Development", description: "Digunakan dalam pengembangan website dan aplikasi berbasis web." },
  { mark: "<>_", name: "Visual Studio Code", title: "Code Editor", description: "Editor utama untuk proses pengembangan website." },
  { mark: "GH", name: "GitHub", title: "Project & Version Management", description: "Menyimpan, mencatat versi, dan mengelola project." },
];

const learned = ["Laravel", "Flutter", "Android Studio", "Java", "Arduino", "Internet of Things", "MySQL", "MongoDB", "Postman", "Flowchart", "ERD"];

const projects = [
  {
    id: "01", name: "Jadwal Pelajaran Dinamis", role: "Web Developer", tech: ["HTML"],
    description: "Project individu untuk membuat jadwal pelajaran yang dapat ditampilkan secara dinamis.",
    features: ["Tampilan jadwal terstruktur", "Konten dinamis", "Antarmuka sederhana dan mudah dipahami"],
    kind: "schedule",
  },
  {
    id: "02", name: "Texcer Hot", role: "Web Developer & Design Support", tech: ["PHP"],
    description: "Website kelompok berbasis PHP. Saya mengembangkan website sekaligus membantu proses desain.",
    features: ["Pengembangan kolaboratif", "Implementasi PHP", "Dukungan desain antarmuka"],
    kind: "store",
  },
  {
    id: "03", name: "SiPintu Gateway", role: "System Analyst", tech: ["Laravel", "MySQL"],
    description: "Portal sekolah yang menghubungkan aplikasi dan layanan digital untuk warga SMKN 1 Bangsri.",
    features: ["Application Catalog", "Role-Based Access", "Dashboard", "Application Search", "Favorite Applications", "User Profile"],
    kind: "dashboard",
  },
];

function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 8}deg) translateY(-3px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0)"; };
  return <div ref={ref} onMouseMove={move} onMouseLeave={reset} className={`transition-transform duration-300 ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, children, copy }: { eyebrow: string; children: ReactNode; copy?: string }) {
  return <div className="mb-10 max-w-2xl">
    <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.28em] text-primary"><Sparkles className="size-3.5" />{eyebrow}</p>
    <h2 className="font-display text-4xl leading-[1.08] font-medium sm:text-5xl lg:text-6xl">{children}</h2>
    {copy && <p className="mt-5 max-w-xl leading-7 text-muted-foreground">{copy}</p>}
  </div>;
}

function ProjectMockup({ kind }: { kind: string }) {
  if (kind === "schedule") return <div className="grid h-full grid-cols-5 gap-2 p-5 sm:p-8">{Array.from({ length: 20 }).map((_, i) => <span key={i} className={`${i % 4 === 0 ? "bg-primary/60" : "bg-foreground/10"} rounded-sm border border-border`} />)}</div>;
  if (kind === "store") return <div className="flex h-full items-end justify-center gap-4 p-7"><div className="h-3/4 w-1/3 rounded-t-full border border-primary/40 bg-primary/10" /><div className="h-full w-1/3 rounded-t-full border border-primary/50 bg-primary/20" /><div className="h-2/3 w-1/3 rounded-t-full border border-primary/40 bg-primary/10" /></div>;
  return <div className="grid h-full grid-cols-[72px_1fr] gap-3 p-5"><div className="rounded bg-foreground/5 p-2">{Array.from({ length: 5 }).map((_, i) => <div key={i} className="mb-3 h-2 rounded bg-primary/30" />)}</div><div className="grid grid-cols-2 gap-3"><div className="col-span-2 rounded border border-border bg-primary/10" /><div className="rounded border border-border bg-foreground/5" /><div className="rounded border border-border bg-foreground/5" /></div></div>;
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zahida Asha Falia — Web & Interface Portfolio" },
      { name: "description", content: "Portfolio Asha, pelajar PPLG yang berfokus pada desain antarmuka dan pengembangan website." },
      { property: "og:title", content: "Zahida Asha Falia — Portfolio" },
      { property: "og:description", content: "Desain, website, dan karya digital Zahida Asha Falia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-30% 0px -60%" });
    navItems.forEach((item) => { const element = document.getElementById(item); if (element) observer.observe(element); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedProject(null); };
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", close); document.body.style.overflow = ""; };
  }, [selectedProject]);

  const go = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return <main className="galaxy-bg min-h-screen text-foreground">
    <div aria-hidden className="stars pointer-events-none fixed inset-0 z-0 opacity-20" />
    <nav className="glass fixed top-4 left-1/2 z-50 w-[min(94%,72rem)] -translate-x-1/2 rounded-full px-4 py-2 shadow-2xl sm:px-6">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
        <button aria-label="Home" onClick={() => go("Home")} className="grid size-10 cursor-pointer place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground shadow-[var(--shadow-glow)]">A</button>
        <div className="hidden items-center justify-center gap-5 lg:flex">
          {navItems.map((item) => <button key={item} onClick={() => go(item)} className={`relative cursor-pointer py-2 text-xs transition-colors ${active === item ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>{item}<span className={`absolute right-0 bottom-0 left-0 h-px bg-primary transition-transform ${active === item ? "scale-x-100" : "scale-x-0"}`} /></button>)}
        </div>
        <span className="min-w-0 truncate text-center text-xs font-semibold tracking-[.18em] lg:hidden">ASHA PORTFOLIO</span>
        <Button variant="ghost" size="icon" aria-label="Toggle navigation" className="rounded-full lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        <Button variant="glass" size="sm" className="hidden rounded-full lg:inline-flex" onClick={() => go("Contact")}>Let's talk <ArrowUpRight /></Button>
      </div>
      {menuOpen && <div className="mt-3 grid gap-1 border-t border-border py-3 lg:hidden">{navItems.map((item) => <button key={item} onClick={() => go(item)} className={`cursor-pointer rounded-md px-4 py-3 text-left text-sm ${active === item ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}>{item}</button>)}</div>}
    </nav>

    <section id="Home" className="relative z-10 flex min-h-[94vh] items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8 lg:px-12">
      <div aria-hidden className="absolute top-24 right-[12%] size-72 rounded-full bg-violet-glow/10 blur-3xl [animation:pulse-glow_7s_ease-in-out_infinite]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <div className="reveal max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.3em] text-primary">PPLG Student • Designer • Developer</p>
          <h1 className="font-display text-5xl leading-[1.03] font-medium sm:text-7xl lg:text-[5.5rem]">Hello, I'm <span className="glow-text italic text-primary">Zahida Asha Falia.</span></h1>
          <p className="mt-3 font-display text-2xl italic text-muted-foreground sm:text-3xl">Also known as Asha.</p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">Pelajar jurusan PPLG dengan minat besar dalam desain dan pengembangan situs web, khususnya dashboard, landing page, dan berbagai antarmuka website.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="luminous" size="lg" className="rounded-full" onClick={() => go("Projects")}>View My Work <ArrowDownRight /></Button>
            <Button variant="glass" size="lg" className="rounded-full" onClick={() => go("Contact")}>Contact Me <Mail /></Button>
          </div>
          <div className="mt-12 flex items-center gap-4 text-xs uppercase tracking-[.2em] text-muted-foreground"><span className="h-px w-12 bg-primary" />Based in Jepara, Indonesia</div>
        </div>
        <Tilt className="float-slow relative mx-auto w-full max-w-md">
          <div aria-hidden className="absolute -inset-5 rounded-[2.5rem] bg-primary/20 blur-3xl transition-opacity hover:opacity-100" />
          <div className="glass relative aspect-[4/5] overflow-hidden rounded-[2rem] border-primary/40 p-2 shadow-[var(--shadow-glow-strong)]">
            <img src={profileAsset.url} alt="Zahida Asha Falia" className="h-full w-full rounded-[1.6rem] object-cover object-top" />
            <div className="glass absolute right-5 bottom-5 left-5 rounded-lg p-4">
              <p className="text-xs uppercase tracking-[.2em] text-primary">Creative mind</p><p className="mt-1 font-display text-xl">Designing with purpose.</p>
            </div>
          </div>
        </Tilt>
      </div>
    </section>

    <section id="About" className="relative z-10 border-y border-border bg-surface/70 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <SectionHeading eyebrow="About Me">Curious mind, <span className="italic text-primary">creative spirit.</span></SectionHeading>
          <div><p className="max-w-3xl text-lg leading-8 text-muted-foreground">Hai! Saya Asha, pelajar PPLG di SMKN 1 Bangsri. Saya memiliki minat besar dalam desain dan pengembangan website—terutama saat mengubah ide menjadi dashboard, landing page, dan antarmuka yang menarik sekaligus nyaman digunakan.</p>
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[ ["Nama", "Zahida Asha Falia"], ["Nama Panggilan", "Asha"], ["Umur", "16 Tahun"], ["Jurusan", "PPLG"], ["Sekolah", "SMKN 1 Bangsri"] ].map(([label,value], i) => <Tilt key={label} className={i === 4 ? "sm:col-span-2" : ""}><div className="glass group rounded-lg p-5 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-glow)]"><p className="text-xs uppercase tracking-[.2em] text-primary">{label}</p><p className="mt-2 font-display text-xl">{value}</p>{label === "Jurusan" && <p className="mt-1 text-sm text-muted-foreground">Pengembangan Perangkat Lunak dan Gim</p>}</div></Tilt>)}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Skills" className="relative z-10 overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl"><SectionHeading eyebrow="My Skills" copy="Kombinasi desain dan teknologi yang saya gunakan untuk membuat website yang menarik dan fungsional.">Tools I Use <span className="italic text-primary">with Love.</span></SectionHeading></div>
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border bg-surface/45 py-6">
        <div className="marquee flex w-max gap-4 px-4 hover:[animation-play-state:paused]">{[...skills,...skills].map((skill,i) => <button key={`${skill.name}-${i}`} onMouseEnter={() => setActiveSkill(skill)} onClick={() => setActiveSkill(skill)} className="glass group flex w-52 shrink-0 cursor-pointer items-center gap-4 rounded-lg p-4 text-left transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"><span className="grid size-12 shrink-0 place-items-center rounded-md bg-primary/15 font-mono text-sm font-bold text-primary transition-transform group-hover:rotate-6 group-hover:scale-110">{skill.mark}</span><span><strong className="block text-sm">{skill.name}</strong><small className="mt-1 block text-muted-foreground">{skill.title}</small></span></button>)}</div>
      </div>
      <div className="mx-auto mt-7 max-w-7xl"><div className="glass grid gap-4 rounded-lg p-6 sm:grid-cols-[auto_1fr] sm:items-center"><span className="grid size-16 place-items-center rounded-md bg-primary/15 font-mono font-bold text-primary">{activeSkill?.mark}</span><div><p className="text-xs uppercase tracking-[.2em] text-primary">{activeSkill?.title}</p><h3 className="mt-1 font-display text-2xl">{activeSkill?.name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{activeSkill?.description}</p></div></div>
        <div className="mt-24 grid gap-10 lg:grid-cols-[.65fr_1.35fr]"><SectionHeading eyebrow="What I've Learned">Growing through <span className="italic text-primary">exploration.</span></SectionHeading><div><p className="mb-6 max-w-2xl leading-7 text-muted-foreground">Teknologi dan konsep yang pernah saya pelajari dan masih terus saya kembangkan.</p><div className="flex flex-wrap gap-3">{learned.map((item,i) => <span key={item} className="rounded-full border border-border bg-muted/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"><span className="mr-2 text-primary">0{(i%9)+1}</span>{item}</span>)}</div></div></div>
      </div>
    </section>

    <section id="Education" className="relative z-10 border-y border-border bg-surface/70 px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Education">The journey that <span className="italic text-primary">shapes me.</span></SectionHeading>
      <div className="relative ml-3 border-l border-primary/50 pl-8 sm:ml-8 sm:pl-12"><span className="absolute top-0 -left-2.5 size-5 rounded-full border-4 border-surface bg-primary shadow-[var(--shadow-glow)]" /><div className="glass max-w-4xl rounded-lg p-7 sm:p-9"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs uppercase tracking-[.2em] text-primary">Current Education</p><h3 className="mt-2 font-display text-3xl">SMKN 1 Bangsri</h3><p className="mt-1 text-muted-foreground">PPLG — Pengembangan Perangkat Lunak dan Gim</p></div><GraduationCap className="size-9 text-primary" /></div><p className="mt-6 max-w-3xl leading-7 text-muted-foreground">Selama pendidikan, saya mempelajari desain website, pengembangan website, aplikasi mobile, database, dan Internet of Things—membangun fondasi untuk terus berkarya di dunia digital.</p></div></div>
    </div></section>

    <section id="Projects" className="relative z-10 px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Selected Work">Projects built with <span className="italic text-primary">purpose.</span></SectionHeading>
      <div className="grid gap-6 lg:grid-cols-3">{projects.map((project) => <Tilt key={project.id}><article className="glass group overflow-hidden rounded-lg transition-shadow hover:shadow-[var(--shadow-glow-strong)]"><div className="relative aspect-[16/11] overflow-hidden border-b border-border bg-surface-soft"><ProjectMockup kind={project.kind} /><span className="absolute top-4 right-4 font-mono text-xs text-primary">/{project.id}</span></div><div className="p-6"><div className="mb-3 flex flex-wrap gap-2">{project.tech.map(t => <span key={t} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary">{t}</span>)}</div><h3 className="font-display text-2xl">{project.name}</h3><p className="mt-2 text-xs uppercase tracking-[.15em] text-primary">{project.role}</p><p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">{project.description}</p><Button variant="glass" className="mt-6 w-full" onClick={() => setSelectedProject(project)}>View Details <ArrowUpRight /></Button></div></article></Tilt>)}</div>
    </div></section>

    <section id="Experience" className="relative z-10 border-y border-border bg-surface/70 px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Experience">Learning beyond the <span className="italic text-primary">classroom.</span></SectionHeading>
      <div className="grid gap-4 lg:grid-cols-3">{[
        [Code2,"Web Development Extracurricular","Mempelajari dan mengeksplorasi pengembangan website melalui kegiatan ekstrakurikuler."],
        [Palette,"Graphic Design Experience","Membantu membuat poster dan konten visual untuk kegiatan sekolah dan peringatan hari nasional."],
        [BriefcaseBusiness,"Dicoding Indonesia Program","Mengikuti proses hingga tahap interview, menjawab pertanyaan jurusan, dan mengerjakan tugas seleksi."],
      ].map(([Icon,title,copy]) => { const C = Icon as typeof Code2; return <div key={String(title)} className="glass rounded-lg p-7 transition-all hover:-translate-y-1 hover:border-primary/50"><C className="mb-6 size-8 text-primary" /><h3 className="font-display text-2xl">{String(title)}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{String(copy)}</p></div>; })}</div>
      <div className="mt-20"><p className="mb-6 text-xs font-semibold uppercase tracking-[.28em] text-primary">Beyond Technology</p><div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{[[Music2,"Music"],[BookOpen,"Reading Novels"],[Sun,"Morning Exercise"],[MonitorSmartphone,"Exploring Website Design"]].map(([Icon,label],i) => { const C=Icon as typeof Music2; return <div key={String(label)} className="float-slow glass flex items-center gap-3 rounded-lg p-5" style={{ animationDelay: `${i*.5}s` }}><C className="size-5 text-primary"/><span className="text-sm">{String(label)}</span></div>; })}</div></div>
    </div></section>

    <section id="Contact" className="relative z-10 px-5 py-28 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl"><div className="glass relative overflow-hidden rounded-2xl p-7 sm:p-12 lg:p-16"><div aria-hidden className="absolute -top-32 -right-20 size-80 rounded-full bg-primary/20 blur-3xl"/><div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="mb-4 text-xs uppercase tracking-[.28em] text-primary">Let's collaborate</p><h2 className="max-w-4xl font-display text-4xl leading-tight sm:text-6xl">Let's Create Something <span className="italic text-primary">Amazing Together.</span></h2><p className="mt-5 text-muted-foreground">Feel free to contact me through the platforms below.</p></div><ArrowUpRight className="hidden size-16 text-primary lg:block" /></div>
        <div className="relative mt-10 flex flex-wrap gap-3">{[
          [MessageCircle,"WhatsApp","https://wa.me/6289682537741"], [Mail,"Email","mailto:zahidaasafalia@gmail.com"], [Github,"GitHub","https://github.com/zahidaashafalia"], [Linkedin,"LinkedIn","https://www.linkedin.com/in/asha-fally-027480422"], [Instagram,"Instagram","https://www.instagram.com/ashafally"],
        ].map(([Icon,label,href]) => { const C=Icon as typeof Mail; return <Button key={String(label)} asChild variant="glass" size="lg" className="rounded-full hover:scale-105"><a href={String(href)} target={String(href).startsWith("http") ? "_blank" : undefined} rel="noreferrer"><C />{String(label)}<ExternalLink /></a></Button>; })}</div>
      </div><footer className="mt-8 flex flex-col justify-between gap-3 text-xs text-muted-foreground sm:flex-row"><span>© 2026 Zahida Asha Falia</span><span>Designed with curiosity & care.</span></footer></div></section>

    {selectedProject && <div role="dialog" aria-modal="true" aria-label={`Detail ${selectedProject.name}`} className="fixed inset-0 z-[70] grid place-items-center bg-background/80 p-4 backdrop-blur-xl" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelectedProject(null); }}><div className="glass animate-in fade-in zoom-in-95 relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl p-6 shadow-[var(--shadow-glow-strong)] sm:p-9"><Button variant="ghost" size="icon" aria-label="Close project details" className="absolute top-4 right-4" onClick={() => setSelectedProject(null)}><X /></Button><p className="text-xs uppercase tracking-[.2em] text-primary">Project {selectedProject.id}</p><h2 className="mt-3 pr-10 font-display text-3xl sm:text-4xl">{selectedProject.name}</h2><p className="mt-2 text-sm text-primary">Role: {selectedProject.role}</p><div className="mt-7 aspect-[16/8] overflow-hidden rounded-lg border border-border bg-surface-soft"><ProjectMockup kind={selectedProject.kind} /></div><p className="mt-7 leading-7 text-muted-foreground">{selectedProject.description}</p><h3 className="mt-7 font-display text-xl">Key details</h3><ul className="mt-4 grid gap-3 sm:grid-cols-2">{selectedProject.features.map(feature => <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="size-4 shrink-0 text-primary" />{feature}</li>)}</ul><div className="mt-8 flex flex-wrap gap-2">{selectedProject.tech.map(tech => <span key={tech} className="rounded-full bg-primary/15 px-3 py-1.5 text-xs text-primary">{tech}</span>)}</div></div></div>}
  </main>;
}