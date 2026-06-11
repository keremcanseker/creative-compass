/**
 * Creative Compass — site content.
 * Single source of truth for all copy. Edit here to change the site text.
 * Content merged & trimmed from the source PDF + the Lovable draft.
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
    "Creative Compass is a full-service growth agency — paid media, SEO, creative, technology, automation, and analytics — powered by an in-house engineering team that builds what most agencies can’t.",
  primary: { label: "Get a Free Growth Plan", href: "#contact" },
  secondary: { label: "Our Services", href: "#services" },
  rating: "Rated by the brands we’ve scaled",
  proof: "Trusted by 120+ growing brands",
  stats: [
    { value: "+312%", label: "avg. ROAS lift" },
    { value: "42%", label: "lower blended CAC", prefix: "↓" },
    { value: "3.1×", label: "pipeline growth" },
    { value: "$180M+", label: "managed ad spend" },
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
  title: "Full-service growth, engineered to scale.",
  subtitle:
    "Six capabilities under one team — so strategy, execution, and the software behind it all compound instead of fighting each other.",
  list: [
    {
      id: "01",
      icon: "TrendingUp",
      title: "Growth Marketing",
      blurb:
        "Full-funnel paid acquisition across every channel that moves pipeline and revenue.",
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
        "Compounding organic visibility through technical, programmatic, and content SEO.",
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
        "Performance-grade creative that converts — ad creative, landing pages, and brand systems.",
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
        "We build the systems and products that power growth — in-house, not outsourced.",
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
        "Reduce manual work and scale operations with automation and AI agents wired to your stack.",
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
        "Turn data into decisions with attribution, dashboards, and a relentless testing cadence.",
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
    "Most agencies focus on one area and stop at the campaign. We bring strategy, marketing, creative, technology, automation, and analytics under one team.",
  cards: [
    {
      icon: "Cpu",
      title: "Engineers on staff",
      body: "When your funnel needs a custom landing-page system, a CRM automation, a portal, or an AI agent — our in-house engineers build it. The software most agencies can’t.",
    },
    {
      icon: "Layers",
      title: "One execution partner",
      body: "Strategy, marketing, creative, technology, automation, and analytics in one team. Faster execution, tighter alignment, no vendor ping-pong.",
    },
    {
      icon: "LineChart",
      title: "Measurable growth",
      body: "Every dollar is accounted for. Server-side attribution, live dashboards, and weekly tests make growth provable — not promised.",
    },
  ],
};

export const process = {
  eyebrow: "How we work",
  title: "Live in 30 days. Compounding for years.",
  subtitle:
    "No three-month onboarding. We move fast, prove lift early, then layer on the work that compounds.",
  steps: [
    {
      n: "01",
      title: "Audit & Plan",
      body: "We tear down your funnel, channels, and CAC math. You get a written growth plan in week one — free.",
    },
    {
      n: "02",
      title: "Launch",
      body: "Campaigns, creative, tracking, and landing pages go live in the first 30 days. No long ramp-up.",
    },
    {
      n: "03",
      title: "Test & Scale",
      body: "Weekly creative tests, channel expansion, and CRO. Every test reported with clear, attributable lift.",
    },
    {
      n: "04",
      title: "Compound",
      body: "Lifecycle, automation, and custom builds layer on. Your CAC drops while LTV climbs — month over month.",
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
    { value: "$180M+", label: "media managed" },
    { value: "+312%", label: "avg. ROAS lift" },
    { value: "120+", label: "brands scaled" },
    { value: "100%", label: "in-house team" },
  ],
};

export const pricing = {
  eyebrow: "Engagements",
  title: "Built for brands ready to scale.",
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
        "Ongoing paid media, SEO, creative, and analytics. The default for scaling brands.",
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
  title: "Ready to scale? Let’s build the plan.",
  subtitle:
    "Tell us about your brand, your funnel, and where you’re stuck. We’ll come back with a free growth plan in 48 hours.",
  primary: { label: "Email us", href: "mailto:hello@creativecompass.com" },
  secondary: { label: "Book a free growth audit", href: "#contact" },
};
