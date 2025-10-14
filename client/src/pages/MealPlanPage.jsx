import React, { useState } from 'react';

export default function Meals() {
  const [activeTab, setActiveTab] = 'This Week';
  const [expandedDay, setExpandedDay] = useState('Monday');

  const mealPlan = {
    week: 'Week 1 of 12',
    type: 'South Indian Vegetarian Plan',
    budget: '₹250/day',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-2 mb-4">
          <button className="text-gray-600 hover:text-gray-900">←</button>
          <h1 className="text-xl font-heading font-bold text-gray-900">
            Your Personalized Meal Plans 🍽️
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {['This Week', 'Next Week', 'History'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-primary-600 to-pink-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Meal Plan Info */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{mealPlan.week}</p>
              <p className="font-heading font-bold text-gray-900">{mealPlan.type}</p>
              <p className="text-sm text-primary-600">Budget: {mealPlan.budget}</p>
            </div>
            <button className="px-4 py-2 bg-white border-2 border-primary-500 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-50 flex items-center gap-2">
              <span>⬇️</span> Download PDF
            </button>
          </div>
        </div>

        {/* Day Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Monday - Expanded */}
          <div className="bg-gradient-to-r from-primary-500 to-pink-500 rounded-2xl text-white">
            <button 
              onClick={() => setExpandedDay('Monday')}
              className="w-full p-4 text-left flex items-center justify-between"
            >
              <div>
                <p className="font-heading font-bold">Monday</p>
                <p className="text-sm opacity-90">Oct 14</p>
              </div>
              <span>▼</span>
            </button>

            {/* Meal List */}
            <div className="bg-white text-gray-900 p-4 rounded-b-2xl">
              {[
                { time: 'Breakfast', name: 'Idli with Sambar & Chutney', protein: '8g', carbs: '45g', fat: '6g' },
                { time: 'Mid-Morning Snack', name: 'Mixed Nuts & Green Tea', protein: '7g', carbs: '10g', fat: '12g' },
                { time: 'Lunch', name: 'Brown Rice, Dal, Vegetable Curry', protein: '16g', carbs: '52g', fat: '10g' },
                { time: 'Evening Snack', name: 'Sprouts Chaat', protein: '8g', carbs: '15g', fat: '4g' },
                { time: 'Dinner', name: 'Roti, Paneer Bhurji, Salad', protein: '20g', carbs: '48g', fat: '12g' },
              ].map((meal, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 font-medium">{meal.time}</p>
                      <p className="font-medium text-sm text-gray-900">{meal.name}</p>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full">P {meal.protein}</span>
                        <span className="text-xs px-2 py-0.5 bg-orange-100 text-orange-700 rounded-full">C {meal.carbs}</span>
                        <span className="text-xs px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full">F {meal.fat}</span>
                      </div>
                      <button className="text-xs text-primary-600 font-medium mt-1 hover:underline">
                        View Recipe
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Days - Collapsed */}
          {['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
            <button
              key={day}
              className="bg-gradient-to-r from-primary-500 to-pink-500 rounded-2xl p-4 text-left text-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-bold">{day}</p>
                  <p className="text-sm opacity-90">Oct {15 + mealPlan.days.indexOf(day)}</p>
                </div>
                <span>▼</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}