import React from "react";

const SecurityContent = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Security Settings</h2>

      <div className="space-y-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-400 mb-2">
            Add an extra layer of protection to your account by enabling 2FA.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
            Enable 2FA
          </button>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2">Change Password</h3>
          <p className="text-sm text-gray-400 mb-4">
            It’s a good idea to use a strong password that you don’t use elsewhere.
          </p>
          <div className="space-y-2">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full bg-gray-700 text-white p-2 rounded-md"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full bg-gray-700 text-white p-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full bg-gray-700 text-white p-2 rounded-md"
            />
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
              Update Password
            </button>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2">Recent Login Activity</h3>
          <p className="text-sm text-gray-400 mb-2">
            Monitor your recent logins to detect any suspicious activity.
          </p>
          <ul className="text-sm text-gray-300 list-disc pl-5">
            <li>Chrome on MacOS – San Francisco, CA – Apr 21, 2025</li>
            <li>Safari on iOS – Los Angeles, CA – Apr 20, 2025</li>
            <li>Firefox on Windows – Unknown Location – Apr 18, 2025</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecurityContent;
