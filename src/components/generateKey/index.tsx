"use client";

import { useState, FormEvent } from "react";
import { Winrar_KeyGen } from "@/utils/generatekey";
import { saveAs } from "file-saver";
import { FiDownload } from "react-icons/fi";

export default function GenerateKey() {
  const [registerName, setRegisterName] = useState("WinRAR");
  const [licenseType, setLicenseType] = useState("Single-PC License");

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
          <h1 className="text-3xl font-bold text-white">WinRAR Keygen</h1>
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
            <select
              id="licenseType"
              value={licenseType}
              onChange={(e) => setLicenseType(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg 
                focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                outline-none text-white placeholder-gray-400 
                transition-all appearance-none cursor-pointer
                bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')]
                bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat"
            >
              <option value="Single-PC License" className="bg-gray-800 text-white">
                Single-PC License
              </option>
              <option value="Corporate License" className="bg-gray-800 text-white">
                Corporate License
              </option>
              <option
                value="Site License"
                className="bg-gray-800 text-white"
              >
                Site License
              </option>
              <option value="Unlimited Worldwide License" className="bg-gray-800 text-white">
                Unlimited Worldwide License
              </option>
            </select>
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
