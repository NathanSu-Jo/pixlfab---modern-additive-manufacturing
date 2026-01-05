
import React from 'react';
import { Cpu, Drill, Car, Activity, Zap, Plus } from 'lucide-react';

const Applications: React.FC = () => {
  const apps = [
    { icon: <Drill size={28} />, title: "Industrial Equipment" },
    { icon: <Zap size={28} />, title: "R&D & OEM/ODM" },
    { icon: <Cpu size={28} />, title: "Consumer Electronics" },
    { icon: <Car size={28} />, title: "Automotive & Motorbike" },
    { icon: <Activity size={28} />, title: "Medical Devices" },
    { icon: <Plus size={28} />, title: "More Sectors" }
  ];

  return (
    <section id="applications" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Industries</h2>
          <h3 className="text-4xl font-bold">Solving Real-World Challenges</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {apps.map((app, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-blue-600 transition-all duration-300">
              <div className="mb-4 text-blue-400 group-hover:text-white transition-colors">{app.icon}</div>
              <p className="font-bold text-sm tracking-wide">{app.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
