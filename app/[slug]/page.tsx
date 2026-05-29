import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { suburbs, suburbBySlug } from '@/data/suburbs';
import SuburbPage from '../perth/[slug]/page';
import ConcreteCleaningPage, {
  metadata as concreteCleaningMetadata,
} from '../services/concrete-cleaning/page';
import DrivewayCleaningPage, {
  metadata as drivewayCleaningMetadata,
} from '../services/driveway-cleaning/page';
import HouseWashingPage, {
  metadata as houseWashingMetadata,
} from '../services/house-washing/page';
import LimestoneCleaningPage, {
  metadata as limestoneCleaningMetadata,
} from '../services/limestone-cleaning/page';
import PaverCleaningPage, {
  metadata as paverCleaningMetadata,
} from '../services/paver-cleaning/page';
import PoolPatioCleaningPage, {
  metadata as poolPatioCleaningMetadata,
} from '../services/pool-patio-cleaning/page';
import PresaleCleaningPage, {
  metadata as presaleCleaningMetadata,
} from '../services/presale-cleaning/page';
import PressureCleaningPage, {
  metadata as pressureCleaningMetadata,
} from '../services/pressure-cleaning/page';
import RoofCleaningPage, {
  metadata as roofCleaningMetadata,
} from '../services/roof-cleaning/page';
import WindowCleaningPage, {
  metadata as windowCleaningMetadata,
} from '../services/window-cleaning/page';

const SITE_URL = 'https://www.premierpressuresolutions.com.au';
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type Props = { params: Promise<{ slug: string }> };
type ServicePage = () => JSX.Element;

const servicePages: Record<string, ServicePage> = {
  'concrete-cleaning': ConcreteCleaningPage,
  'driveway-cleaning': DrivewayCleaningPage,
  'house-washing': HouseWashingPage,
  'limestone-cleaning': LimestoneCleaningPage,
  'paver-cleaning': PaverCleaningPage,
  'pool-patio-cleaning': PoolPatioCleaningPage,
  'presale-cleaning': PresaleCleaningPage,
  'pressure-cleaning': PressureCleaningPage,
  'roof-cleaning': RoofCleaningPage,
  'window-cleaning': WindowCleaningPage,
};

const serviceMetadata: Record<string, Metadata> = {
  'concrete-cleaning': concreteCleaningMetadata,
  'driveway-cleaning': drivewayCleaningMetadata,
  'house-washing': houseWashingMetadata,
  'limestone-cleaning': limestoneCleaningMetadata,
  'paver-cleaning': paverCleaningMetadata,
  'pool-patio-cleaning': poolPatioCleaningMetadata,
  'presale-cleaning': presaleCleaningMetadata,
  'pressure-cleaning': pressureCleaningMetadata,
  'roof-cleaning': roofCleaningMetadata,
  'window-cleaning': windowCleaningMetadata,
};

function absoluteTitle(title: Metadata['title']) {
  if (typeof title === 'string') return title;
  if (title && typeof title === 'object' && 'absolute' in title) return title.absolute;
  return undefined;
}

function withRootUrl(metadata: Metadata, slug: string): Metadata {
  const url = `${SITE_URL}/${slug}`;
  const title = absoluteTitle(metadata.title);

  return {
    ...metadata,
    alternates: { ...metadata.alternates, canonical: url },
    openGraph: {
      ...(metadata.openGraph && typeof metadata.openGraph === 'object' ? metadata.openGraph : {}),
      url,
      title,
      description: metadata.description ?? undefined,
      type: 'website',
      locale: 'en_AU',
      siteName: 'Premier Pressure Solutions WA',
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metadata.description ?? undefined,
      images: [OG_IMAGE],
    },
    other: {
      ...metadata.other,
      'twitter:url': url,
    },
  };
}

export function generateStaticParams() {
  return [
    ...suburbs.map((s) => ({ slug: s.slug })),
    ...Object.keys(servicePages).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const suburb = suburbBySlug.get(slug);

  if (suburb) {
    const url = `${SITE_URL}/${suburb.slug}`;
    return {
      title: { absolute: suburb.title },
      description: suburb.description,
      alternates: { canonical: url },
      openGraph: {
        url,
        title: suburb.title,
        description: suburb.description,
        type: 'website',
        locale: 'en_AU',
        siteName: 'Premier Pressure Solutions WA',
        images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
      },
      twitter: {
        card: 'summary_large_image',
        title: suburb.title,
        description: suburb.description,
        images: [OG_IMAGE],
      },
      other: {
        'twitter:url': url,
      },
    };
  }

  const metadata = serviceMetadata[slug];
  if (metadata) return withRootUrl(metadata, slug);

  return {};
}

export default async function RootSlugPage({ params }: Props) {
  const { slug } = await params;
  const suburb = suburbBySlug.get(slug);

  if (suburb) return <SuburbPage params={Promise.resolve({ slug })} />;

  const ServicePage = servicePages[slug];
  if (ServicePage) return <ServicePage />;

  notFound();
}
