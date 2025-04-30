import { useState } from "react";

export default function NotificationContent() {
    const [emailNotif, setEmailNotif] = useState({
      comments: true,
      mentions: false,
      updates: true,
    });
    const [pushNotif, setPushNotif] = useState({
      messages: true,
      reminders: false,
    });
  
    return (
      <div className="bg-gray-800 rounded-2xl p-8 space-y-10 shadow-lg">
        {/* 1. Email Notifications */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Email Notifications</h2>
          <p className="text-gray-400">Manage your email notification preferences</p>
          <div className="space-y-4">
            {Object.entries(emailNotif).map(([key, enabled]) => (
              <label
                key={key}
                className="flex items-center justify-between p-4 bg-gray-900 rounded-xl"
              >
                <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={() =>
                    setEmailNotif({ ...emailNotif, [key]: !enabled })
                  }
                  className="h-5 w-5 text-blue-500 bg-gray-700 border-gray-600 rounded"
                />
              </label>
            ))}
          </div>
        </section>
  
        {/* 2. Push Notifications */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Push Notifications</h2>
          <p className="text-gray-400">Control which push alerts you receive</p>
          <div className="space-y-4">
            {Object.entries(pushNotif).map(([key, enabled]) => (
              <label
                key={key}
                className="flex items-center justify-between p-4 bg-gray-900 rounded-xl"
              >
                <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={() =>
                    setPushNotif({ ...pushNotif, [key]: !enabled })
                  }
                  className="h-5 w-5 text-blue-500 bg-gray-700 border-gray-600 rounded"
                />
              </label>
            ))}
          </div>
        </section>
  
        {/* 3. Notification Frequency */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Notification Frequency</h2>
          <p className="text-gray-400">Set how often you’d like to receive digests</p>
          <div className="flex items-center gap-4">
            <select className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500">
              <option>Immediately</option>
              <option>Hourly</option>
              <option>Daily</option>
              <option>Weekly</option>
            </select>
            <button className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-500">
              Save Preferences
            </button>
          </div>
        </section>
      </div>
  );
  }
  