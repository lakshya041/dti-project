import React, { useState } from 'react';
import SettingsContent from './settings';
import NotificationContent from './notifications';
import PrivacyContent from './privacy';
import SecurityContent from './security';
import LanguageContent from './language';
import HelpContent from './help';

export default function EmployeeSettingsPage() {
  const tabs = {
    'Settings':SettingsContent,
    'Notifications':NotificationContent,
    'Privacy Settings': PrivacyContent,
    'Security & Login Activity': SecurityContent,
    'Language & Region':LanguageContent,
    'Help & Support':HelpContent,
};
  const [activeTab, setActiveTab] = useState('Settings');
  const tabKeys = Object.keys(tabs);
  const ActiveComponent = tabs[activeTab];

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="flex space-x-2 mb-8">
        {tabKeys.map((tabKey) => (
          <button
            key={tabKey}
            onClick={() => setActiveTab(tabKey)}
            className={`cursor-pointer px-4 py-2 rounded-2xl text-sm font-medium transition ${
              activeTab === tabKey ? 'bg-gray-200 text-gray-900' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {tabKey}
          </button>
        ))}
      </div>
      <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
        <ActiveComponent/>
      </div>
    </div>
  );
}
