export const clinic = {
  brand: 'NOAH DEFU',
  polishName: 'Gabinet Chińskiej Medycyny',
  chineseName: '诺亚中医馆',
  address: {
    street: 'Aleje Jerozolimskie 25',
    postalCity: '00-508 Warszawa',
    country: 'Poland',
  },
  email: 'noahdefutcm@gmail.com',
  phoneDisplay: '22 428 40 56',
  // International prefix and full number require clinic confirmation.
  phoneHref: 'tel:224284056',
  facebook: 'https://www.facebook.com/chinskilekarz',
  instagram: null as string | null,
  legalLinks: [] as { label: string; href: string }[],
} as const;

export const doctor = {
  name: null as string | null,
  identity: null as string | null,
  experience: null as string | null,
  specialty: null as string | null,
  image: null as string | null,
};

export const certificates = [
  { id: '01', title: null, issuer: null, year: null, image: 'certificate-placeholder-1.svg' },
  { id: '02', title: null, issuer: null, year: null, image: 'certificate-placeholder-2.svg' },
  { id: '03', title: null, issuer: null, year: null, image: 'certificate-placeholder-3.svg' },
] as const;

export const images = {
  hero: 'hero-clinic.webp',
  about: 'about-clinic.webp',
  doctorPlaceholder: 'doctor-placeholder.svg',
  entrancePlaceholder: 'clinic-entrance-placeholder.svg',
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${clinic.address.street}, ${clinic.address.postalCity}, ${clinic.address.country}`)}`;
