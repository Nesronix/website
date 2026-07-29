import { ActiveTab } from '../types';

interface MetaData {
  title: string;
  description: string;
  image?: string;
  url: string;
}

const DEFAULT_IMAGE = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhByFAZWAEQoaFO9nr_E6QVLqIAo8GKI5PolkZu035vcCRX6uwNdAOGBvGfnaCBwlORJROgngSJdFXli8DnQGSJfVPrEYRlxLHhROo8GPDBK0N3EMLYWLfT32TEv4qPNgEHJ8fCLMBvKPO78MjkSFxDUExuk3DQmQhh9K8jCJDq6Iqf_hmnJsa801Gq1paW/s1600/504895041_3964057297242101_5019402264860843098_n%20%281%29.jpg';

const META_CONFIG: Record<ActiveTab, MetaData> = {
  home: {
    title: 'Nesronix Community | Open Technology, AI Research & Engineering',
    description: 'Building open-source software, AI agent pipelines, cybersecurity, and developer education for everyone. Open technology that matters.',
    url: 'https://nesronix.org/',
    image: DEFAULT_IMAGE,
  },
  founder: {
    title: 'Mohamed Shaban Ibrahim | Founder & Intelligence Systems Architect — Nesronix',
    description: 'Executive Profile & Official Statement of Mohamed Shaban Ibrahim (محمد شعبان إبراهيم العتماني). Founder of RobovAI & Nesronix, pioneer of VAI-Atmani Hybrid RAG.',
    url: 'https://nesronix.org/founder',
    image: DEFAULT_IMAGE,
  },
  ecosystem: {
    title: 'Nesronix Ecosystem | Open Source Products & Infrastructure',
    description: 'Explore the Nesronix open ecosystem: AI agent frameworks, developer tooling, security scanners, and cloud automation.',
    url: 'https://nesronix.org/ecosystem',
    image: DEFAULT_IMAGE,
  },
  projects: {
    title: 'Open Source Projects | Nesronix Community',
    description: 'Browse production-ready open source repos, AI pipelines, microservice blueprints, and mechatronics libraries by Nesronix.',
    url: 'https://nesronix.org/projects',
    image: DEFAULT_IMAGE,
  },
  labs: {
    title: 'Nesronix AI & Security Labs | DeepTech Research',
    description: 'Experimental AI research, VAI-Atmani 5-Layer Hybrid RAG benchmarks, penetration testing exploits, and robotics prototypes.',
    url: 'https://nesronix.org/labs',
    image: DEFAULT_IMAGE,
  },
  academy: {
    title: 'Nesronix Academy | Free Tech Courses & Developer Education',
    description: 'Master AI Engineering, Cybersecurity, Cloud DevOps, and Systems Software with zero gatekeeping and hands-on projects.',
    url: 'https://nesronix.org/academy',
    image: DEFAULT_IMAGE,
  },
  community: {
    title: 'Join Nesronix Community | Discord, GitHub & Founding Wave',
    description: 'Connect with software engineers, AI researchers, and mechatronics builders. Zero hierarchy, 100% open contribution.',
    url: 'https://nesronix.org/community',
    image: DEFAULT_IMAGE,
  },
  governance: {
    title: 'Open Governance & Data Sovereignty | Nesronix Community',
    description: 'Our core doctrines: 100% Data Sovereignty, Open Source by Default, Sub-millisecond Performance, and Zero Hierarchy.',
    url: 'https://nesronix.org/governance',
    image: DEFAULT_IMAGE,
  },
  contact: {
    title: 'Contact Nesronix | Get In Touch',
    description: 'Reach out to the Nesronix community leaders, core maintainers, and executive team.',
    url: 'https://nesronix.org/contact',
    image: DEFAULT_IMAGE,
  },
};

export const updateSEOMeta = (tab: ActiveTab) => {
  const config = META_CONFIG[tab] || META_CONFIG.home;

  // Document Title
  document.title = config.title;

  // Helper to set or create meta tag
  const setMetaTag = (selector: string, attr: string, value: string) => {
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      if (selector.startsWith('meta[name=')) {
        const nameMatch = selector.match(/name="([^"]+)"/);
        if (nameMatch) element.setAttribute('name', nameMatch[1]);
      } else if (selector.startsWith('meta[property=')) {
        const propMatch = selector.match(/property="([^"]+)"/);
        if (propMatch) element.setAttribute('property', propMatch[1]);
      }
      document.head.appendChild(element);
    }
    element.setAttribute(attr, value);
  };

  // Helper for link tags
  const setLinkTag = (rel: string, href: string) => {
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  };

  // Standard Meta
  setMetaTag('meta[name="description"]', 'content', config.description);

  // Open Graph
  setMetaTag('meta[property="og:title"]', 'content', config.title);
  setMetaTag('meta[property="og:description"]', 'content', config.description);
  setMetaTag('meta[property="og:url"]', 'content', config.url);
  if (config.image) {
    setMetaTag('meta[property="og:image"]', 'content', config.image);
  }

  // Twitter Card
  setMetaTag('meta[name="twitter:title"]', 'content', config.title);
  setMetaTag('meta[name="twitter:description"]', 'content', config.description);
  if (config.image) {
    setMetaTag('meta[name="twitter:image"]', 'content', config.image);
  }

  // Canonical Link
  setLinkTag('canonical', config.url);
};
