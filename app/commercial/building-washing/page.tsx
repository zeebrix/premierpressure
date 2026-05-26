import type { Metadata } from 'next';
import { BuildingWashingContent } from './building-washing-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Commercial Building Washing Perth | Premier Pressure Solutions WA',
  },
  description:
    "Professional commercial building washing across Perth. Soft washing & pressure cleaning for facades, glass, render, concrete & metal cladding. Fully insured. Free quotes.",
  alternates: { canonical: `${SITE_URL}/commercial/building-washing` },
};

export default function BuildingWashingPage() {
  return <BuildingWashingContent />;
}
