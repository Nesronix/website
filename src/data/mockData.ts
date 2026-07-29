import { ProjectItem, ResearchItem, CourseItem, EventItem, ContributorRole, GovernanceDoc } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ai-agents',
    name: 'Nesronix AI Swarm',
    repo: 'nesronix/ai-agents',
    description: 'High-performance distributed autonomous agent framework with KV cache compaction and structured reasoning.',
    stars: 342,
    forks: 48,
    language: 'TypeScript / Python',
    category: 'AI',
    tags: ['Multi-Agent', 'LLM', 'Autonomous', 'RAG'],
    installCommand: 'pip install nesronix-agents',
    maintainer: 'Nesronix AI Lead',
    status: 'Active'
  },
  {
    id: 'sec-suite',
    name: 'Nesronix Security RedTeam CLI',
    repo: 'nesronix/sec-suite',
    description: 'Automated vulnerability detection, AST security audits, and threat vector analysis toolset.',
    stars: 512,
    forks: 89,
    language: 'Rust / Go',
    category: 'Security',
    tags: ['Cybersecurity', 'RedTeam', 'Static Analysis', 'Scanner'],
    installCommand: 'cargo install nesronix-sec',
    maintainer: 'Nesronix Security Research',
    status: 'Active'
  },
  {
    id: 'nesronix-cli',
    name: 'Nesronix Unified CLI',
    repo: 'nesronix/cli',
    description: 'The central developer companion CLI for managing Nesronix projects, cloud deployments, and local labs.',
    stars: 189,
    forks: 23,
    language: 'Go',
    category: 'CLI',
    tags: ['CLI', 'DevOps', 'Automation'],
    installCommand: 'npm install -g @nesronix/cli',
    maintainer: 'Nesronix Core Team',
    status: 'Active'
  },
  {
    id: 'academy-core',
    name: 'Nesronix Open Curriculum',
    repo: 'nesronix/academy-core',
    description: 'Interactive open-source technical course materials, labs, and automated grading engine.',
    stars: 275,
    forks: 64,
    language: 'TypeScript / MDX',
    category: 'Framework',
    tags: ['Education', 'Interactive', 'Courses'],
    installCommand: 'npx create-nesronix-course',
    maintainer: 'Nesronix Education Lead',
    status: 'Beta'
  },
  {
    id: 'website-repo',
    name: 'Nesronix Portal Source',
    repo: 'nesronix/website',
    description: 'Official open-source community frontend portal for nesronix.org.',
    stars: 145,
    forks: 31,
    language: 'TypeScript / React',
    category: 'SDK',
    tags: ['React', 'Vite', 'TailwindCSS'],
    installCommand: 'git clone https://github.com/nesronix/website',
    maintainer: 'Nesronix Web Team',
    status: 'Active'
  },
  {
    id: 'awesome-nesronix',
    name: 'Awesome Nesronix Ecosystem',
    repo: 'nesronix/awesome',
    description: 'A curated list of community tools, open research papers, security exploits, and AI models created by members.',
    stars: 890,
    forks: 142,
    language: 'Markdown',
    category: 'Awesome',
    tags: ['Awesome-List', 'Resources', 'Community'],
    maintainer: 'Nesronix Community',
    status: 'Active'
  }
];

export const RESEARCH_DATA: ResearchItem[] = [
  {
    id: 'agentic-memory',
    title: 'Hierarchical KV Cache Compaction for Autonomous Multi-Agent Systems',
    category: 'AI Research',
    summary: 'Evaluating context window retention strategies and token efficiency during ultra long-running agentic tasks.',
    status: 'Published',
    lead: 'Nesronix AI Research Lab'
  },
  {
    id: 'wasm-sandbox-sec',
    title: 'Zero-Trust WebAssembly Sandboxing for Untrusted Code Execution',
    category: 'Security Exploits',
    summary: 'Building lightweight runtime boundaries for serverless LLM tool execution.',
    status: 'In Progress',
    lead: 'Nesronix Security Lab'
  },
  {
    id: 'autonomous-drone-swarm',
    title: 'Mesh Neural Routing for Edge Robotics and Swarm Coordination',
    category: 'Robotics',
    summary: 'Ultra-low latency decentralized telemetry protocol using Rust and WebSockets.',
    status: 'Experimental',
    lead: 'Nesronix Robotics Lab'
  }
];

export const COURSES_DATA: CourseItem[] = [
  {
    id: 'c1',
    title: 'AI Agent Architecture & Tool Synthesis',
    level: 'Intermediate',
    duration: '4 Weeks',
    enrolled: 1240,
    description: 'Learn how to build production-grade agent swarms, tool dispatchers, and memory compaction models.',
    topics: ['LLM Function Calling', 'State Machines', 'MCP Protocol', 'Agent Debugging'],
    isFree: true
  },
  {
    id: 'c2',
    title: 'Practical Web Vulnerability Exploitation & Defense',
    level: 'Advanced',
    duration: '6 Weeks',
    enrolled: 890,
    description: 'Hands-on Red Team methodologies, reverse engineering minified targets, and AST-based vulnerability remediation.',
    topics: ['OWASP Top 10', 'AST Parsing', 'Sandbox Escapes', 'Binary Patching'],
    isFree: true
  },
  {
    id: 'c3',
    title: 'Systems Programming with Rust & Async Tokio',
    level: 'Intermediate',
    duration: '5 Weeks',
    enrolled: 1560,
    description: 'Master memory safety, multi-threaded worker pools, network protocols, and high-throughput microservices.',
    topics: ['Memory Management', 'Async IO', 'Concurrency', 'CLI Development'],
    isFree: true
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'e1',
    title: 'Nesronix Global Open Hackathon 2026',
    type: 'Hackathon',
    date: 'August 15-17, 2026',
    time: '48 Hours Global Sync',
    location: 'Discord & Remote',
    speakers: ['Engineering Lead', 'CTO', 'AI Lead'],
    link: 'https://discord.gg/nesronix'
  },
  {
    id: 'e2',
    title: 'Live Workshop: Building & Deploying Custom MCP Servers',
    type: 'Workshop',
    date: 'August 05, 2026',
    time: '18:00 UTC',
    location: 'Nesronix Stage',
    speakers: ['Nesronix Core Team'],
    link: 'https://nesronix.org/events'
  }
];

export const COMMUNITY_ROLES: ContributorRole[] = [
  {
    role: 'Founder & Executive Leadership',
    description: 'Strategic vision, brand protection, and overarching governance of Nesronix LLC & Community.',
    responsibilities: ['Strategic Direction', 'Partnerships', 'Foundation Alignment'],
    badgeColor: 'border-amber-500/50 bg-amber-500/10 text-amber-300'
  },
  {
    role: 'CTO & Engineering Leads',
    description: 'Overseeing core open-source architecture, security audits, and infrastructure stability.',
    responsibilities: ['Architecture Reviews', 'Release Management', 'Security Supervision'],
    badgeColor: 'border-blue-500/50 bg-blue-500/10 text-blue-300'
  },
  {
    role: 'Research & Labs Leads',
    description: 'Driving pioneering experimental research in AI agents, security exploits, and robotics.',
    responsibilities: ['Publishing Papers', 'Experimental Demos', 'Benchmark Testing'],
    badgeColor: 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300'
  },
  {
    role: 'Community & Education Leads',
    description: 'Mentoring community members, hosting workshops, managing Discord, and running hackathons.',
    responsibilities: ['Discord Moderation', 'Workshop Hosting', 'Mentorship Pairing'],
    badgeColor: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300'
  },
  {
    role: 'Maintainers & Core Contributors',
    description: 'Reviewing Pull Requests, triaging GitHub issues, and maintaining documentation freshness.',
    responsibilities: ['PR Code Reviews', 'Issue Triage', 'Release Builds'],
    badgeColor: 'border-purple-500/50 bg-purple-500/10 text-purple-300'
  },
  {
    role: 'Community Members',
    description: 'Passionate developers, students, and engineers learning, sharing, and contributing.',
    responsibilities: ['Feedback', 'Bug Reporting', 'Event Participation'],
    badgeColor: 'border-slate-500/50 bg-slate-500/10 text-slate-300'
  }
];

export const GOVERNANCE_DOCS: GovernanceDoc[] = [
  {
    id: 'code-of-conduct',
    title: 'Code of Conduct',
    filename: 'CODE_OF_CONDUCT.md',
    summary: 'Our standards for an inclusive, respectful, and welcoming community for all developers.',
    content: `# Nesronix Community Code of Conduct

## Our Pledge
We as members, contributors, and leaders pledge to make participation in the Nesronix Community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity, level of experience, nationality, or religion.

## Our Standards
Examples of behavior that contributes to a positive environment:
- Demonstrating empathy and kindness toward other people
- Being respectful of differing opinions, viewpoints, and experiences
- Giving and gracefully accepting constructive feedback
- Accepting responsibility and apologizing to those affected by our mistakes

## Enforcement Responsibilities
Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and will take appropriate and fair corrective action in response to any behavior that they deem inappropriate.`
  },
  {
    id: 'contributing',
    title: 'Contributing Guide',
    filename: 'CONTRIBUTING.md',
    summary: 'Guidelines for submitting issues, feature requests, and pull requests across all Nesronix repositories.',
    content: `# Contributing to Nesronix Open Source

First off, thank you for considering contributing to Nesronix! It's people like you that make the open-source community such an amazing place to learn, inspire, and create.

## How Can I Contribute?
- **Reporting Bugs**: Use GitHub Issues with complete steps to reproduce.
- **Suggesting Enhancements**: Open a feature request discussion.
- **Pull Requests**:
  1. Fork the repo and create your branch from \`main\`.
  2. Ensure all tests and linting pass (\`npm test\` or \`cargo test\`).
  3. Include unit tests for new functionality.
  4. Submit your PR and link it to relevant issues.`
  },
  {
    id: 'security',
    title: 'Security Policy',
    filename: 'SECURITY.md',
    summary: 'Responsible vulnerability disclosure policy and security contact information.',
    content: `# Nesronix Security Policy

## Reporting a Vulnerability
The Nesronix Security Team takes all security vulnerabilities seriously.

If you discover a security vulnerability within any Nesronix repository or service, please **DO NOT** open a public issue.

Instead, please send an encrypted email to:
👉 **security@nesronix.org**

Include:
- Type of issue (e.g. buffer overflow, XSS, RCE, injection)
- Step-by-step instructions or proof-of-concept
- Affected repository or URL

We will acknowledge receipt within 24 hours and provide regular updates on remediation.`
  },
  {
    id: 'roadmap',
    title: 'Community Roadmap',
    filename: 'ROADMAP.md',
    summary: '3-Year Strategic Vision and Milestones for Nesronix Community & Open Source.',
    content: `# Nesronix 3-Year Community Roadmap

## Year 1 (Foundation Phase)
- ✅ Launch Official Community Portal (\`nesronix.org\`) & GitHub Org (\`github.com/nesronix\`).
- ✅ Establish Discord server & first 50 active contributors.
- 🎯 Publish 10 core open-source projects (CLI, Agent Swarms, Security RedTeam toolset).
- 🎯 Launch free weekly technical workshops and inaugural Hackathon.

## Year 2 (Expansion Phase)
- 🚀 Reach 2,500 active community members & 50 open-source repositories.
- 🚀 Launch Nesronix Academy Certification Tracks & Global Internship Program.
- 🚀 Host quarterly virtual research symposiums.

## Year 3 (Global Ecosystem Phase)
- 🌐 Reach 10,000+ global community members & 100+ open-source repositories.
- 🌐 Establish Nesronix Non-Profit Foundation to sponsor independent researchers.`
  },
  {
    id: 'governance',
    title: 'Governance Model',
    filename: 'GOVERNANCE.md',
    summary: 'How decision-making, maintainer selection, and project steering work at Nesronix.',
    content: `# Nesronix Open Source Governance Model

Nesronix operates under a **Technical Steering Committee (TSC)** model combined with project-level Maintainers.

## Leadership & Roles
1. **Maintainers**: Individuals who have demonstrated sustained, high-quality technical contributions. They hold commit rights to specific repositories.
2. **Technical Steering Committee**: Leads representing AI, Security, Systems, and Community who oversee overall project direction.
3. **Consensus Seeking**: We strive for consensus in all technical decisions. When consensus cannot be reached, the TSC votes.`
  }
];

export const EMAIL_DIRECTORY = {
  community: [
    { label: 'General & Support', email: 'hello@nesronix.org' },
    { label: 'Community & Discord', email: 'community@nesronix.org' },
    { label: 'Open Source Repositories', email: 'opensource@nesronix.org' },
    { label: 'Labs & Research', email: 'labs@nesronix.org' },
    { label: 'Academy & Courses', email: 'academy@nesronix.org' },
    { label: 'Security Vulnerabilities', email: 'security@nesronix.org' },
  ],
  company: [
    { label: 'Enterprise Sales', email: 'sales@nesronix.com' },
    { label: 'Commercial Support', email: 'support@nesronix.com' },
    { label: 'Business & LLC Partnerships', email: 'business@nesronix.com' },
  ]
};
