import React from "react";

const PrivacyContent = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>

      <div className="space-y-6">
        <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
          <div>
            <h3 className="font-medium text-lg">Profile Visibility</h3>
            <p className="text-sm text-gray-400">Control who can see your profile information.</p>
          </div>
          <select className="bg-gray-700 text-white p-2 rounded-md">
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="connections">Connections Only</option>
          </select>
        </div>

        <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
          <div>
            <h3 className="font-medium text-lg">Search Engine Indexing</h3>
            <p className="text-sm text-gray-400">Allow search engines to index your profile.</p>
          </div>
          <input type="checkbox" className="w-5 h-5 accent-blue-600" />
        </div>

        <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg">
          <div>
            <h3 className="font-medium text-lg">Data Sharing</h3>
            <p className="text-sm text-gray-400">Allow sharing of your data with third-party services.</p>
          </div>
          <input type="checkbox" className="w-5 h-5 accent-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;
