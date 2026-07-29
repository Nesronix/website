import React, { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FounderStory } from './components/FounderStory';
import { Ecosystem } from './components/Ecosystem';
import { Projects } from './components/Projects';
import { Labs } from './components/Labs';
import { Academy } from './components/Academy';
import { Community } from './components/Community';
import { Governance } from './components/Governance';
import { JoinModal } from './components/JoinModal';
import { FounderPage } from './components/FounderPage';
import { Footer } from './components/Footer';

const detectInitialTab = (): ActiveTab => {
  const host = window.location.hostname.toLowerCase();
  const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
  const hash = window.location.hash.toLowerCase().replace('#', '');

  if (host.startsWith('founder.') || path === '/founder' || path.startsWith('/founder/') || hash === 'founder') {
    return 'founder';
  }
  const validTabs: ActiveTab[] = ['home', 'ecosystem', 'projects', 'labs', 'academy', 'community', 'governance', 'contact', 'founder'];
  if (validTabs.includes(hash as ActiveTab)) {
    return hash as ActiveTab;
  }
  const cleanPath = path.replace(/^\//, '') as ActiveTab;
  if (validTabs.includes(cleanPath)) {
    return cleanPath;
  }
  return 'home';
};

export const App: React.FC = () => {
  const [activeTab, setActiveTabState] = useState<ActiveTab>(detectInitialTab);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState<boolean>(false);

  const handleSetActiveTab = (tab: ActiveTab) => {
    setActiveTabState(tab);
    if (tab === 'founder') {
      window.history.pushState({}, '', '/founder');
    } else if (tab === 'home') {
      window.history.pushState({}, '', '/');
    } else {
      window.history.pushState({}, '', `/${tab}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const syncRoute = () => {
      setActiveTabState(detectInitialTab());
    };
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
    };
  }, []);

  const openJoin = () => setIsJoinModalOpen(true);
  const closeJoin = () => setIsJoinModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleSetActiveTab}
        onOpenJoinModal={openJoin}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={handleSetActiveTab} onOpenJoinModal={openJoin} />
            <FounderStory onOpenJoinModal={openJoin} setActiveTab={handleSetActiveTab} />
            <Ecosystem />
            <Projects />
            <Labs onOpenJoinModal={openJoin} />
            <Academy onOpenJoinModal={openJoin} />
            <Community onOpenJoinModal={openJoin} />
            <Governance />
          </>
        )}

        {activeTab === 'ecosystem' && <Ecosystem />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'labs' && <Labs onOpenJoinModal={openJoin} />}
        {activeTab === 'academy' && <Academy onOpenJoinModal={openJoin} />}
        {activeTab === 'community' && <Community onOpenJoinModal={openJoin} />}
        {activeTab === 'governance' && <Governance />}
        {activeTab === 'founder' && <FounderPage setActiveTab={handleSetActiveTab} onOpenJoinModal={openJoin} />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Join Modal */}
      <JoinModal isOpen={isJoinModalOpen} onClose={closeJoin} />
    </div>
  );
};

export default App;
