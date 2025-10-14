// ============================================================================
// FILE 6: client/src/components/layout/Navbar.jsx
// Updated navbar to match your design
// ============================================================================

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar({ user }) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { name: 'Chat', path: '/chat' },
    { name: 'Meals', path: '/meals' },
    { name: 'Progress', path: '/progress' },
    { name: 'Reports', path: '/reports' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <span className="text-lg font-heading font-semibold text-gray-800">Sakhee</span>
          </Link>

          {/* Center: AI-Powered text */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-xs text-gray-500 hidden md:block">
            AI-Powered PCOS Management App
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2"
              >
                <span className={`text-sm font-medium transition-colors ${
                  isActive(item.path) 
                    ? 'text-primary-600' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}>
                  {item.name}
                </span>
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
          
          {/* User Section */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/settings')}
              className="p-2 hover:bg-purple-50 rounded-full transition-colors"
              aria-label="Settings"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-200 cursor-pointer hover:bg-pink-100 transition-colors">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-pink-400 flex items-center justify-center">
                <span className="text-white text-xs font-bold">
                  {user?.name?.charAt(0) || 'P'}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-800">{user?.name || 'Priya'}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}