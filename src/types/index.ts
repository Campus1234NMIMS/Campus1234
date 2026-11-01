export type PackageId = 'starter' | 'pro' | 'ai-chatbot';

export interface PackageOption {
  id: PackageId;
  name: string;
  price: number;
  currency: string;
  urlType: string;
  tagline: string;
  description: string;
  isUpcoming?: boolean;
  isPopular?: boolean;
  badge?: string;
  features: string[];
}

export interface RealClientWork {
  id: string;
  title: string;
  subtitle: string;
  liveUrl: string;
  platformType: 'Google AI Studio Link' | 'GitHub Pages Link' | 'Dedicated .online Domain';
  category: string;
  gradeBadge: string;
  highlights: string[];
  description: string;
  isFlagship?: boolean;
}

export interface QuickEmailTemplate {
  id: string;
  label: string;
  iconName: string;
  projectTopic: string;
  defaultCategory: PackageId;
  sampleMessage: string;
}
