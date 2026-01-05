
import React from 'react';
import { Mail, Phone, Globe, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Let's Build the Future Together</h3>
            <p className="text-slate-500 text-lg mb-10">
              Ready to start your next additive manufacturing project? Contact our engineering team for a feasibility study and competitive quotation.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Headquarters</p>
                  <p className="text-slate-500">PixlFab Technology (Shanghai) Co., Ltd.<br />Shanghai, China</p>
                </div>
              </div>

              <a href="mailto:info@pixlfab.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Email Address</p>
                  <p className="text-slate-500 group-hover:text-blue-600 transition-colors">info@pixlfab.com</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Phone / WhatsApp</p>
                  <p className="text-slate-500">+86 19526211914</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-blue-600 shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Web Presence</p>
                  <p className="text-slate-500">www.pixlfab.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Quick Inquiry</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Company</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="Company Name" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Work Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="email@company.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Project Details</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Send Inquiry <Send size={18} />
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                NDA guaranteed. We usually reply within 4 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
