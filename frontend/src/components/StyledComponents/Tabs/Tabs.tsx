'use client';
import './Tabs.css';
import { useState } from 'react';

interface Tab {
  label: string;
  component: React.ReactNode;
}

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="tabs">
      <div className="tabs-header f g-1">
        {tabs.map((tab) => (
          <button className={`tab p-1-a br-1 ${activeTab === tab.label ? 'bs-s bw-1' : 'b-n'}`} key={tab.label} onClick={() => setActiveTab(tab.label)}>
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content mt-1">
        {tabs.find((tab) => tab.label === activeTab)?.component}
      </div>
    </div>
  );
}
