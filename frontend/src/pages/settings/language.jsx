import React from "react";

const LanguageContent = () => {
  return (
    <div className="p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Language & Region</h2>

      <div className="space-y-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2">Preferred Language</h3>
          <p className="text-sm text-gray-400 mb-2">
            Select the language you want to use throughout the app.
          </p>
          <select
            className="w-full bg-gray-700 text-white p-2 rounded-md"
            defaultValue="en"
          >
            <option value="en">English (United States)</option>
            <option value="es">Español (Spanish)</option>
            <option value="fr">Français (French)</option>
            <option value="de">Deutsch (German)</option>
            <option value="zh">中文 (Chinese)</option>
            <option value="ja">日本語 (Japanese)</option>
          </select>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium text-lg mb-2">Region Format</h3>
          <p className="text-sm text-gray-400 mb-2">
            This will affect how dates, times, and numbers are shown.
          </p>
          <select
            className="w-full bg-gray-700 text-white p-2 rounded-md"
            defaultValue="us"
          >
            <option value="us">India</option>
            <option value="uk">United States</option>
            <option value="eu">United Kingdom</option>
            <option value="jp">Japan</option>
            <option value="cn">China</option>
            <option value="cn">Canada</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LanguageContent;
