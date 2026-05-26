import type { Metadata } from 'next';
import { IndustrialWashingContent } from './industrial-washing-content';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';

export const metadata: Metadata = {
  title: {
    absolute: 'Industrial Pressure Washing Perth | Premier Pressure Solutions WA',
  },
  description:
    "Heavy-duty industrial pressure washing for Perth manufacturing & warehouses. Factory floors, loading docks, machinery & yards cleaned to safety standards. Fully insured.",
  alternates: { canonical: `${SITE_URL}/commercial/industrial-washing` },
};

export default function IndustrialWashingPage() {
  return <IndustrialWashingContent />;
}
