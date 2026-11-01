/**
 * Hardcoded Intelligent Knowledge Engine for CampusCraft Chatbot
 * Runs 100% client-side in pure JS/TS:
 * - Zero server latency
 * - Works offline and on static GitHub Pages (https://campuscraft.online)
 * - Deep domain expertise on student school/college project websites, packages, guarantees, and viva presentations.
 */

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  quickActions?: {
    label: string;
    actionType: 'scroll' | 'email' | 'query' | 'link';
    payload: string;
  }[];
}

interface KnowledgeRule {
  keywords: string[];
  response: string;
  quickActions?: {
    label: string;
    actionType: 'scroll' | 'email' | 'query' | 'link';
    payload: string;
  }[];
}

const KNOWLEDGE_RULES: KnowledgeRule[] = [
  {
    keywords: ['price', 'pricing', 'cost', 'fee', 'package', 'packages', 'rate', 'how much', 'rates', 'plans'],
    response: `CampusCraft offers 3 transparent student packages designed specifically for school & college budgets:

1. **Showcase Website (₹500)**:
   • Hosted on a permanent, high-speed Google AI Studio or GitHub Pages link
   • Mobile, tablet & laptop responsive presentation layout
   • Ideal for science exhibitions, practicals, and term project submissions.

2. **Dedicated .online Website (₹600)**:
   • Includes your personalized **.online** domain (e.g., *yourproject.online*)
   • Free SSL certificate (HTTPS) + high-resolution printable QR code for presentation boards
   • Our most popular choice for exhibitions and final vivas!

3. **AI Chatbot Website (₹700 — Upcoming)**:
   • Dedicated .online URL + interactive conversational AI trained on your project report to answer judge questions live!

And remember our golden pledge: **1st view your work on a live link, then only pay!**`,
    quickActions: [
      { label: 'View Packages Section', actionType: 'scroll', payload: 'packages' },
      { label: 'How does payment work?', actionType: 'query', payload: 'How does the view first then pay policy work?' },
      { label: 'Email campuscraft01@gmail.com', actionType: 'email', payload: 'campuscraft01@gmail.com' },
    ],
  },
  {
    keywords: ['guarantee', 'pay', 'payment', 'first view', 'view first', 'advance', 'deposit', 'risk', 'safe', 'refund'],
    response: `**Zero-Risk Student Guarantee:**
"1st View Your Work — Then Only Pay."

Here is how our student pledge works:
1. **₹0 Upfront**: You submit your project topic, slides, or rough notes with zero deposit.
2. **We Build**: Our team crafts your responsive Apple-glass presentation website in 24–48 hours.
3. **Live Testing**: We share a private live URL. You open it on your phone, test the interactive charts, and show it to your group or teacher.
4. **Pay Only If Satisfied**: Only if you 100% love your site do you pay the package fee (₹500, ₹600, or ₹700). If you don't want it, you owe ₹0!`,
    quickActions: [
      { label: 'Read Full Guarantee', actionType: 'scroll', payload: 'guarantee' },
      { label: 'Inquire via Email', actionType: 'scroll', payload: 'contact' },
    ],
  },
  {
    keywords: ['difference', 'compare', '500 vs 600', 'which package', 'domain', '.online'],
    response: `Here is the key difference between our two main packages:

• **₹500 Showcase Website**:
  Uses a permanent free link (like our real client projects *arachne-biomimetic-tensile-cable-structures.ai.studio* or *milkmade01.github.io/aditya-prji*). No recurring domain fee.

• **₹600 Dedicated .online Website**:
  Includes your own branded custom domain (e.g., *solargrid.online*) for 1 year, plus a vector QR code you can print on your exhibition chart or slides. When judges scan the QR code with their camera, your site opens instantly!

Both packages include full responsive design, image galleries, and the **"1st view work, then pay"** protection.`,
    quickActions: [
      { label: 'Choose ₹600 Pro Plan', actionType: 'scroll', payload: 'contact' },
      { label: 'See Comparison Table', actionType: 'scroll', payload: 'packages' },
    ],
  },
  {
    keywords: ['arachne', 'micp', 'real work', 'example', 'portfolio', 'sample', 'past work', 'previous', 'projects'],
    response: `Check out two of our real delivered client projects:

1. **ARACHNE — Biomimetic Tensile & Cable Structures**
   • *Google AI Studio Link* · Grade A+ with Distinction
   • Features interactive 3D tensile cable mesh simulation and tension form-finding calculations.
   • Live URL: https://arachne-biomimetic-tensile-cable-structures.ai.studio/

2. **MICP LAB — Engineering Soil. Naturally.**
   • *GitHub Pages Link* · 1st Prize Capstone (Aditya's Project)
   • Features bio-cementation reaction pathways, shear test data, and soil stabilization metrics.
   • Live URL: https://milkmade01.github.io/aditya-prji/

You can test both directly inside our interactive in-app glass window on this page!`,
    quickActions: [
      { label: 'Inspect Real Student Work', actionType: 'scroll', payload: 'our-work' },
      { label: 'Open Presentation Simulator', actionType: 'scroll', payload: 'demos' },
    ],
  },
  {
    keywords: ['time', 'turnaround', 'how long', 'deadline', 'urgent', '24 hours', 'fast', 'delivery', 'days'],
    response: `Our standard turnaround is **24 to 48 hours**!

Need it urgently for a viva or exhibition tomorrow?
• Mark your request as **"Urgent 24 Hours"** in your email to **campuscraft01@gmail.com**.
• Attach your PPT slides, abstract, and project diagrams right away so we can begin coding immediately.
• We can assemble and host a live preview draft in as little as 12–24 hours!`,
    quickActions: [
      { label: 'Email Project Desk Now', actionType: 'scroll', payload: 'contact' },
    ],
  },
  {
    keywords: ['contact', 'email', 'submit', 'send', 'how to start', 'get started', 'order', 'reach', 'gmail'],
    response: `You can reach our developer team directly at:
📧 **campuscraft01@gmail.com**

**What to include in your email:**
1. Your name / team member names
2. Project title / subject (e.g., IoT Solar Grid, Plant Disease AI, Bio-Char Water Filter)
3. Target package (₹500 Showcase or ₹600 Dedicated .online)
4. Your presentation deadline
5. Any attachments: PPT slides, report PDF, circuit diagrams, or rough sketches.

We'll reply with your private live preview draft link before any payment!`,
    quickActions: [
      { label: 'Launch Email Composer', actionType: 'scroll', payload: 'contact' },
      { label: 'Copy Email to Clipboard', actionType: 'email', payload: 'campuscraft01@gmail.com' },
    ],
  },
  {
    keywords: ['viva', 'presentation', 'judge', 'teacher', 'exhibition', 'powerpoint', 'ppt', 'tips', 'score'],
    response: `**How a Live Website Gives You the Edge over PowerPoint:**

1. **Instant Interactive Navigation**: Instead of scrolling through 45 static PPT slides, click directly to live telemetry charts, 3D simulations, and hardware schematics.
2. **Exhibition Stall QR Code**: Paste the high-res QR code on your chart board. Evaluators scan it on their own smartphones and browse your project while you explain.
3. **Never Bounces**: No broken formatting between Mac/Windows or 40MB email attachment limits. One clean link works on any projector, phone, or browser!`,
    quickActions: [
      { label: 'See PPT vs Website Comparison', actionType: 'scroll', payload: 'demos' },
    ],
  },
  {
    keywords: ['chatbot', 'ai bot', '700', 'upcoming'],
    response: `**The ₹700 AI Chatbot Website (Upcoming Feature):**

This is our flagship interactive package currently in final launch testing!
• Your presentation website gets a dedicated **.online** domain PLUS an embedded AI chatbot custom-trained on your project paper.
• During your viva or exhibition, teachers and judges can ask technical questions into the chat, and your website answers with factual citations from your project report!
• You can pre-book your slot now for your upcoming term exhibition.`,
    quickActions: [
      { label: 'Pre-book AI Chatbot Plan', actionType: 'scroll', payload: 'packages' },
    ],
  },
  {
    keywords: ['hello', 'hi', 'hey', 'start', 'help', 'who are you', 'what is this', 'about'],
    response: `Hello! 👋 I'm the **CampusCraft Project Assistant**.

We help school and college students turn their science exhibition, IT practical, and final year projects into **stunning, interactive presentation websites** starting at just ₹500!

How can I help you today?
• 💰 **Package pricing** (₹500, ₹600, or ₹700)
• 🛡️ **Zero-Risk Guarantee** ("1st view your work, then only pay")
• 🕸️ **Real student examples** (Arachne & MICP Lab)
• ⏱️ **Turnaround time** (24–48 hours)
• 📩 **How to send your slides** to campuscraft01@gmail.com`,
    quickActions: [
      { label: 'Explore Packages', actionType: 'scroll', payload: 'packages' },
      { label: 'How Does Payment Work?', actionType: 'query', payload: 'How does the payment guarantee work?' },
      { label: 'See Real Student Projects', actionType: 'scroll', payload: 'our-work' },
    ],
  },
];

export function getChatbotResponse(userText: string): ChatMessage {
  const normalized = userText.toLowerCase().trim();

  // Find best matching knowledge rule
  let bestMatch: KnowledgeRule | null = null;
  let maxScore = 0;

  for (const rule of KNOWLEDGE_RULES) {
    let score = 0;
    for (const kw of rule.keywords) {
      if (normalized.includes(kw)) {
        score += kw.length; // weight longer matches higher
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = rule;
    }
  }

  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (bestMatch && maxScore > 0) {
    return {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: bestMatch.response,
      timestamp,
      quickActions: bestMatch.quickActions,
    };
  }

  // Fallback smart response
  return {
    id: `ai-${Date.now()}`,
    sender: 'ai',
    text: `Thanks for your question! Here is a quick summary of CampusCraft:

• **What we do**: We convert school/college PPT slides, reports, and science project abstracts into interactive, Apple-glass presentation websites.
• **Pricing**: ₹500 (Showcase on Google AI Studio/GitHub) or ₹600 (Dedicated .online domain + printable QR code).
• **Golden Rule**: **1st view your work on a live link, then only pay!** Zero advance deposit required.
• **Turnaround**: 24–48 hours.
• **Direct Email**: **campuscraft01@gmail.com**

Would you like to explore our packages or start an email draft for your project topic?`,
    timestamp,
    quickActions: [
      { label: 'Check Packages (₹500 - ₹700)', actionType: 'scroll', payload: 'packages' },
      { label: 'Email campuscraft01@gmail.com', actionType: 'scroll', payload: 'contact' },
      { label: 'View Real Student Works', actionType: 'scroll', payload: 'our-work' },
    ],
  };
}
