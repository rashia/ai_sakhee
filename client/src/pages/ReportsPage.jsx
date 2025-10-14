// ============================================================================
// FILE 3: client/src/pages/ReportsPage.jsx
// COMPLETE REDESIGN - Medical reports upload and analysis
// ============================================================================

import React, { useState } from 'react';

export default function ReportsPage() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      name: 'Blood Test Results - Sept 2024.pdf',
      date: 'Oct 1, 2024',
      status: 'Analyzed',
      findings: {
        insulin: { value: '12.5', unit: 'µIU/mL', status: 'Normal', color: 'green' },
        testosterone: { value: '65', unit: 'ng/dL', status: 'High', color: 'red' },
        vitaminD: { value: '18', unit: 'ng/mL', status: 'Low', color: 'yellow' },
      },
    },
  ]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    console.log('Files uploaded:', files);
    alert(`Uploading ${files.length} file(s)...`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Normal':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'High':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Low':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
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
            Medical Reports 📄
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-6">
        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-2xl p-12 text-center mb-8 transition-all ${
            dragActive
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-300 bg-white hover:border-primary-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
              Upload Medical Reports
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Drag files here or click to browse
            </p>
            <p className="text-xs text-gray-500 mb-6">
              Supported: PDF, DOCX, JPG, PNG
            </p>
            <label className="cursor-pointer">
              <input
                type="file"
                className="hidden"
                multiple
                accept=".pdf,.docx,.jpg,.jpeg,.png"
                onChange={handleFileInput}
              />
              <span className="px-6 py-3 bg-gradient-to-r from-primary-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105 inline-block">
                Choose Files
              </span>
            </label>
          </div>
        </div>

        {/* Uploaded Reports List */}
        <div className="mb-8">
          <h2 className="text-lg font-heading font-bold text-gray-900 mb-4">
            Your Reports
          </h2>

          {uploadedFiles.map((file, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm mb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-gray-900">
                      {file.name}
                    </p>
                    <p className="text-sm text-gray-500">{file.date}</p>
                    <span className="inline-block mt-2 text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                      ✓ {file.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button className="p-2 text-red-400 hover:text-red-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Key Findings */}
              {file.findings && (
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-heading font-bold text-gray-900 mb-3">
                    Key Findings
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-600 mb-1">Insulin</p>
                      <p className="font-heading font-bold text-gray-900">
                        {file.findings.insulin.value} {file.findings.insulin.unit}
                      </p>
                      <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full border ${getStatusColor(file.findings.insulin.status)}`}>
                        {file.findings.insulin.status}
                      </span>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-600 mb-1">Testosterone</p>
                      <p className="font-heading font-bold text-gray-900">
                        {file.findings.testosterone.value} {file.findings.testosterone.unit}
                      </p>
                      <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full border ${getStatusColor(file.findings.testosterone.status)}`}>
                        {file.findings.testosterone.status}
                      </span>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs text-gray-600 mb-1">Vitamin D</p>
                      <p className="font-heading font-bold text-gray-900">
                        {file.findings.vitaminD.value} {file.findings.vitaminD.unit}
                      </p>
                      <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full border ${getStatusColor(file.findings.vitaminD.status)}`}>
                        {file.findings.vitaminD.status}
                      </span>
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="mt-4 bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <div className="flex items-start gap-2">
                      <span className="text-lg">💡</span>
                      <div>
                        <p className="text-sm font-heading font-semibold text-gray-900 mb-1">
                          What this means for you
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          Your testosterone levels are slightly elevated, which is common in PCOS. Your vitamin D levels are low, which may affect insulin sensitivity. Consider discussing vitamin D supplementation with your doctor.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex items-start gap-3">
          <span className="text-xl flex-shrink-0">⚠️</span>
          <div>
            <p className="text-sm font-heading font-semibold text-gray-900 mb-1">
              Medical Disclaimer
            </p>
            <p className="text-sm text-gray-700">
              This analysis is not a medical diagnosis. Always consult with your healthcare provider to interpret lab results and discuss treatment options.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}