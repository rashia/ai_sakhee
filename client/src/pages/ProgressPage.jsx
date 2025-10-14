// ============================================================================
// FILE 2: client/src/pages/ProgressPage.jsx
// COMPLETE REDESIGN - Progress tracking with charts
// ============================================================================

import React, { useState } from 'react';

export default function ProgressPage() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [energyLevel, setEnergyLevel] = useState(5);
  const [painLevel, setPainLevel] = useState(0);
  const [sleepHours, setSleepHours] = useState(7);
  const [chartView, setChartView] = useState('Line');

  const metrics = [
    { icon: '⚖️', value: '2.2kg', label: 'Weight Progress', sublabel: 'Lost in 6 weeks', color: 'bg-purple-50 border-purple-200' },
    { icon: '😊', value: '35%', label: 'Symptom Improvement', sublabel: 'Overall reduction', color: 'bg-pink-50 border-pink-200' },
    { icon: '📅', value: '28d', label: 'Cycle Regularity', sublabel: 'Current cycle length', color: 'bg-orange-50 border-orange-200' },
    { icon: '⚡', value: '7.5h', label: 'Energy Levels', sublabel: 'Avg sleep quality', color: 'bg-cyan-50 border-cyan-200' },
  ];

  const moods = [
    { emoji: '😢', label: 'Sad' },
    { emoji: '😐', label: 'Neutral' },
    { emoji: '🙂', label: 'Good' },
    { emoji: '😊', label: 'Happy' },
    { emoji: '🥰', label: 'Great' },
  ];

  const handleSaveEntry = () => {
    alert('Saving today\'s entry...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            ←
          </button>
          <h1 className="text-xl font-heading font-bold text-gray-900">
            Your PCOS Journey 📊
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`${metric.color} border rounded-2xl p-4`}
            >
              <div className="text-3xl mb-2">{metric.icon}</div>
              <p className="text-2xl font-heading font-bold text-gray-900">
                {metric.value}
              </p>
              <p className="text-sm font-medium text-gray-800">{metric.label}</p>
              <p className="text-xs text-gray-600">{metric.sublabel}</p>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-heading font-bold text-gray-900">
              Weight Progress Over Time
            </h2>
            <div className="flex gap-2">
              {['Line', 'Bar'].map((view) => (
                <button
                  key={view}
                  onClick={() => setChartView(view)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    chartView === view
                      ? 'bg-gradient-to-r from-primary-600 to-pink-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>

          {/* Simple Chart Placeholder */}
          <div className="h-64 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-500">
              <span>68</span>
              <span>67</span>
              <span>66</span>
              <span>65</span>
              <span>64</span>
            </div>

            {/* Chart area */}
            <div className="ml-10 h-full relative">
              <svg className="w-full h-full" viewBox="0 0 600 200">
                {/* Grid lines */}
                <line x1="0" y1="40" x2="600" y2="40" stroke="#f0f0f0" strokeWidth="1" />
                <line x1="0" y1="80" x2="600" y2="80" stroke="#f0f0f0" strokeWidth="1" />
                <line x1="0" y1="120" x2="600" y2="120" stroke="#f0f0f0" strokeWidth="1" />
                <line x1="0" y1="160" x2="600" y2="160" stroke="#f0f0f0" strokeWidth="1" />

                {/* Line chart */}
                <path
                  d="M 50,30 L 150,60 L 250,80 L 350,100 L 450,120 L 550,140"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Data points */}
                <circle cx="50" cy="30" r="5" fill="#d946ef" />
                <circle cx="150" cy="60" r="5" fill="#d946ef" />
                <circle cx="250" cy="80" r="5" fill="#d946ef" />
                <circle cx="350" cy="100" r="5" fill="#d946ef" />
                <circle cx="450" cy="120" r="5" fill="#d946ef" />
                <circle cx="550" cy="140" r="5" fill="#d946ef" />

                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d946ef" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>

              {/* X-axis labels */}
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
                <span>Week 5</span>
                <span>Week 6</span>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Tracking */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-lg font-heading font-bold text-gray-900 mb-6">
            How are you feeling today?
          </h2>

          {/* Mood Selector */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 mb-3 block">
              Mood
            </label>
            <div className="flex gap-3 justify-center">
              {moods.map((mood, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedMood(mood.label)}
                  className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                    selectedMood === mood.label
                      ? 'bg-primary-100 border-2 border-primary-500'
                      : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-3xl mb-1">{mood.emoji}</span>
                  <span className="text-xs text-gray-600">{mood.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Energy Level Slider */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Energy Level: {energyLevel}/10
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={energyLevel}
              onChange={(e) => setEnergyLevel(e.target.value)}
              className="w-full h-2 bg-gradient-to-r from-primary-200 to-pink-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #d946ef 0%, #ec4899 ${energyLevel * 10}%, #e5e7eb ${energyLevel * 10}%, #e5e7eb 100%)`,
              }}
            />
          </div>

          {/* Pain Level Slider */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Pain Level: {painLevel}/10
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={painLevel}
              onChange={(e) => setPainLevel(e.target.value)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #d946ef 0%, #ec4899 ${painLevel * 10}%, #e5e7eb ${painLevel * 10}%, #e5e7eb 100%)`,
              }}
            />
          </div>

          {/* Sleep Hours */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Sleep (hours): {sleepHours}h
            </label>
            <input
              type="range"
              min="0"
              max="12"
              value={sleepHours}
              onChange={(e) => setSleepHours(e.target.value)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #d946ef 0%, #ec4899 ${(sleepHours / 12) * 100}%, #e5e7eb ${(sleepHours / 12) * 100}%, #e5e7eb 100%)`,
              }}
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSaveEntry}
            className="w-full py-3 bg-gradient-to-r from-primary-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105"
          >
            Save Today's Entry
          </button>
        </div>

        {/* Mid-week Check-in */}
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-200 rounded-2xl p-6">
          <h3 className="font-heading font-bold text-gray-900 mb-2">
            Mid-week Check-in Due
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Let us know how the meal plan is working for you this week
          </p>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105">
            Complete Check-in
          </button>
        </div>
      </div>
    </div>
  );
}