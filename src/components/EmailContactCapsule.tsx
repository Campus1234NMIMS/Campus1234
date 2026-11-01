import { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, Sparkles, Send, ShieldCheck, ArrowRight, Clock, Paperclip, MessageSquare } from 'lucide-react';
import { PackageId } from '../types';

interface EmailContactCapsuleProps {
  selectedPackage?: PackageId;
}

export function EmailContactCapsule({ selectedPackage = 'pro' }: EmailContactCapsuleProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [chosenPkg, setChosenPkg] = useState<PackageId>(selectedPackage);
  const [studentName, setStudentName] = useState('');
  const [projectTopic, setProjectTopic] = useState('Biomimetic Tensile Cable Structures & 3D Model');
  const [customDeadline, setCustomDeadline] = useState('In 3 Days');

  const templates = [
    {
      id: 'arachne-style',
      label: '🕸️ 3D Architectural / Bio Structure',
      topic: 'ARACHNE-Style Biomimetic Tensile & Cable Structures',
      pkg: 'starter' as PackageId,
      deadline: 'In 3 Days',
    },
    {
      id: 'micp-style',
      label: '🧪 Geotechnical / Soil Lab Presentation',
      topic: 'MICP LAB — Bio-Mediated Soil Stabilization & Eco-Engineering',
      pkg: 'pro' as PackageId,
      deadline: 'This Weekend',
    },
    {
      id: 'cs-ai',
      label: '💻 CS / AI Project Presentation',
      topic: 'Autonomous Edge AI Computer Vision & Telemetry System',
      pkg: 'pro' as PackageId,
      deadline: 'Urgent 24–48 Hours',
    },
    {
      id: 'school-science',
      label: '🔬 School Science Fair / Exhibition',
      topic: 'Renewable Hybrid Microgrid & Clean Energy Prototype',
      pkg: 'starter' as PackageId,
      deadline: 'Next Week',
    },
  ];

  const packageNames: Record<PackageId, { name: string; price: string; linkType: string }> = {
    starter: { name: 'Showcase Website', price: '₹500', linkType: 'Google AI Studio or GitHub Pages URL' },
    pro: { name: 'Dedicated .online Website', price: '₹600', linkType: 'Custom .online Domain + QR Code' },
    'ai-chatbot': { name: 'AI Chatbot Website', price: '₹700 (Upcoming)', linkType: 'Custom .online Domain + Embedded Viva Bot' },
  };

  const handleTemplateSelect = (t: typeof templates[0]) => {
    setProjectTopic(t.topic);
    setChosenPkg(t.pkg);
    setCustomDeadline(t.deadline);
  };

  // Pre-generate email subject & body
  const emailRecipient = 'campuscraft01@gmail.com';
  const emailSubject = `[Project Inquiry] ${projectTopic} — ${studentName || 'Student Presentation'}`;
  const emailBody = `Hi CampusCraft Team,

I would like to request a school/college project presentation website under your "1st view your work, then only pay" policy.

• Student Name: ${studentName || '[Enter your name or team name]'}
• Project Topic: ${projectTopic}
• Chosen Package: ${packageNames[chosenPkg].name} (${packageNames[chosenPkg].price} - ${packageNames[chosenPkg].linkType})
• Presentation Timeline: ${customDeadline}

I have attached (or will reply with) my presentation slides, report PDF, or rough guidelines.
Please review and share the private live draft preview link once ready.

Thank you!
${studentName || 'Student'}`;

  const mailtoLink = `mailto:${emailRecipient}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailRecipient}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const copyOnlyEmail = () => {
    navigator.clipboard.writeText(emailRecipient);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyFullDraft = () => {
    const fullText = `TO: ${emailRecipient}\nSUBJECT: ${emailSubject}\n\n${emailBody}`;
    navigator.clipboard.writeText(fullText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold tracking-wider text-cyan-300 uppercase block mb-3 font-mono">
          Direct Email Contact Desk
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
          Just One Email Away.{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
            No Form Fill Hassle.
          </span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-balance">
          No complicated sign-up forms. Connect directly with our developer team at{' '}
          <strong className="text-cyan-300 font-mono">campuscraft01@gmail.com</strong>. Attach your PPT, project notes, or topic link—we build your live preview first!
        </p>
      </div>

      {/* Main Apple Glass Contact Capsule */}
      <div className="glass-capsule rounded-[40px] p-6 sm:p-10 md:p-12 border border-cyan-400/30 relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(6,182,212,0.25)]">
        {/* Soft background ambient blurs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Hero Pill: Official Email Lockup */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-3xl bg-black/40 border border-white/15 mb-10 shadow-inner">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400/30 via-white/10 to-indigo-500/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-md">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-cyan-300 font-mono block">
                Official Student Desk
              </span>
              <a
                href={`mailto:${emailRecipient}`}
                className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white hover:text-cyan-200 transition-colors font-mono tracking-tight"
              >
                {emailRecipient}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={copyOnlyEmail}
              className="flex-1 md:flex-none px-5 py-3 rounded-full text-xs font-bold text-slate-200 glass-capsule hover:bg-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-300" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${emailRecipient}`}
              className="flex-1 md:flex-none px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-300 via-white to-cyan-200 shadow-md hover:shadow-cyan-400/50 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Compose Now</span>
            </a>
          </div>
        </div>

        {/* The Creative Twist: Interactive 1-Click Smart Email Generator */}
        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Interactive Email Composer Twist
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Pick a template to auto-format your email with zero typing
            </span>
          </div>

          {/* Quick Topic Chips */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2.5">
              1. Tap a quick sample project topic:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {templates.map((tpl) => (
                <button
                  key={tpl.id}
                  type="button"
                  onClick={() => handleTemplateSelect(tpl)}
                  className={`p-3 rounded-2xl text-left border text-xs transition-all cursor-pointer ${
                    projectTopic === tpl.topic
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      : 'bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="font-semibold truncate mb-1">{tpl.label}</div>
                  <div className="text-[10px] text-slate-400 truncate">{tpl.topic}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Package & Timeline Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                2. Customize topic or team name (optional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name / Team"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-2xl bg-black/40 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <input
                  type="text"
                  placeholder="Project Topic"
                  value={projectTopic}
                  onChange={(e) => setProjectTopic(e.target.value)}
                  className="px-3.5 py-2.5 rounded-2xl bg-black/40 border border-white/15 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Chosen Package:
              </label>
              <select
                value={chosenPkg}
                onChange={(e) => setChosenPkg(e.target.value as PackageId)}
                className="w-full px-3 py-2.5 rounded-2xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
              >
                <option value="starter">Showcase (₹500 - Google/GitHub)</option>
                <option value="pro">Pro .online (₹600 - Custom Domain)</option>
                <option value="ai-chatbot">AI Chatbot (₹700 - Upcoming)</option>
              </select>
            </div>
          </div>

          {/* Live Preview Box of the Email */}
          <div className="rounded-3xl bg-black/60 border border-white/15 p-5 text-xs text-slate-300 space-y-3 font-mono relative group">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>Live Formatted Email Preview</span>
              </div>
              <span className="text-cyan-300 font-semibold">Ready to Send</span>
            </div>

            <div>
              <span className="text-slate-500">To: </span>
              <span className="text-cyan-300 font-bold">{emailRecipient}</span>
            </div>
            <div>
              <span className="text-slate-500">Subject: </span>
              <span className="text-white font-medium">{emailSubject}</span>
            </div>
            <div className="pt-2 text-[11px] text-slate-300 leading-relaxed whitespace-pre-wrap font-sans bg-white/[0.02] p-3 rounded-xl border border-white/5">
              {emailBody}
            </div>
          </div>

          {/* Action Triggers: 1-Click Launchers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {/* Action 1: Gmail Web Direct */}
            <a
              href={gmailWebLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-4 rounded-full font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-300 via-white to-cyan-200 shadow-md hover:shadow-cyan-400/40 flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch in Gmail Web</span>
            </a>

            {/* Action 2: Default System Mail */}
            <a
              href={mailtoLink}
              className="py-3.5 px-4 rounded-full font-bold text-xs text-white glass-capsule hover:bg-white/15 border border-white/20 flex items-center justify-center gap-2 transition-all active:scale-95 text-center"
            >
              <Mail className="w-4 h-4 text-cyan-300" />
              <span>Open in Mail App</span>
            </a>

            {/* Action 3: Copy Full Draft */}
            <button
              type="button"
              onClick={copyFullDraft}
              className="py-3.5 px-4 rounded-full font-bold text-xs text-slate-200 glass-capsule hover:bg-white/15 border border-white/20 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              {copiedDraft ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Draft Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-cyan-300" />
                  <span>Copy Draft & Send Later</span>
                </>
              )}
            </button>
          </div>

          {/* Trust Footnote */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>1st view your work on a private URL, then only pay (₹500 / ₹600 / ₹700).</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Average email response time: &lt; 45 mins.</span>
            </div>
            <div className="flex items-center gap-2">
              <Paperclip className="w-4 h-4 text-purple-400 shrink-0" />
              <span>You can attach PPTs, Word docs, PDFs, or hand sketches directly.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
