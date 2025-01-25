import React from 'react';
import { Laptop2 } from 'lucide-react';

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="relative">
        {/* Logo and Title */}
        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Laptop2 className="w-8 h-8 text-indigo-600" strokeWidth={1.5} />
            <span className="text-2xl font-semibold text-slate-800">WebDev</span>
          </div>
          <div className="h-1 w-12 mx-auto bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full" />
        </div>

        {/* Laptop Container */}
        <div className="relative w-72 h-52 bg-slate-800 rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          {/* Screen Content */}
          <div className="h-full bg-slate-900 rounded-md overflow-hidden border border-slate-700">
            {/* Terminal Header */}
            <div className="h-6 bg-slate-800 border-b border-slate-700 flex items-center px-3">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-3">
              <div className="typing-container font-mono text-xs">
                <div className="typing-line">
                  <span className="text-emerald-400">$</span>
                  <span className="typing-text ml-2 text-slate-300">Initializing project...</span>
                </div>
                <div className="typing-line">
                  <span className="text-emerald-400">$</span>
                  <span className="typing-text ml-2 text-slate-300">Installing dependencies...</span>
                </div>
                <div className="typing-line">
                  <span className="text-emerald-400">$</span>
                  <span className="typing-text ml-2 text-slate-300">Building application...</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="progress-bar h-full w-full bg-gradient-to-r from-indigo-600 to-indigo-400"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Laptop Base */}
        <div className="w-80 h-1 bg-slate-800 mx-auto"></div>
        <div className="w-48 h-3 bg-slate-800 mx-auto rounded-b-xl"></div>
        
        {/* Status Text */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full text-center">
          <p className="text-slate-600 text-sm font-medium tracking-wide">PREPARING YOUR ENVIRONMENT</p>
          <p className="text-slate-400 text-xs mt-1">This may take a few moments</p>
        </div>
      </div>
    </div>
  );
}