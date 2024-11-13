"use client";

import { useState, FormEvent } from "react";
import { Winrar_KeyGen } from "@/utils/generatekey";
import { saveAs } from "file-saver";
import { FiDownload, FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function GenerateKey() {
  const [registerName, setRegisterName] = useState("Winrar");
  const [licenseType, setLicenseType] = useState("Single PC");
  const { theme, setTheme } = useTheme();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (registerName && licenseType) {
      const response = Winrar_KeyGen(registerName, licenseType);
      const blob = new Blob([response], { type: "text/plain;charset=utf8" });
      saveAs(blob, "rarreg.key");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700">
          <h1 className="text-3xl font-bold text-white">Winrar Keygen</h1>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="registerName"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Register Name
            </label>
            <input
              type="text"
              id="registerName"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all"
              placeholder="Enter your register name"
            />
          </div>

          <div>
            <label
              htmlFor="licenseType"
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              License Type
            </label>
            <input
              type="text"
              id="licenseType"
              value={licenseType}
              onChange={(e) => setLicenseType(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all"
              placeholder="Enter license type (personal, business, enterprise)"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center"
          >
            <FiDownload className="mr-2" />
            Generate License
          </button>
        </form>
      </div>
    </div>
  );
}
