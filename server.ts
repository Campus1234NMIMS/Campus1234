import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

interface ProjectInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  school?: string;
  projectCategory: string;
  projectTitle: string;
  deadlineDays?: string;
  notes?: string;
  submittedAt: string;
}

const inquiries: ProjectInquiry[] = [];

// API Route: Contact Backend for campuscraft01@gmail.com
app.post('/api/contact', (req: Request, res: Response) => {
  try {
    const { name, email, phone, school, projectCategory, projectTitle, deadlineDays, notes } = req.body;

    if (!name || !email || !projectTitle) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your name, contact email, and school project topic.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address so we can send your live project draft.',
      });
    }

    const ticketId = `CC-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    const newInquiry: ProjectInquiry = {
      id: ticketId,
      name: String(name).trim(),
      email: String(email).trim(),
      phone: phone ? String(phone).trim() : undefined,
      school: school ? String(school).trim() : undefined,
      projectCategory: projectCategory || 'Standard Showcase (₹500)',
      projectTitle: String(projectTitle).trim(),
      deadlineDays: deadlineDays ? String(deadlineDays).trim() : '3-5 days',
      notes: notes ? String(notes).trim() : '',
      submittedAt: new Date().toISOString(),
    };

    inquiries.unshift(newInquiry);
    if (inquiries.length > 50) {
      inquiries.pop();
    }

    // Construct pre-filled mailto URI directly addressed to campuscraft01@gmail.com
    const subject = encodeURIComponent(`[${ticketId}] Project Request: ${newInquiry.projectTitle} - ${newInquiry.name}`);
    const bodyContent = encodeURIComponent(
`Hello CampusCraft Team,

I would like to request a website for my school/college project presentation under the "1st view your work, then only pay" policy.

Ticket ID: ${ticketId}
Student Name: ${newInquiry.name}
Email: ${newInquiry.email}
Phone/WhatsApp: ${newInquiry.phone || 'N/A'}
School / College: ${newInquiry.school || 'N/A'}
Chosen Package: ${newInquiry.projectCategory}
Project Title: ${newInquiry.projectTitle}
Required Timeline: ${newInquiry.deadlineDays}
Additional Project Notes:
${newInquiry.notes || 'No extra notes'}

Looking forward to reviewing our live demo preview link!
Thank you,
${newInquiry.name}`
    );

    const mailtoUrl = `mailto:campuscraft01@gmail.com?subject=${subject}&body=${bodyContent}`;

    return res.status(200).json({
      success: true,
      ticketId,
      recipientEmail: 'campuscraft01@gmail.com',
      mailtoUrl,
      message: 'Draft request received! Your live project preview link will be crafted and sent for review before any payment is requested.',
      inquiry: newInquiry,
    });
  } catch (error) {
    console.error('Error handling contact inquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while processing your request. Please contact campuscraft01@gmail.com directly.',
    });
  }
});

// API Route: Contact Info & Policy status
app.get('/api/contact/info', (_req: Request, res: Response) => {
  return res.json({
    officialEmail: 'campuscraft01@gmail.com',
    responseTarget: 'Under 2 hours',
    goldenRule: '1st view your work, then only pay',
    packages: [
      {
        id: 'starter',
        name: 'Showcase Website',
        price: 500,
        currency: '₹',
        urlType: 'Free Google AI Studio / GitHub Pages URL',
        description: 'Complete project presentation site hosted without extra domain fees.',
        badge: 'Popular Choice',
      },
      {
        id: 'pro',
        name: 'Pro Dedicated Website',
        price: 600,
        currency: '₹',
        urlType: 'Dedicated .online Domain Included',
        description: 'Custom school presentation website with personal .online URL.',
        badge: 'Recommended',
      },
      {
        id: 'ai-chatbot',
        name: 'AI Chatbot Website',
        price: 700,
        currency: '₹',
        urlType: 'Dedicated .online URL + Project AI Chatbot',
        description: 'Interactive AI trained on your project research to answer teacher & judge questions live during presentation.',
        badge: 'Upcoming',
      },
    ],
  });
});

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`CampusCraft server running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
