'use client';

import { useState } from 'react';

export default function TropicalDesignApp() {
  const [selectedPalette, setSelectedPalette] = useState('ocean');

  const palettes = {
    ocean: {
      name: 'Ocean Breeze',
      colors: ['#00B4DB', '#0083B0', '#20B2AA', '#48CAE4', '#90E0EF'],
      bg: 'from-cyan-400 via-blue-500 to-teal-600'
    },
    sunset: {
      name: 'Tropical Sunset',
      colors: ['#FF6B6B', '#FF8E53', '#FF6B35', '#F7931E', '#FFD23F'],
      bg: 'from-orange-400 via-red-500 to-pink-500'
    },
    forest: {
      name: 'Jungle Green',
      colors: ['#2ECC71', '#27AE60', '#16A085', '#1ABC9C', '#52C41A'],
      bg: 'from-green-400 via-emerald-500 to-teal-500'
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${palettes[selectedPalette].bg} p-8`}>
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🌺 Tropical Design Studio
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Create beautiful tropical-inspired designs
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">🎨 Color Palettes</h2>
            <div className="space-y-4">
              {Object.entries(palettes).map(([key, palette]) => (
                <div
                  key={key}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    selectedPalette === key ? 'bg-white/30 ring-2 ring-white' : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setSelectedPalette(key)}
                >
                  <h3 className="text-white font-semibold mb-2">{palette.name}</h3>
                  <div className="flex gap-2">
                    {palette.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-white/50"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">🏖️ Design Elements</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-all cursor-pointer">
                <div className="text-4xl mb-2">🌴</div>
                <p className="text-white text-sm">Palm Trees</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-all cursor-pointer">
                <div className="text-4xl mb-2">🌺</div>
                <p className="text-white text-sm">Hibiscus</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-all cursor-pointer">
                <div className="text-4xl mb-2">🐚</div>
                <p className="text-white text-sm">Seashells</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-all cursor-pointer">
                <div className="text-4xl mb-2">🦜</div>
                <p className="text-white text-sm">Tropical Birds</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Current Palette: {palettes[selectedPalette].name}</h2>
          <div className="grid grid-cols-5 gap-4 mb-6">
            {palettes[selectedPalette].colors.map((color, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-full h-24 rounded-lg border-2 border-white/50 shadow-lg mb-2"
                  style={{ backgroundColor: color }}
                />
                <p className="text-white text-sm font-mono">{color}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 justify-center">
            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all backdrop-blur">
              Export Palette
            </button>
            <button className="bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-full transition-all">
              Create Design
            </button>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-white/80">
            <span>🌊</span>
            <span>Inspired by tropical paradise</span>
            <span>🌺</span>
          </div>
        </div>
      </div>
    </div>
  );
}
