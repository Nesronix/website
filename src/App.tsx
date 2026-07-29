import React, { useState } from 'react';
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
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState<boolean>(false);

  const openJoin = () => setIsJoinModalOpen(true);
  const closeJoin = () => setIsJoinModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenJoinModal={openJoin}
      />

      {/* Main Content */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={setActiveTab} onOpenJoinModal={openJoin} />
            <FounderStory onOpenJoinModal={openJoin} />
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
      </main>

      {/* Footer */}
      <Footer />

      {/* Join Modal */}
      <JoinModal isOpen={isJoinModalOpen} onClose={closeJoin} />
    </div>
  );
};

export default App;
