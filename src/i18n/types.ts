import type { ConsultationTopicId } from '../data/consultations';

export type Content = {
  seo: { title: string; description: string };
  skip: string;
  nav: { about: string; services: string; doctor: string; certificates: string; contact: string; book: string; language: string };
  hero: { eyebrow: string; title: string; therapies: string[]; description: string; primary: string; secondary: string; cityLabel: string; phoneLabel: string; emailLabel: string; imageAlt: string; conceptNote: string };
  about: { eyebrow: string; title: string; p1: string; p2: string; imageAlt: string; conceptNote: string; link: string };
  services: { eyebrow: string; title: string; intro: string; consult: string; items: { title: string; description: string }[] };
  herbal: { title: string; description: string; link: string };
  consultations: {
    eyebrow: string; title: string; teaser: string; link: string;
    seo: { title: string; description: string };
    breadcrumbHome: string; intro: string; scopeNote: string;
    ctaTitle: string; ctaDescription: string; ctaLink: string;
    categories: Record<ConsultationTopicId, { title: string; description: string }>;
  };
  doctor: { eyebrow: string; title: string; intro: string; nameLabel: string; identityLabel: string; experienceLabel: string; specialtyLabel: string; pending: string; pendingConfirm: string; photoAlt: string; photoNote: string; cta: string };
  certificates: { eyebrow: string; title: string; intro: string; placeholderTitle: string; issuer: string; year: string; view: string; close: string; dialogTitle: string; imageAlt: string };
  contact: { eyebrow: string; title: string; intro: string; email: string; phone: string; facebook: string; instagram: string; emailCta: string; emailSubject: string; address: string; map: string; entranceAlt: string; entranceNote: string; method: string };
  footer: { tagline: string; explore: string; contact: string; rights: string; conceptDisclaimer: string };
};
