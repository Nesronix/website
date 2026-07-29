import React, { useState } from 'react';
import { ActiveTab } from '../types';
import {
  ExternalLink,
  Shield,
  Brain,
  Cloud,
  Code2,
  Globe,
  ArrowLeft,
  ArrowRight,
  Zap,
  CheckCircle2,
  Github,
  Linkedin,
  Award,
  Terminal,
  Cpu,
  Mail,
  GraduationCap,
  Briefcase,
  Layers,
  Bot,
  Tv,
  Star,
  Quote,
  ShieldCheck,
  Lock,
  Sparkles,
  Camera,
  X,
} from 'lucide-react';

interface FounderPageProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenJoinModal: () => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ setActiveTab, onOpenJoinModal }) => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; desc: string } | null>(null);

  const links = {
    website: 'https://msalatmani.org',
    github: 'https://github.com/m0shaban',
    linkedin: 'https://linkedin.com/in/msalatmani',
    robovai: 'https://robovai.tech',
    email: 'mailto:msalatmani@gmail.com',
  };

  // Real images from msalatmani.org source codebase
  const images = {
    portrait: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhByFAZWAEQoaFO9nr_E6QVLqIAo8GKI5PolkZu035vcCRX6uwNdAOGBvGfnaCBwlORJROgngSJdFXli8DnQGSJfVPrEYRlxLHhROo8GPDBK0N3EMLYWLfT32TEv4qPNgEHJ8fCLMBvKPO78MjkSFxDUExuk3DQmQhh9K8jCJDq6Iqf_hmnJsa801Gq1paW/s1600/504895041_3964057297242101_5019402264860843098_n%20%281%29.jpg',
    withMinisterYouth: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWZz5OrLclzR6MBk-bXn9fo4xyNNfvf7nYRJ6W9mySs8tPeWHSGiRLKv207csQnDXI_aXU1Uy2OvpTA6dB38yEtMCGi3shdt5v7Nay_QL-18mN4JsnSZyvq1oe-Lw-AZ547OJ_3SuEVFhIyoWpeF6eOeBrpXx9f5NFt7NGigMwNC4TomjjxGK3afFc1XVO/s1600/12.png',
    withDeputyMinisterMCIT: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLpDUzWq2DVZtX1o7Fd3lNEkDzU1LiIJfRnRuo8LeKosBvfRGTu5ofSBKx7G2JBXBjLYS6S4UEnxbICTJHa3FFy4NxzLaE7Yup0X21fCPRMhBumtuOMYD4My1MFYYPNGpiPsEtZGGFW0LNm1nhD5oHHxRVkA7quSHlzpjomPU4usqKpaCFRa72ySZ6_-Ex/s1600/photo_14_2026-01-22_20-53-02.jpg',
    robovaiLogo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT1ljjarNl30XMrp3udkbhcbf_T6G7ijnFrF9FSSIqXU3q78tkPHXbIBL5O2-FzOWmhK3IoflkNEixJ2JctDnJf6mCkl81oQDdXL0T9VShzJCFZU-e7AnaLCcNXFHd-mKku0OQ37gxQDUr1jbmvQUFvdRvNEfAzURH8uv1LQbYLMvoqNRoAILrrS8INq2m/s1600/RoboVAI%20Solutions.png',
  };

  const galleryItems = [
    {
      url: images.portrait,
      title: 'Mohamed Shaban Ibrahim',
      desc: 'Official Executive Portrait — Founder & Intelligence Systems Architect',
    },
    {
      url: images.withMinisterYouth,
      title: 'With H.E. Minister of Youth & Sports',
      desc: 'Official discussion & honor during national technology and youth empowerment leadership summit.',
    },
    {
      url: images.withDeputyMinisterMCIT,
      title: 'With Deputy Minister of Communications (MCIT)',
      desc: 'At MCIT Deputy Minister\'s Office for Institutional Development, driving digital transformation & AI evaluation.',
    },
    {
      url: images.robovaiLogo,
      title: 'RoboVAI Solutions Brand',
      desc: 'Founder-Led Ecosystem building B2B SaaS, Edge AI, and 5-Layer Hybrid RAG Systems.',
    },
  ];

  const governanceDoctrines = [
    {
      num: '01',
      title: '100% Data Sovereignty & IP Ownership',
      desc: 'Zero vendor lock-in. Every line of code, custom algorithm, and fine-tuned AI parameter belongs strictly to the enterprise.',
    },
    {
      num: '02',
      title: 'Sub-Millisecond DeepTech Integrity',
      desc: 'Engineered for high-stakes operational environments, sub-millisecond response times, and 99.99% system availability.',
    },
    {
      num: '03',
      title: 'Air-Gapped Private AI & Local SLMs',
      desc: 'Self-hosted LLMs, vector search, and LEANN Store memory operating strictly within private boundaries with zero external telemetry.',
    },
    {
      num: '04',
      title: 'Open Source & Zero Gatekeeping',
      desc: 'Democratizing technology for researchers and engineers. Code built openly with full transparency and community leadership.',
    },
  ];

  const competencies = [
    {
      category: 'Software & Systems Architecture',
      icon: Code2,
      skills: ['Python', '.NET 8', 'Node.js (JS/TS)', 'React', 'FastAPI', 'PostgreSQL', 'Docker', 'Git', 'System Architecture'],
      color: 'border-blue-200 bg-blue-50/60 text-blue-700',
    },
    {
      category: 'Artificial Intelligence & RAG',
      icon: Brain,
      skills: ['Local SLMs (Ollama, llama.cpp)', 'AI Agents (LangChain, LlamaIndex)', 'VAI-Atmani 5-Layer Hybrid RAG', 'LightRAG', 'Vector Search (HNSW, BM25)', 'mem0 Contextual Memory', 'MLOps'],
      color: 'border-cyan-200 bg-cyan-50/60 text-cyan-700',
    },
    {
      category: 'Hardware & Mechatronics Robotics',
      icon: Cpu,
      skills: ['Cyber-Physical Systems', 'Robotics & Edge AI', 'Robofy YOLO ALPR Vision', 'IoT & Embedded Logic', 'Mechatronics Engineering'],
      color: 'border-purple-200 bg-purple-50/60 text-purple-700',
    },
    {
      category: 'Product, SaaS & GTM Execution',
      icon: Layers,
      skills: ['MVP Development', 'Agile Sprint Management', 'Go-To-Market (GTM)', 'B2B SaaS Operations', 'n8n Workflow Automation'],
      color: 'border-indigo-200 bg-indigo-50/60 text-indigo-700',
    },
  ];

  const experience = [
    {
      role: 'Researcher',
      organization: "Deputy Minister's Office for Institutional Development, MCIT, Egypt",
      period: 'Jul 2025 – Dec 2025',
      desc: 'Supported institutional modernization by evaluating AI-driven frameworks and streamlining workflows across 3+ cross-functional committees.',
    },
    {
      role: 'AI & Digital Transformation Engineer',
      organization: 'OMC Group (Formerly Omal Misr)',
      period: 'Jun 2024 – May 2025',
      desc: 'Modernized 4 platforms and integrated cross-platform n8n automated AI workflows across HR and finance, reducing bottlenecks by ~30%. Directed product workflows for Kolena Wahed platform & trained 50+ staff.',
    },
    {
      role: 'AI Solutions Engineer & Founder',
      organization: 'RobovAI Solutions',
      period: '2023 – Present',
      desc: 'Engineered the "VAI-Atmani 5-Layer Hybrid RAG Framework" (93%+ RAM reduction, 175ms latency using LEANN Store, BM25, LightRAG). Developed Robofy Parking Edge AI (YOLO ALPR) and deployed B2B SaaS platforms (pos.robovai.tech, nova.robovai.tech).',
    },
    {
      role: 'Technical Operations Specialist',
      organization: 'Merkato Industrial Platform',
      period: 'Jan 2024 – Aug 2024',
      desc: 'Streamlined B2B operations and end-to-end user onboarding flows, improving platform retention metrics and contributing to the GESR SaaS prize.',
    },
  ];

  const certifications = [
    'HCIA-AI V3.5 (Huawei)',
    'AI Specialist (NTI)',
    'Generative AI Developer (Sprints)',
    'Intro to Cybersecurity (Cisco)',
    'Digital Transformation (IEEE & Microsoft)',
    'IoT & Embedded Systems (UC Irvine)',
    'Digital Manufacturing & Design (UBuffalo)',
    'Certified SolidWorks Professional (CSWP)',
    'Digital Marketing Professional (IMTF, Portugal)',
    'Sustainable Development Ambassador (Min. of Planning)',
  ];

  return (
    <div className="py-10 bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-600 selection:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={() => setActiveTab('home')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Nesronix Home</span>
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={links.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold transition-all shadow-sm"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>msalatmani.org</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 text-xs font-bold transition-all shadow-sm"
            >
              <Github className="w-3.5 h-3.5 text-slate-700" />
              <span>m0shaban</span>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 hover:bg-blue-100 text-xs font-bold transition-all shadow-sm"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-600" />
              <span>msalatmani</span>
            </a>
          </div>
        </div>

        {/* ── Executive Hero Header Banner ── */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl mb-12">
          {/* Ambient Radial Background Accents */}
          <div className="absolute -top-24 -right-24 w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Founder Portrait Photo & Quick Badges */}
            <div className="lg:col-span-4 flex flex-col items-center text-center sm:text-left sm:items-start space-y-4">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-70 blur-md group-hover:opacity-100 transition-all duration-300" />
                <img
                  src={images.portrait}
                  alt="Mohamed Shaban Ibrahim"
                  className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl object-cover border-2 border-white/20 shadow-2xl"
                />
                <button
                  onClick={() => setSelectedImage({ url: images.portrait, title: 'Mohamed Shaban Ibrahim', desc: 'Founder & Intelligence Systems Architect' })}
                  className="absolute bottom-2 right-2 p-2 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-sm border border-white/20 transition-all"
                  title="View Photo"
                >
                  <Camera className="w-4 h-4 text-cyan-400" />
                </button>
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>EXECUTIVE OFFICE • FOUNDER &amp; CEO</span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  6th of October, Egypt &nbsp;•&nbsp; msalatmani.org
                </p>
              </div>
            </div>

            {/* Founder Main Info & Bio */}
            <div className="lg:col-span-8 space-y-5">
              
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                  Mohamed Shaban Ibrahim
                </h1>
                <p className="text-lg text-gradient-blue font-mono font-bold">
                  محمد شعبان إبراهيم العتماني &nbsp;•&nbsp; Systems Architect &amp; AI Engineer
                </p>
              </div>

              <p className="text-slate-300 text-base leading-relaxed font-normal max-w-3xl">
                Intelligence Systems Architect adept at integrating high-stakes software engineering with business goals. 
                Pioneer of the <strong>VAI-Atmani 5-Layer Hybrid RAG Framework</strong> and founder of <strong>RobovAI Solutions</strong> and 
                the <strong>Nesronix Open Source Community</strong>. Specializes in local SLMs, autonomous AI multi-agent workflows, 
                cybersecurity, and sovereign technology platforms.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={links.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all hover:scale-105"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit msalatmani.org</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={links.robovai}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-sm border border-slate-700 transition-all hover:scale-105"
                >
                  <Bot className="w-4 h-4" />
                  <span>robovai.tech</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={links.email}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-blue-950/80 hover:bg-blue-900 text-blue-200 font-bold text-sm border border-blue-800 transition-all"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>msalatmani@gmail.com</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* ── Official Founder Statement Section ("كلمة المؤسس") ── */}
        <div className="relative overflow-hidden bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md mb-12 space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
                <Quote className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  كلمة المؤسس &nbsp;|&nbsp; <span className="text-blue-600">Founder's Official Statement</span>
                </h2>
                <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Official Corporate Doctrine &amp; Vision — Mohamed Shaban Ibrahim
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>Official Document</span>
            </div>
          </div>

          {/* Dual Language Quote Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Arabic Statement */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4 text-right dir-rtl">
              <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-wide block">
                « البيان الرسمي للمؤسس باللغة العربية »
              </span>
              <blockquote className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed font-sans">
                "التكنولوجيا الحقيقية لا تُستأجر من المنصات المغلقة، بل تُبنى وتُملك داخل الجدران التقنية للمؤسسة نفسها. 
                في نيسرونكس و روبوفاي، نؤمن بأن المستقبل ينتمي للأنظمة الرقمية السيادية (Sovereign Systems)، التي تكفل 
                السرية التامة للبيانات، والاستجابة الفائقة بأجزاء من الثانية، والعمل المفتوح بدون قيود أو طبقية بين المطورين."
              </blockquote>
              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-900">م/ محمد شعبان إبراهيم العتماني</span>
                <span className="font-mono">مؤسس نيسرونكس وروبوفاي</span>
              </div>
            </div>

            {/* English Statement */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-4">
              <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-wide block">
                " Official English Executive Doctrine "
              </span>
              <blockquote className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed italic">
                "True enterprise technology is not rented from third-party vendor platforms; it is engineered and 
                owned inside the organization's digital fortress. We build AI systems and open-source infrastructure 
                to ensure 100% data sovereignty, sub-millisecond execution, and complete freedom for the developer community."
              </blockquote>
              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-900">Mohamed Shaban Ibrahim</span>
                <span className="font-mono">Founder &amp; Systems Architect</span>
              </div>
            </div>

          </div>

          {/* Strategic Governance Doctrines Grid */}
          <div className="pt-6 border-t border-slate-100">
            <h3 className="text-center text-sm font-mono font-bold uppercase text-slate-500 tracking-wider mb-6">
              المبادئ الاستراتيجية لرئاسة المؤسسة • Strategic Governance Doctrines
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {governanceDoctrines.map((doc, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-mono font-bold text-xs">
                      {doc.num}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{doc.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Interactive VIP Leadership & Media Gallery ── */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
              <Camera className="w-7 h-7 text-blue-600" />
              <span>معرض الصور واللقاءات الرسمية • Media &amp; Leadership Gallery</span>
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              صور رسمية من اللقاءات الوزارية والمحافل التقنية (مأخوذة من الكود المصدري لـ msalatmani.org).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer bg-white rounded-2xl p-3 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative overflow-hidden rounded-xl h-44 bg-slate-900 mb-3">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-95 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-xs font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> انقر للتكبير
                    </span>
                  </div>
                </div>

                <div className="px-1 pb-1">
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1 mb-0.5">{item.title}</h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Competencies Grid ── */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Core Competencies &amp; Technical Capabilities
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From low-latency Hybrid RAG &amp; local SLMs to enterprise SaaS and mechatronics robotics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competencies.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{comp.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {comp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${comp.color}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Work Experience Timeline ── */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
              <Briefcase className="w-7 h-7 text-blue-600" />
              <span>المسار المهني • Work Experience</span>
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Public sector digital transformation, B2B SaaS product engineering, and AI solutions.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-start justify-between gap-4"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-blue-50 text-blue-700 font-bold border border-blue-200">
                      {exp.organization}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {exp.desc}
                  </p>
                </div>

                <div className="flex-shrink-0 text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg self-start">
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education & Honors Split Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Education & Academic Excellence */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Education &amp; Academic Honors</h3>
                <p className="text-xs text-slate-500 font-mono">B.Sc. in Mechatronics Engineering (2019 – 2024)</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex flex-wrap items-center justify-between text-xs font-mono font-bold text-slate-800 gap-2">
                <span>High Institute of Engineering, 6th of October</span>
                <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Grade: Excellent</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Graduation Project:</strong> AI-Powered Environmental Robotics. Designed and developed an 
                autonomous oil skimmer boat system integrating computer vision and IoT.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">
                Leadership &amp; Community Roles
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Student Union President &amp; IEEE RAS 06U Chair</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Electronic &amp; Young Engineers Committees (Engineers Syndicate, Giza)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Advisor to Giza Governorate (Tahya Misr Youth Union) &amp; Volunteer AI Engineer</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Honors, Certifications & Media */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Honors &amp; Certifications</h3>
                <p className="text-xs text-slate-500 font-mono">Global recognitions &amp; accredited certificates</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                <Tv className="w-4 h-4 text-amber-600" />
                <span>Shields of Excellence &amp; Media Appearances</span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">
                Awarded Shields of Excellence from Libyan Ministry of Labor &amp; Moroccan Chamber of Commerce. 
                Featured across 5+ major TV networks (Nile Cultural, TEN TV, Channel 2).
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider mb-3">
                Key Professional Certifications (40+ Total)
              </h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, cIdx) => (
                  <span key={cIdx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Executive Callout Banner ── */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-950 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">For Complete Documentation &amp; 40+ Verified Credentials</h3>
            <p className="text-xs text-slate-300 font-mono">
              Explore the full interactive portfolio website at Msalatmani.org
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={links.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-md"
            >
              <Globe className="w-4 h-4" />
              <span>Visit Msalatmani.org</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => setActiveTab('home')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all border border-slate-700"
            >
              <span>Back to Main Home</span>
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl max-w-3xl w-full border border-slate-800 overflow-hidden shadow-2xl space-y-4 p-6 relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <img src={selectedImage.url} alt={selectedImage.title} className="max-h-[60vh] w-auto object-contain" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">{selectedImage.title}</h3>
              <p className="text-xs text-slate-400 font-mono">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
