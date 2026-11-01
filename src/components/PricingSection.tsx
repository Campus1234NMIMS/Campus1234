import { useState } from 'react';
import { Laptop, Globe, Bot, Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { PackageId } from '../types';

interface PricingSectionProps {
  selectedPackage: PackageId;
  onSelectPackage: (pkg: PackageId) => void;
  onContinueToForm: () => void;
}

export function PricingSection({ selectedPackage, onSelectPackage, onContinueToForm }: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState<'cards' | 'compare'>('cards');

  const packages = [
    {
      id: 'starter' as PackageId,
      name: 'Showcase Website',
      price: 500,
      currency: '₹',
      urlLabel: 'Google Studio / GitHub Link',
      urlSubtext: 'Without dedicated custom domain',
      popular: false,
      upcoming: false,
      icon: Laptop,
      badge: 'Budget Friendly',
      description: 'A complete, beautiful presentation website hosted on permanent free Google AI Studio or GitHub Pages URL. Perfect for school project viva & science exhibitions.',
      features: [
        'Free Google AI Studio or GitHub Pages URL',
        'Mobile, Tablet & Desktop responsive layout',
        'Project Abstract, Problem Statement & Solution sections',
        'Interactive Image Gallery & Data Charts',
        'Team Members & Teacher Guide credits',
        'Fast 24–48h delivery',
        '1st View Live Preview, then pay',
      ],
      notIncluded: [
        'Custom .online domain name',
        'Interactive AI Q&A chatbot',
      ],
    },
    {
      id: 'pro' as PackageId,
      name: 'Dedicated .online Website',
      price: 600,
      currency: '₹',
      urlLabel: 'Dedicated .online URL Included',
      urlSubtext: 'e.g. yourprojectname.online',
      popular: true,
      upcoming: false,
      icon: Globe,
      badge: 'Most Popular for Exhibitions',
      description: 'Your project gets its own branded custom .online domain address! Teachers and judges can easily type it on their own smartphones, plus you get a printable QR code for your presentation board.',
      features: [
        'Dedicated custom .online domain included (1 Year)',
        'Free SSL Security Certificate (HTTPS)',
        'Print-ready high-res Project QR Code for charts/PPT',
        'All Showcase Website features included',
        'Ultra-fast cloud hosting & presentation view mode',
        'Priority 24h delivery available',
        '1st View Live Preview, then pay',
      ],
      notIncluded: [
        'Interactive AI Q&A chatbot',
      ],
    },
    {
      id: 'ai-chatbot' as PackageId,
      name: 'AI Chatbot Website',
      price: 700,
      currency: '₹',
      urlLabel: 'Dedicated .online URL + AI Bot',
      urlSubtext: 'Interactive live viva assistant',
      popular: false,
      upcoming: true,
      icon: Bot,
      badge: 'Upcoming Feature',
      description: 'The ultimate presentation showstopper! Includes a dedicated .online URL plus an embedded AI chatbot custom-trained on your project report to answer teacher and judge questions live on stage.',
      features: [
        'Dedicated custom .online domain included',
        'Embedded Project AI Chatbot (Trained on your topic)',
        'Live Q&A simulation during teacher viva',
        'Print-ready Project QR Code for presentation board',
        'All Pro Website features included',
        'Priority crafting & slide sync',
        '1st View Live Preview, then pay',
      ],
      notIncluded: [],
    },
  ];

  return (
    <section id="packages" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold tracking-wider text-cyan-300 uppercase block mb-3 font-mono">
          Transparent Student Pricing
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
          3 Simple Categories.{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
            Unbeatable Student Rates.
          </span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-balance">
          Transparent one-time rates. Remember our student pledge:{' '}
          <strong className="text-white underline decoration-cyan-400">1st view your work, then only pay</strong>.
        </p>

        {/* View Switcher Tabs */}
        <div className="mt-6 inline-flex p-1 rounded-full glass-capsule border border-white/15">
          <button
            type="button"
            onClick={() => setActiveTab('cards')}
            className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'cards'
                ? 'bg-cyan-400 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Package Cards
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('compare')}
            className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'compare'
                ? 'bg-cyan-400 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Feature Comparison
          </button>
        </div>
      </div>

      {activeTab === 'cards' ? (
        /* The 3 Category Cards in Neo-Bubble Glass */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const isSelected = selectedPackage === pkg.id;

            return (
              <div
                key={pkg.id}
                className={`glass-capsule rounded-[36px] p-7 md:p-8 flex flex-col justify-between transition-all duration-300 relative group ${
                  pkg.popular
                    ? 'border-cyan-400/50 shadow-[0_15px_50px_-10px_rgba(6,182,212,0.3)] bg-white/[0.11]'
                    : pkg.upcoming
                    ? 'border-purple-400/40 bg-white/[0.07]'
                    : 'border-white/20 bg-white/[0.07]'
                } ${
                  isSelected ? 'ring-2 ring-cyan-300 ring-offset-2 ring-offset-black scale-[1.02]' : 'hover:-translate-y-1'
                }`}
              >
                {/* Popular or Upcoming Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                    {pkg.badge}
                  </div>
                )}

                {pkg.upcoming && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Upcoming · Pre-Book</span>
                  </div>
                )}

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4 mt-1">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                        pkg.popular
                          ? 'bg-cyan-500/25 border-cyan-400/40 text-cyan-300'
                          : pkg.upcoming
                          ? 'bg-purple-500/25 border-purple-400/40 text-purple-300'
                          : 'bg-white/10 border-white/20 text-slate-200'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">Category {pkg.id === 'starter' ? '01' : pkg.id === 'pro' ? '02' : '03'}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                  <div className="text-xs font-semibold text-cyan-300 mb-4">{pkg.urlLabel}</div>

                  {/* Pricing Display */}
                  <div className="py-3 px-4 rounded-2xl bg-black/30 border border-white/10 mb-5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black text-white tracking-tight">{pkg.currency}{pkg.price}</span>
                      <span className="text-xs text-slate-400 font-medium">all-inclusive</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{pkg.urlSubtext}</p>
                  </div>

                  {/* Wrapped text for Upcoming AI Chatbot requirement */}
                  {pkg.upcoming && (
                    <div className="p-3 rounded-2xl bg-purple-950/40 border border-purple-400/30 mb-5 text-xs text-purple-200 leading-relaxed">
                      <strong className="text-purple-100 font-bold block mb-1">
                        *Upcoming Feature Launch*
                      </strong>
                      <span className="text-[11px] opacity-90">
                        We are finalizing our customized LLM integration so your presentation website answers audience questions in real-time. Pre-book your slot now for your upcoming term exhibition!
                      </span>
                    </div>
                  )}

                  <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      What's Included
                    </div>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectPackage(pkg.id);
                      onContinueToForm();
                    }}
                    className={`w-full py-3.5 px-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-cyan-300 via-white to-cyan-200 text-slate-950 shadow-[0_5px_25px_rgba(34,211,238,0.4)] hover:shadow-[0_8px_30px_rgba(34,211,238,0.6)] active:scale-95'
                        : pkg.upcoming
                        ? 'bg-purple-600/80 hover:bg-purple-500 text-white border border-purple-400/40 active:scale-95'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 active:scale-95'
                    }`}
                  >
                    <span>{pkg.upcoming ? 'Pre-Book AI Chatbot (₹700)' : `Inquire via Email (${pkg.currency}${pkg.price})`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">
                    Pay ₹0 now · 1st view your work, then only pay
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Feature Comparison Table */
        <div className="glass-capsule rounded-[36px] p-6 md:p-8 border border-white/20 overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead>
              <tr className="border-b border-white/15">
                <th className="pb-4 font-bold text-white">Features</th>
                <th className="pb-4 text-center font-bold text-slate-200">
                  Showcase
                  <span className="block text-cyan-300 font-normal text-xs">₹500</span>
                </th>
                <th className="pb-4 text-center font-bold text-cyan-300">
                  Pro .online
                  <span className="block text-white font-normal text-xs">₹600</span>
                </th>
                <th className="pb-4 text-center font-bold text-purple-300">
                  AI Chatbot
                  <span className="block text-slate-300 font-normal text-xs">₹700 (Upcoming)</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-slate-300">
              <tr>
                <td className="py-3.5 font-medium text-white">URL / Web Address</td>
                <td className="py-3.5 text-center text-slate-400">Google Studio / GitHub</td>
                <td className="py-3.5 text-center font-semibold text-cyan-300">Dedicated .online domain</td>
                <td className="py-3.5 text-center font-semibold text-purple-300">Dedicated .online domain</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-white">1st View Work, Then Pay</td>
                <td className="py-3.5 text-center text-emerald-400">Yes (100% Guaranteed)</td>
                <td className="py-3.5 text-center text-emerald-400">Yes (100% Guaranteed)</td>
                <td className="py-3.5 text-center text-emerald-400">Yes (100% Guaranteed)</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-white">Mobile & Projector Optimized</td>
                <td className="py-3.5 text-center text-emerald-400">Yes</td>
                <td className="py-3.5 text-center text-emerald-400">Yes</td>
                <td className="py-3.5 text-center text-emerald-400">Yes</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-white">Printable QR Code for Presentation Board</td>
                <td className="py-3.5 text-center text-slate-500">—</td>
                <td className="py-3.5 text-center text-emerald-400">High-Res Included</td>
                <td className="py-3.5 text-center text-emerald-400">High-Res Included</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-white">Interactive AI Q&A Assistant</td>
                <td className="py-3.5 text-center text-slate-500">—</td>
                <td className="py-3.5 text-center text-slate-500">—</td>
                <td className="py-3.5 text-center font-bold text-purple-300">Yes (Trained on Project)</td>
              </tr>
              <tr>
                <td className="py-3.5 font-medium text-white">Delivery Speed</td>
                <td className="py-3.5 text-center">24–48 Hours</td>
                <td className="py-3.5 text-center font-medium text-cyan-200">24–36 Hours</td>
                <td className="py-3.5 text-center">Pre-Order</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={onContinueToForm}
              className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-300 via-white to-cyan-200 shadow-md cursor-pointer hover:shadow-cyan-400/50 transition-all active:scale-95"
            >
              Compose Email to campuscraft01@gmail.com (Pay ₹0 Now)
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
