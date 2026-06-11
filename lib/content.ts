/**
 * Creative Compass — site content.
 * Single source of truth for all copy. Edit here to change the site text.
 */

export const brand = {
  name: "Creative Compass",
  tagline: "Growth & Digital Transformation",
  email: "hello@creativecompass.com",
  year: 2026,
  location: "NYC",
};

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
  ],
  cta: { label: "Start a Project", href: "#contact" },
};

export const hero = {
  badge: "Growth & Digital Transformation Agency",
  titleTop: "We build, market, and",
  titleAccent: "scale businesses.",
  subtitle:
    "One team that runs your paid media and writes the code behind it. Most agencies hand you a campaign and a login. We hand you a growth engine, with engineers on staff to build the parts off-the-shelf tools can’t.",
  primary: { label: "Get a Free Growth Audit", href: "#contact" },
  secondary: { label: "See What We Do", href: "#services" },
  rating: "Rated by the brands we’ve grown",
  proof: "Trusted by 100+ growing brands",
  stats: [
    { value: "+312%", label: "best-case ROAS lift" },
    { value: "31%", label: "blended CAC", prefix: "↓" },
    { value: "3.1×", label: "pipeline growth" },
    { value: "$180M+", label: "ad spend managed" },
  ],
};

export const channels = {
  label: "Channels & platforms we run",
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
    "Six things most brands stitch together from five vendors. We run all of them with one team, so your strategy, creative, and the software underneath move in the same direction.",
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
    "Most agencies are great at one thing and stop the moment a campaign needs custom code. We don’t. When the work calls for software, we build it instead of telling you it’s out of scope.",
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
      body: "Every dollar is accounted for. Server-side attribution, live dashboards, and weekly tests mean you can check our math any day of the week.",
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
    { label: "Server-side attribution & live dashboards", values: [false, true] },
    { label: "Live in 30 days, no long onboarding", values: [false, true] },
    { label: "Strategy + marketing + creative + tech in one team", values: [false, true] },
    { label: "Weekly, attributable test cadence", values: [false, true] },
    { label: "Custom software, portals & AI agents", values: [false, true] },
  ],
};

export const industries = {
  eyebrow: "Industries",
  title: "Operators we love working with.",
  items: [
    "Self Storage",
    "Commercial Real Estate",
    "Property Management",
    "Hotels",
    "Coworking Spaces",
    "Ecommerce Brands",
    "Consumer Packaged Goods",
    "SaaS Companies",
    "Subscription Businesses",
    "Franchise Organizations",
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
      price: "$10K – $50K+",
      cadence: "/ month",
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
      price: "$25K – $250K+",
      cadence: "fixed scope",
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
      price: "Custom",
      cadence: "annual",
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
  primary: { label: "Email us", href: "mailto:hello@creativecompass.com" },
  secondary: { label: "Book a free growth audit", href: "#contact" },
};
