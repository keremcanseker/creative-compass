/**
 * Creative Compass — site content.
 * Single source of truth for all copy. Edit here to change the site text.
 */

export const brand = {
  name: "Creative Compass",
  tagline: "Growth & Digital Transformation",
  email: "david@ccompass.io",
  year: 2026,
  location: "NYC",
};

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Process", href: "#process" },
    { label: "Engagements", href: "#pricing" },
  ],
  cta: { label: "Start a Project", href: "#contact" },
};

export const hero = {
  badge: "Growth & Digital Transformation Agency",
  titleTop: "We build, market, and",
  titleAccent: "scale businesses.",
  subtitle:
    "By combining strategy, creative, technology, and growth marketing, we help companies increase revenue, improve efficiency, and create sustainable competitive advantages.",
  primary: { label: "Get a Free Growth Audit", href: "#contact" },
  secondary: { label: "See What We Do", href: "#services" },
  rating: "Brands we’ve helped grow",
  stats: [
    { value: "+312%", label: "best-case ROAS lift" },
    { value: "31%", label: "blended CAC", prefix: "↓" },
    { value: "3.1×", label: "pipeline growth" },
    { value: "$180M+", label: "ad spend managed" },
  ],
};

export const channels = {
  label: "Channels & platforms we specialize in",
  items: [
    "Google Ads",
    "Meta",
    "TikTok",
    "LinkedIn",
    "YouTube",
    "CTV",
    "Klaviyo",
    "HubSpot",
    "GA4",
  ],
};

export type Service = {
  id: string;
  icon: string; // lucide icon name
  title: string;
  blurb: string;
  items: string[];
};

export const services = {
  eyebrow: "What we do",
  title: "Everything your growth needs, under one roof.",
  subtitle:
    "Most companies hire separate partners for strategy, creative, technology, and growth. We bring them together under one team, so every initiative moves faster, works harder, and drives measurable business growth.",
  list: [
    {
      id: "01",
      icon: "TrendingUp",
      title: "Growth Marketing",
      blurb:
        "Full-funnel paid acquisition across every channel that actually moves pipeline and revenue.",
      items: [
        "Google Ads",
        "Meta (Facebook & Instagram)",
        "TikTok & YouTube",
        "Connected TV",
        "Retargeting",
        "Demand & lead generation",
        "Account-based marketing",
      ],
    },
    {
      id: "02",
      icon: "Search",
      title: "SEO & Organic Growth",
      blurb:
        "Organic traffic that keeps paying off long after you stop touching it. Technical, programmatic, and content SEO.",
      items: [
        "Technical SEO",
        "Programmatic SEO",
        "Local SEO",
        "Content strategy",
        "Keyword research",
        "Content optimization",
        "Link building",
      ],
    },
    {
      id: "03",
      icon: "PenTool",
      title: "Creative Services",
      blurb:
        "Ad creative, landing pages, and brand systems built to convert, not just to look good in a portfolio.",
      items: [
        "Website & landing page design",
        "Ad creative & UGC",
        "Branding & identity",
        "Video production",
        "Sales & print collateral",
        "Marketing content",
      ],
    },
    {
      id: "04",
      icon: "Code2",
      title: "Technology Development",
      blurb:
        "The websites, apps, and internal tools your growth runs on, built by our own engineers instead of a freelancer marketplace.",
      items: [
        "Website development",
        "Ecommerce builds",
        "SaaS applications",
        "MVP development",
        "Customer portals & internal tools",
        "Mobile apps",
      ],
    },
    {
      id: "05",
      icon: "Workflow",
      title: "Automation & AI",
      blurb:
        "Cut the manual busywork and run more of your operation on autopilot, with automations and AI agents wired to your stack.",
      items: [
        "CRM automation",
        "Marketing automation",
        "Lead nurture systems",
        "AI assistants & agents",
        "Workflow automation",
        "Customer support automation",
      ],
    },
    {
      id: "06",
      icon: "BarChart3",
      title: "Analytics & Optimization",
      blurb:
        "Attribution, dashboards, and a weekly testing cadence so you always know what’s working and what to cut.",
      items: [
        "GA4 & server-side tracking",
        "Customer journey mapping",
        "Dashboard development",
        "Funnel optimization",
        "Conversion rate optimization",
        "A/B testing & BI",
      ],
    },
  ] satisfies Service[],
};

export const why = {
  eyebrow: "Why Creative Compass",
  title: "A growth agency with engineers on staff.",
  subtitle:
    "Most agencies execute campaigns. We build the systems behind them. When growth requires technology, automation, or custom development, our team has the expertise to build it—not hand it off to someone else.",
  cards: [
    {
      icon: "Cpu",
      title: "Engineers on staff",
      body: "Need a custom landing-page system, a CRM automation, a customer portal, or an AI agent? Our engineers build it in-house. That’s the work most agencies quietly outsource or pass on.",
    },
    {
      icon: "Layers",
      title: "One execution partner",
      body: "Strategy, creative, media, and engineering sit on the same team. Decisions land faster, nothing gets lost in a handoff, and there’s no vendor ping-pong.",
    },
    {
      icon: "LineChart",
      title: "Growth you can audit",
      body: "No black boxes. Live dashboards, transparent reporting, and ongoing optimization mean you always know where your investment is going and what it's delivering.",
    },
  ],
};

export const process = {
  eyebrow: "How we work",
  title: "Live in 30 days. Better every month after.",
  subtitle:
    "No three-month onboarding deck. We move fast, prove lift early, then keep stacking wins that hold.",
  steps: [
    {
      n: "01",
      title: "Audit & Plan",
      body: "We tear down your funnel, channels, and CAC math. You get a written growth audit in 48 hours, free.",
    },
    {
      n: "02",
      title: "Launch",
      body: "Campaigns, creative, tracking, and landing pages go live in the first 30 days. No long ramp-up.",
    },
    {
      n: "03",
      title: "Test & Grow",
      body: "Weekly creative tests, new channels, and CRO. Every test comes back with clear, attributable lift.",
    },
    {
      n: "04",
      title: "Build & Layer",
      body: "Lifecycle, automation, and custom software layer on top. CAC keeps falling, LTV keeps climbing, and the gains stick.",
    },
  ],
};

export const comparison = {
  eyebrow: "The difference",
  title: "Why one partner beats five vendors.",
  columns: ["Typical agency", "Creative Compass"],
  rows: [
    { label: "In-house engineering team", values: [false, true] },
    {
      label: "Server-side attribution & live dashboards",
      values: [false, true],
    },
    { label: "Live in 30 days, no long onboarding", values: [false, true] },
    {
      label: "Strategy + marketing + creative + tech in one team",
      values: [false, true],
    },
    { label: "Weekly, attributable test cadence", values: [false, true] },
    { label: "Custom software, portals & AI agents", values: [false, true] },
  ],
};

export const industries = {
  eyebrow: "Industries",
  title: "Operators we love working with.",
  items: [
    "SaaS & Technology",
    "Ecommerce Brands",
    "Consumer Packaged Goods",
    "Hospitality & Hotels",
    "Franchise Organizations",
    "Startups & Venture-Backed Companies",
    "Entertainment & Events",
    "Professional Services",
  ],
};

export const stats = {
  items: [
    { value: "$1.2B+", label: "revenue influenced" },
    { value: "100+", label: "brands partnered" },
    { value: "2.3 yrs", label: "avg. partnership" },
    { value: "100%", label: "in-house team" },
  ],
};

export const pricing = {
  eyebrow: "Engagements",
  title: "Built for brands ready to grow.",
  subtitle:
    "Most clients start on a monthly growth retainer. Sprints and enterprise programs available on request.",
  plans: [
    {
      name: "Growth Retainer",
      featured: true,
      tag: "Most common",
      blurb:
        "Ongoing paid media, SEO, creative, and analytics. Where most of our partnerships start.",
      features: [
        "Embedded pod: strategist + media + creative",
        "Weekly creative & test cadence",
        "Always-on attribution & dashboards",
        "Engineering hours included",
      ],
    },
    {
      name: "Project Engagement",
      featured: false,
      tag: null,
      blurb:
        "Brand launches, rebrands, website builds, or custom software shipped to a deadline.",
      features: [
        "Brand & website builds",
        "Launch campaign + creative",
        "SaaS / portal / MVP builds",
        "Full handoff included",
      ],
    },
    {
      name: "Enterprise",
      featured: false,
      tag: null,
      blurb:
        "Multi-brand and multi-region programs with dedicated leadership, SLAs, and procurement.",
      features: [
        "Dedicated cross-functional pod",
        "MSA, security review, custom SLAs",
        "Quarterly executive reviews",
        "Custom data & ops integrations",
      ],
    },
  ],
};

export const contact = {
  eyebrow: "Get started",
  title: "Tell us where you’re stuck. We’ll show you the way out.",
  subtitle:
    "Send us your brand, your funnel, and the number that’s keeping you up. We’ll come back with a free growth audit in 48 hours.",
  primary: { label: "Email us", href: "mailto:david@ccompass.io" },
  secondary: { label: "Book a free growth audit", href: "#contact" },
};

export const contactForm = {
  eyebrow: "Start a project",
  title: "Get your free growth audit.",
  subtitle:
    "Tell us a little about your business and where you want to grow. We’ll reply within 48 hours with a written audit, no pitch deck required.",
  // Monthly engagement budget — most partnerships start on a retainer.
  budgets: [
    { value: "<5k", label: "Under $5k / mo" },
    { value: "5-15k", label: "$5k – $15k / mo" },
    { value: "15-50k", label: "$15k – $50k / mo" },
    { value: "50k+", label: "$50k+ / mo" },
    { value: "unsure", label: "Not sure yet" },
  ],
  success: {
    title: "Thanks — we’ve got it.",
    body: "Your details are on their way to our team. Expect a reply within 48 hours.",
  },
};