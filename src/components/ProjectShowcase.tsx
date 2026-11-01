import { useState } from 'react';
import { Laptop, Smartphone, QrCode, Sparkles, ExternalLink, CheckCircle2, MessageSquare, ArrowRight, Share2 } from 'lucide-react';

interface ProjectSample {
  id: string;
  categoryTag: string;
  title: string;
  studentClass: string;
  domainUrl: string;
  abstract: string;
  stats: { label: string; value: string }[];
  keyHighlights: string[];
  mockAiQna: { question: string; answer: string };
}

export function ProjectShowcase() {
  const [activeProjectId, setActiveProjectId] = useState<string>('solar');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTab, setActiveTab] = useState<'abstract' | 'metrics' | 'bot'>('abstract');
  const [showQrModal, setShowQrModal] = useState(false);

  const projects: ProjectSample[] = [
    {
      id: 'solar',
      categoryTag: 'Physics & Clean Energy',
      title: 'SolarGrid IoT: Autonomous Microgrid Load Balancer',
      studentClass: 'Class 12 CBSE Science Exhibition & Viva',
      domainUrl: 'solargrid-iot.online',
      abstract: 'An automated solar energy distribution prototype designed to balance fluctuating battery loads across classroom smart devices, reducing grid wastage by 38.4%.',
      stats: [
        { label: 'Energy Saved', value: '38.4%' },
        { label: 'Response Time', value: '140 ms' },
        { label: 'Sensors Logged', value: '12 NodeMCU' },
      ],
      keyHighlights: [
        'Real-time IoT telemetry chart with live sensor voltage feeds',
        'Embedded circuit diagram with interactive component hover tooltips',
        'Downloadable project report & bibliography PDF for teachers',
        'Scored 1st prize in Regional Science Exhibition',
      ],
      mockAiQna: {
        question: 'Judge: How does your MPPT algorithm handle sudden cloud cover?',
        answer: 'CampusCraft AI: Our prototype triggers an adaptive perturb-and-observe routine every 250ms, switching immediately to ultra-capacitor buffering while solar radiance stabilizes.',
      },
    },
    {
      id: 'crop-ai',
      categoryTag: 'Computer Science & AI',
      title: 'AgriVision: Deep Learning Leaf Disease Classifier',
      studentClass: 'B.Tech CS / Polytech Final Year Capstone',
      domainUrl: 'agrivision-lab.online',
      abstract: 'A computer vision mobile web portal that enables local farmers to take a picture of infected tomato and potato crops to detect early fungal blight with 94.2% validation accuracy.',
      stats: [
        { label: 'Model Accuracy', value: '94.2%' },
        { label: 'Classes Trained', value: '14 Blights' },
        { label: 'Inference Speed', value: '0.4 sec' },
      ],
      keyHighlights: [
        'Interactive webcam image upload tester directly in browser',
        'Confusion matrix chart and precision-recall curves for evaluators',
        'GitHub repository link & dataset citation drawer',
        'Viva evaluator remarked: "Far better than boring slide decks"',
      ],
      mockAiQna: {
        question: 'Evaluator: What dataset did you use to train the MobileNetV3 backbone?',
        answer: 'CampusCraft AI: We fine-tuned the model on 18,500 augmented images from PlantVillage, achieving 94.2% test accuracy with an F1 score of 0.93.',
      },
    },
    {
      id: 'water-pure',
      categoryTag: 'Environmental Science',
      title: 'AquaShield: Bio-Char Multi-Stage Rainwater Purifier',
      studentClass: 'ICSE / State Board Inter-School Project',
      domainUrl: 'aquashield-campus.github.io',
      abstract: 'Low-cost filtration unit utilizing activated coconut husk bio-char and sand gravel layers to convert campus rooftop runoff into potable lab-grade water.',
      stats: [
        { label: 'TDS Reduction', value: '72%' },
        { label: 'Filter Flow', value: '4.5 L/min' },
        { label: 'Unit Cost', value: '₹420 Prototype' },
      ],
      keyHighlights: [
        'Interactive 3D layer diagram of the filtration stack',
        'Before & After water purity chemical comparison chart',
        'QR code printed on student project poster board',
        'Evaluated and awarded Grade A+ with distinction',
      ],
      mockAiQna: {
        question: 'Teacher: How often does the bio-char layer require thermal regeneration?',
        answer: 'CampusCraft AI: Under standard residential monsoon runoff conditions, the bio-char bed maintains optimal adsorption for roughly 650 liters before requiring hot-air reactivation.',
      },
    },
  ];

  const currentProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  return (
    <section id="demos" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold tracking-wider text-cyan-300 uppercase block mb-3 font-mono">
          Interactive Presentation Simulator
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 text-balance">
          What Your Presentation Website{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">
            Will Look Like
          </span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-balance">
          Imagine opening this on your school presentation laptop or having the evaluator scan the QR code directly on their smartphone.
        </p>

        {/* Project Selector Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {projects.map((proj) => (
            <button
              key={proj.id}
              type="button"
              onClick={() => {
                setActiveProjectId(proj.id);
                setActiveTab('abstract');
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeProjectId === proj.id
                  ? 'bg-gradient-to-r from-cyan-300 to-sky-300 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
                  : 'glass-capsule text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {proj.categoryTag}
            </button>
          ))}
        </div>
      </div>

      {/* Mock Browser / Presentation Frame in Apple Glass */}
      <div className="glass-capsule rounded-[36px] p-4 sm:p-7 border border-white/20 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
        {/* Device Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10 text-xs text-slate-400">
          {/* Browser Window Controls */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-slate-300 hidden sm:inline">
              Campus Presentation Engine
            </span>
          </div>

          {/* URL Pill Bar */}
          <div className="flex-1 max-w-md mx-auto flex items-center justify-center">
            <div className="px-4 py-1.5 rounded-full bg-black/40 border border-white/10 text-[11px] font-mono text-cyan-300 flex items-center gap-2 truncate shadow-inner">
              <span className="text-emerald-400">https://</span>
              <span className="text-white font-medium">{currentProject.domainUrl}</span>
              <span className="text-slate-500 text-[10px]">· SSL Secure</span>
            </div>
          </div>

          {/* Device & QR Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setDeviceMode(deviceMode === 'desktop' ? 'mobile' : 'desktop')}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 transition-colors flex items-center gap-1 cursor-pointer"
              title="Toggle Device Preview"
            >
              {deviceMode === 'desktop' ? (
                <>
                  <Laptop className="w-4 h-4 text-cyan-300" />
                  <span className="hidden sm:inline text-[11px]">Desktop</span>
                </>
              ) : (
                <>
                  <Smartphone className="w-4 h-4 text-cyan-300" />
                  <span className="hidden sm:inline text-[11px]">Mobile</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setShowQrModal(true)}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/30 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <QrCode className="w-3.5 h-3.5 text-cyan-300" />
              <span className="text-[11px] font-semibold">Judge QR Code</span>
            </button>
          </div>
        </div>

        {/* Content Preview Container */}
        <div className={`mx-auto transition-all duration-300 ${deviceMode === 'mobile' ? 'max-w-sm rounded-[32px] border-4 border-slate-700 p-4 bg-slate-950/80 shadow-2xl' : 'w-full'}`}>
          {/* Inner Simulated Website Header */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border border-white/10 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                {currentProject.studentClass}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified School Project</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {currentProject.title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              {currentProject.abstract}
            </p>

            {/* Simulated Project KPI Metrics */}
            <div className="grid grid-cols-3 gap-3">
              {currentProject.stats.map((st, idx) => (
                <div key={idx} className="p-3 sm:p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                  <span className="text-xl sm:text-2xl font-black text-cyan-200 font-mono block">
                    {st.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Simulator Tabs */}
          <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('abstract')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                activeTab === 'abstract'
                  ? 'bg-white/15 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Key Highlights
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('metrics')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all ${
                activeTab === 'metrics'
                  ? 'bg-white/15 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Presentation Flow
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('bot')}
              className={`px-3 py-1.5 rounded-xl font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'bot'
                  ? 'bg-purple-500/25 text-purple-200 border border-purple-400/30'
                  : 'text-slate-400 hover:text-purple-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-300" />
              <span>₹700 AI Bot Demo</span>
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300">
            {activeTab === 'abstract' && (
              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                  Included In This Project Package:
                </p>
                {currentProject.keyHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'metrics' && (
              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                  How Teachers Experience Your Site:
                </p>
                <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">1. Introduction & Team Bio</span>
                    <span className="text-emerald-400 font-mono text-[11px]">Instant Load</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">2. Live Interactive Charts & Data Tables</span>
                    <span className="text-cyan-400 font-mono text-[11px]">Interactive</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">3. Hardware / Theory High-Res Diagrams</span>
                    <span className="text-sky-400 font-mono text-[11px]">Full Zoom</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">4. References & Guide Professor Acknowledgement</span>
                    <span className="text-slate-400 font-mono text-[11px]">Verified</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bot' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-300 font-semibold text-xs mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Simulated Presentation AI Assistant (Upcoming ₹700 Plan)</span>
                </div>
                <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs space-y-2">
                  <div className="flex items-start gap-2 text-slate-200">
                    <span className="font-bold text-amber-300 shrink-0">Q:</span>
                    <span>{currentProject.mockAiQna.question}</span>
                  </div>
                  <div className="flex items-start gap-2 text-purple-200 pt-2 border-t border-purple-500/20">
                    <span className="font-bold text-cyan-300 shrink-0">AI:</span>
                    <span>{currentProject.mockAiQna.answer}</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 italic">
                  * Evaluators can type any technical question about your project, and your website answers with facts from your report!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* QR Code Presentation Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-capsule rounded-3xl p-6 max-w-sm w-full border border-cyan-400/40 text-center relative shadow-2xl animate-in zoom-in-95 duration-200">
            <h4 className="text-lg font-bold text-white mb-1">Judge Presentation QR</h4>
            <p className="text-xs text-slate-300 mb-4">
              Print this code on your display chart. Judges scan with their camera to open your project site!
            </p>

            <div className="w-48 h-48 mx-auto bg-white p-3 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://${currentProject.domainUrl}`}
                alt="Presentation QR Code"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <p className="text-xs font-mono text-cyan-300 mb-5">
              https://{currentProject.domainUrl}
            </p>

            <button
              type="button"
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 rounded-full text-xs font-bold text-slate-950 bg-cyan-300 hover:bg-cyan-200 transition-colors"
            >
              Close Simulator
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
