export interface NavItem {
  label: string;
  href: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  color: string;
  colorHex: string;
  image: string;
}

export interface FeatureCard {
  title: string;
  subtitle: string;
  image: string;
  href?: string;
}

export interface OfferCard {
  label: string;
  title: string;
  value: string;
  icon: string;
}

export interface AwardLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface BeforeAfterItem {
  label: string;
  description: string;
  image?: string;
  videoSrc?: string;
}

export interface ComparisonRow {
  feature: string;
  liberty5ProSeries: string | boolean;
  other: string | boolean;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  image: string;
}

export interface ProductModel {
  name: string;
  subtitle: string;
  image: string;
  colors: ColorSwatch[];
  href: string;
}

export interface FeatureSection {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  videoSrc?: string;
  cta?: { label: string; href: string };
}
