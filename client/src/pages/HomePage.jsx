import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from '../components/ui';

export default function Home() {
  const navigate = useNavigate();
  const userName = "Priya"; // Get from store

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-100 via-pink-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-3">
            Welcome back, {userName}! 🌸
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your AI companion for managing PCOS with confidence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/chat')}
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Open Chat
            </button>
            <button 
              onClick={() => navigate('/meals')}
              className="px-8 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-full font-medium hover:bg-primary-50 transform hover:scale-105 transition-all"
            >
              View Meal Plans
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: '🤖', title: 'AI-Powered Support', desc: '24/7 personal guidance based on evidence-based research', color: 'bg-purple-100' },
            { icon: '💜', title: 'Customized Care', desc: 'Personalized recommendations tailored to your unique needs', color: 'bg-pink-100' },
            { icon: '🍽️', title: 'Meal Planning', desc: 'Regional Indian recipes designed for PCOS management', color: 'bg-orange-100' },
            { icon: '📊', title: 'Progress Tracking', desc: 'Monitor your journey with visual insights and analytics', color: 'bg-cyan-100' },
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center text-3xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-2">
            ✨ Quick Actions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              onClick={() => navigate('/chat')}
              className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 text-left hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-heading font-bold text-lg mb-1">Start Chat</h3>
              <p className="text-sm opacity-90">Get instant answers to your PCOS questions</p>
            </button>

            <button 
              onClick={() => navigate('/progress')}
              className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl p-6 text-left hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-heading font-bold text-lg mb-1">Track Symptoms</h3>
              <p className="text-sm opacity-90">Log how you're feeling today</p>
            </button>

            <button 
              onClick={() => navigate('/reports')}
              className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-2xl p-6 text-left hover:shadow-lg transform hover:scale-105 transition-all"
            >
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-heading font-bold text-lg mb-1">Upload Report</h3>
              <p className="text-sm opacity-90">Get AI-powered analysis of your lab results</p>
            </button>
          </div>
        </div>

        {/* Empathy Message */}
        <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 flex items-center gap-4">
          <div className="text-3xl">💜</div>
          <p className="text-gray-700">
            <strong>You're not alone.</strong> Thousands of women are on this journey with you, finding balance and wellness every day.
          </p>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="bg-yellow-50 border-t border-yellow-200 py-4">
        <p className="text-center text-xs text-gray-600 max-w-4xl mx-auto px-6">
          ⚠️ <strong>Medical Disclaimer:</strong> This platform provides educational information only. Always consult with a qualified healthcare provider for medical advice, diagnosis, or treatment.
        </p>
      </div>
    </div>
  );
}