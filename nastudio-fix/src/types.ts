export interface PortfolioProject {
  id: string;
  title: string;
  category: 'landing' | 'toko-online' | 'company-profile';
  categoryLabel: string;
  clientName: string;
  summary: string;
  imageUrl: string;
  results: string;
  priceTag: string;
  features: string[];
  interactiveType: 'coffee-shop' | 'cargo-track' | 'fashion-store' | 'clinic-booking';
  story: {
    problem: string;
    solution: string;
    outcome: string;
    testimonial: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  price: string;
  popular?: boolean;
  timeline: string;
  benefits: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  business: string;
  city: string;
  avatarText: string;
  content: string;
  rating: number;
}
