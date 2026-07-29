import React, { useState } from 'react';
import { ActiveTab } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 font-sans selection:bg-brand-500 selection:text-white">
      
      {/* Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenJoinModal={() => setIsJoinModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero 
              setActiveTab={setActiveTab} 
              onOpenJoinModal={() => setIsJoinModalOpen(true)} 
            />
            <Ecosystem />
            <Projects />
            <Labs />
            <Academy onOpenJoinModal={() => setIsJoinModalOpen(true)} />
            <Community onOpenJoinModal={() => setIsJoinModalOpen(true)} />
            <Governance />
          </>
        )}

        {activeTab === 'ecosystem' && <Ecosystem />}

        {activeTab === 'projects' && <Projects />}

        {activeTab === 'labs' && <Labs />}

        {activeTab === 'academy' && (
          <Academy onOpenJoinModal={() => setIsJoinModalOpen(true)} />
        )}

        {activeTab === 'community' && (
          <Community onOpenJoinModal={() => setIsJoinModalOpen(true)} />
        )}

        {activeTab === 'governance' && <Governance />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Join Application Modal */}
      <JoinModal 
        isOpen={isJoinModalOpen} 
        onClose={() => setIsJoinModalOpen(false)} 
      />

    </div>
  );
};

export default App;
