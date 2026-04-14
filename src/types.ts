export interface MenuItem {
  name: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  desc: string;
  image: string;
  delay: number;
}

export interface TrainingFormatCard {
  title: string;
  desc: string;
  image: string;
  price: string;
  icon: 'personal' | 'group' | 'pair' | 'women';
}

export interface ReviewCard {
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  prices: {
    1: string;
    8: string;
    12: string;
  };
  features: string[];
  button: string;
  popular: boolean;
  isTrial?: boolean;
  priceNote?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ContactBenefit {
  title: string;
  desc: string;
}
