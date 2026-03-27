import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react';

// Eager load critical components
import { RootLayout } from './pages/root-layout';
import { HomePage } from './pages/home';

// Lazy load everything else
const AboutPage = lazy(() => import('./pages/about').then(m => ({ default: m.AboutPage })));
const GalleryPage = lazy(() => import('./pages/gallery').then(m => ({ default: m.GalleryPage })));
const TermsPage = lazy(() => import('./pages/terms').then(m => ({ default: m.TermsPage })));
const AreasPage = lazy(() => import('./pages/areas').then(m => ({ default: m.AreasPage })));
const AdminImagesPage = lazy(() => import('./pages/admin-images').then(m => ({ default: m.AdminImagesPage })));

// Residential Services
const PressureCleaningPage = lazy(() => import('./pages/pressure-cleaning').then(m => ({ default: m.PressureCleaningPage })));
const HouseWashingPage = lazy(() => import('./pages/house-washing').then(m => ({ default: m.HouseWashingPage })));
const DrivewayCleaningPage = lazy(() => import('./pages/driveway-cleaning').then(m => ({ default: m.DrivewayCleaningPage })));
const RoofCleaningPage = lazy(() => import('./pages/roof-cleaning').then(m => ({ default: m.RoofCleaningPage })));
const WindowCleaningPage = lazy(() => import('./pages/window-cleaning').then(m => ({ default: m.WindowCleaningPage })));
const PaverCleaningPage = lazy(() => import('./pages/paver-cleaning').then(m => ({ default: m.PaverCleaningPage })));
const ConcreteCleaningPage = lazy(() => import('./pages/concrete-cleaning').then(m => ({ default: m.ConcreteCleaningPage })));
const LimestoneCleaningPage = lazy(() => import('./pages/limestone-cleaning').then(m => ({ default: m.LimestoneCleaningPage })));
const PoolPatioCleaningPage = lazy(() => import('./pages/pool-patio-cleaning').then(m => ({ default: m.PoolPatioCleaningPage })));
const PresaleCleaningPage = lazy(() => import('./pages/presale-cleaning').then(m => ({ default: m.PresaleCleaningPage })));

// Commercial Services
const CommercialPressureCleaningPage = lazy(() => import('./pages/commercial/commercial-pressure-cleaning').then(m => ({ default: m.CommercialPressureCleaningPage })));
const BuildingWashingPage = lazy(() => import('./pages/commercial/building-washing').then(m => ({ default: m.BuildingWashingPage })));
const StrataCleaningPage = lazy(() => import('./pages/commercial/strata-cleaning').then(m => ({ default: m.StrataCleaningPage })));
const SchoolCleaningPage = lazy(() => import('./pages/commercial/school-cleaning').then(m => ({ default: m.SchoolCleaningPage })));
const ShoppingCentreCleaningPage = lazy(() => import('./pages/commercial/shopping-centre-cleaning').then(m => ({ default: m.ShoppingCentreCleaningPage })));
const RestaurantCleaningPage = lazy(() => import('./pages/commercial/restaurant-cleaning').then(m => ({ default: m.RestaurantCleaningPage })));
const IndustrialWashingPage = lazy(() => import('./pages/commercial/industrial-washing').then(m => ({ default: m.IndustrialWashingPage })));
const PlaygroundCleaningPage = lazy(() => import('./pages/commercial/playground-cleaning').then(m => ({ default: m.PlaygroundCleaningPage })));

// Resources
const ResourcesPage = lazy(() => import('./pages/resources/index').then(m => ({ default: m.ResourcesPage })));
const PricingGuidePage = lazy(() => import('./pages/resources/pricing-guide').then(m => ({ default: m.PricingGuidePage })));
const PreparationChecklistPage = lazy(() => import('./pages/resources/preparation-checklist').then(m => ({ default: m.PreparationChecklistPage })));
const CleaningFrequencyPage = lazy(() => import('./pages/resources/cleaning-frequency').then(m => ({ default: m.CleaningFrequencyPage })));
const DIYvsProfessionalPage = lazy(() => import('./pages/resources/diy-vs-professional').then(m => ({ default: m.DIYvsProfessionalPage })));
const OrganicStainingGuidePage = lazy(() => import('./pages/organic-staining-guide').then(m => ({ default: m.OrganicStainingGuide })));

// Suburb Pages - Lazy load as default exports
const AlexanderHeightsPage = lazy(() => import('./pages/suburbs/alexander-heights'));
const AlkimosPage = lazy(() => import('./pages/suburbs/alkimos'));
const ApplecrossPage = lazy(() => import('./pages/suburbs/applecross'));
const BalcattaPage = lazy(() => import('./pages/suburbs/balcatta'));
const BayswaterPage = lazy(() => import('./pages/suburbs/bayswater'));
const BeldonPage = lazy(() => import('./pages/suburbs/beldon'));
const BooragoonPage = lazy(() => import('./pages/suburbs/booragoon'));
const BrabhamPage = lazy(() => import('./pages/suburbs/brabham'));
const BurnsBeachPage = lazy(() => import('./pages/suburbs/burns-beach'));
const BurswoodPage = lazy(() => import('./pages/suburbs/burswood'));
const ButlerPage = lazy(() => import('./pages/suburbs/butler'));
const ByfordPage = lazy(() => import('./pages/suburbs/byford'));
const CarinePage = lazy(() => import('./pages/suburbs/carine'));
const ChurchlandsPage = lazy(() => import('./pages/suburbs/churchlands'));
const CityBeachPage = lazy(() => import('./pages/suburbs/city-beach'));
const ClaremontPage = lazy(() => import('./pages/suburbs/claremont'));
const ClarksonPage = lazy(() => import('./pages/suburbs/clarkson'));
const ComoPage = lazy(() => import('./pages/suburbs/como'));
const ConnollyPage = lazy(() => import('./pages/suburbs/connolly'));
const CottesloePage = lazy(() => import('./pages/suburbs/cottesloe'));
const CraigiePage = lazy(() => import('./pages/suburbs/craigie'));
const CurrambinePage = lazy(() => import('./pages/suburbs/currambine'));
const DaytonPage = lazy(() => import('./pages/suburbs/dayton'));
const DoubleviewPage = lazy(() => import('./pages/suburbs/doubleview'));
const DuncraigPage = lazy(() => import('./pages/suburbs/duncraig'));
const EdgewaterPage = lazy(() => import('./pages/suburbs/edgewater'));
const EglintonPage = lazy(() => import('./pages/suburbs/eglinton'));
const FloreatPage = lazy(() => import('./pages/suburbs/floreat'));
const GreenwoodPage = lazy(() => import('./pages/suburbs/greenwood'));
const GwelupPage = lazy(() => import('./pages/suburbs/gwelup'));
const HamersleyPage = lazy(() => import('./pages/suburbs/hamersley'));
const HarrisdalePage = lazy(() => import('./pages/suburbs/harrisdale'));
const HeathridgePage = lazy(() => import('./pages/suburbs/heathridge'));
const HenleyBrookPage = lazy(() => import('./pages/suburbs/henley-brook'));
const HillarysPage = lazy(() => import('./pages/suburbs/hillarys'));
const HockingPage = lazy(() => import('./pages/suburbs/hocking'));
const IlukaPage = lazy(() => import('./pages/suburbs/iluka'));
const InnalooPage = lazy(() => import('./pages/suburbs/innaloo'));
const JindaleePage = lazy(() => import('./pages/suburbs/jindalee'));
const JoondalupPage = lazy(() => import('./pages/suburbs/joondalup'));
const KallarooPage = lazy(() => import('./pages/suburbs/kallaroo'));
const KarrinyupPage = lazy(() => import('./pages/suburbs/karrinyup'));
const KingsleyPage = lazy(() => import('./pages/suburbs/kingsley'));
const LeedervillePage = lazy(() => import('./pages/suburbs/leederville'));
const MadeleyPage = lazy(() => import('./pages/suburbs/madeley'));
const MarmionPage = lazy(() => import('./pages/suburbs/marmion'));
const MelvillePage = lazy(() => import('./pages/suburbs/melville'));
const MerriwaPage = lazy(() => import('./pages/suburbs/merriwa'));
const MindariePage = lazy(() => import('./pages/suburbs/mindarie'));
const MosmanParkPage = lazy(() => import('./pages/suburbs/mosman-park'));
const MountLawleyPage = lazy(() => import('./pages/suburbs/mount-lawley'));
const MullalooPage = lazy(() => import('./pages/suburbs/mullaloo'));
const NedlandsPage = lazy(() => import('./pages/suburbs/nedlands'));
const NorthBeachPage = lazy(() => import('./pages/suburbs/north-beach'));
const NorthFremantlePage = lazy(() => import('./pages/suburbs/north-fremantle'));
const OceanReefPage = lazy(() => import('./pages/suburbs/ocean-reef'));
const PadburyPage = lazy(() => import('./pages/suburbs/padbury'));
const PeppermintGrovePage = lazy(() => import('./pages/suburbs/peppermint-grove'));
const PiaraWatersPage = lazy(() => import('./pages/suburbs/piara-waters'));
const QuinnsRocksPage = lazy(() => import('./pages/suburbs/quinns-rocks'));
const RidgewoodPage = lazy(() => import('./pages/suburbs/ridgewood'));
const ScarboroughPage = lazy(() => import('./pages/suburbs/scarborough'));
const SorrentoPage = lazy(() => import('./pages/suburbs/sorrento'));
const SouthPerthPage = lazy(() => import('./pages/suburbs/south-perth'));
const StirlingPage = lazy(() => import('./pages/suburbs/stirling'));
const SubiacoPage = lazy(() => import('./pages/suburbs/subiaco'));
const SuccessPage = lazy(() => import('./pages/suburbs/success'));
const SwanbournePage = lazy(() => import('./pages/suburbs/swanbourne'));
const TamalaParkPage = lazy(() => import('./pages/suburbs/tamala-park'));
const TappingPage = lazy(() => import('./pages/suburbs/tapping'));
const TriggPage = lazy(() => import('./pages/suburbs/trigg'));
const TwoRocksPage = lazy(() => import('./pages/suburbs/two-rocks'));
const VictoriaParkPage = lazy(() => import('./pages/suburbs/victoria-park'));
const WannerooPage = lazy(() => import('./pages/suburbs/wanneroo'));
const WarwickPage = lazy(() => import('./pages/suburbs/warwick'));
const WatermansBayPage = lazy(() => import('./pages/suburbs/watermans-bay'));
const WembleyDownsPage = lazy(() => import('./pages/suburbs/wembley-downs'));
const WembleyPage = lazy(() => import('./pages/suburbs/wembley'));
const WoodlandsPage = lazy(() => import('./pages/suburbs/woodlands'));
const WoodvalePage = lazy(() => import('./pages/suburbs/woodvale'));
const YanchepPage = lazy(() => import('./pages/suburbs/yanchep'));

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-[#0a1628] mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
        <a href="/" className="inline-block bg-[#0a1628] text-white px-6 py-3 rounded-lg hover:bg-[#1a2638] transition-colors">
          Return Home
        </a>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <Suspense fallback={<div>Loading...</div>}><AboutPage /></Suspense> },
      { path: 'gallery', element: <Suspense fallback={<div>Loading...</div>}><GalleryPage /></Suspense> },
      { path: 'terms', element: <Suspense fallback={<div>Loading...</div>}><TermsPage /></Suspense> },
      { path: 'areas', element: <Suspense fallback={<div>Loading...</div>}><AreasPage /></Suspense> },
      { path: 'admin/images', element: <Suspense fallback={<div>Loading...</div>}><AdminImagesPage /></Suspense> },
      
      // Residential Services
      { path: 'services/pressure-cleaning', element: <Suspense fallback={<div>Loading...</div>}><PressureCleaningPage /></Suspense> },
      { path: 'services/house-washing', element: <Suspense fallback={<div>Loading...</div>}><HouseWashingPage /></Suspense> },
      { path: 'services/driveway-cleaning', element: <Suspense fallback={<div>Loading...</div>}><DrivewayCleaningPage /></Suspense> },
      { path: 'services/roof-cleaning', element: <Suspense fallback={<div>Loading...</div>}><RoofCleaningPage /></Suspense> },
      { path: 'services/window-cleaning', element: <Suspense fallback={<div>Loading...</div>}><WindowCleaningPage /></Suspense> },
      { path: 'services/paver-cleaning', element: <Suspense fallback={<div>Loading...</div>}><PaverCleaningPage /></Suspense> },
      { path: 'services/concrete-cleaning', element: <Suspense fallback={<div>Loading...</div>}><ConcreteCleaningPage /></Suspense> },
      { path: 'services/limestone-cleaning', element: <Suspense fallback={<div>Loading...</div>}><LimestoneCleaningPage /></Suspense> },
      { path: 'services/pool-patio-cleaning', element: <Suspense fallback={<div>Loading...</div>}><PoolPatioCleaningPage /></Suspense> },
      { path: 'services/presale-cleaning', element: <Suspense fallback={<div>Loading...</div>}><PresaleCleaningPage /></Suspense> },
      
      // Commercial Services
      { path: 'commercial', element: <Suspense fallback={<div>Loading...</div>}><CommercialPressureCleaningPage /></Suspense> },
      { path: 'commercial/building-washing', element: <Suspense fallback={<div>Loading...</div>}><BuildingWashingPage /></Suspense> },
      { path: 'commercial/strata-cleaning', element: <Suspense fallback={<div>Loading...</div>}><StrataCleaningPage /></Suspense> },
      { path: 'commercial/school-cleaning', element: <Suspense fallback={<div>Loading...</div>}><SchoolCleaningPage /></Suspense> },
      { path: 'commercial/shopping-centre-cleaning', element: <Suspense fallback={<div>Loading...</div>}><ShoppingCentreCleaningPage /></Suspense> },
      { path: 'commercial/restaurant-cleaning', element: <Suspense fallback={<div>Loading...</div>}><RestaurantCleaningPage /></Suspense> },
      { path: 'commercial/industrial-washing', element: <Suspense fallback={<div>Loading...</div>}><IndustrialWashingPage /></Suspense> },
      { path: 'commercial/playground-cleaning', element: <Suspense fallback={<div>Loading...</div>}><PlaygroundCleaningPage /></Suspense> },
      
      // Resources
      { path: 'resources', element: <Suspense fallback={<div>Loading...</div>}><ResourcesPage /></Suspense> },
      { path: 'resources/pricing-guide', element: <Suspense fallback={<div>Loading...</div>}><PricingGuidePage /></Suspense> },
      { path: 'resources/preparation-checklist', element: <Suspense fallback={<div>Loading...</div>}><PreparationChecklistPage /></Suspense> },
      { path: 'resources/cleaning-frequency', element: <Suspense fallback={<div>Loading...</div>}><CleaningFrequencyPage /></Suspense> },
      { path: 'resources/diy-vs-professional', element: <Suspense fallback={<div>Loading...</div>}><DIYvsProfessionalPage /></Suspense> },
      { path: 'resources/organic-staining-guide', element: <Suspense fallback={<div>Loading...</div>}><OrganicStainingGuidePage /></Suspense> },
      
      // Suburb Pages
      { path: 'perth/alexander-heights', element: <Suspense fallback={<div>Loading...</div>}><AlexanderHeightsPage /></Suspense> },
      { path: 'perth/alkimos', element: <Suspense fallback={<div>Loading...</div>}><AlkimosPage /></Suspense> },
      { path: 'perth/applecross', element: <Suspense fallback={<div>Loading...</div>}><ApplecrossPage /></Suspense> },
      { path: 'perth/balcatta', element: <Suspense fallback={<div>Loading...</div>}><BalcattaPage /></Suspense> },
      { path: 'perth/bayswater', element: <Suspense fallback={<div>Loading...</div>}><BayswaterPage /></Suspense> },
      { path: 'perth/beldon', element: <Suspense fallback={<div>Loading...</div>}><BeldonPage /></Suspense> },
      { path: 'perth/booragoon', element: <Suspense fallback={<div>Loading...</div>}><BooragoonPage /></Suspense> },
      { path: 'perth/brabham', element: <Suspense fallback={<div>Loading...</div>}><BrabhamPage /></Suspense> },
      { path: 'perth/burns-beach', element: <Suspense fallback={<div>Loading...</div>}><BurnsBeachPage /></Suspense> },
      { path: 'perth/burswood', element: <Suspense fallback={<div>Loading...</div>}><BurswoodPage /></Suspense> },
      { path: 'perth/butler', element: <Suspense fallback={<div>Loading...</div>}><ButlerPage /></Suspense> },
      { path: 'perth/byford', element: <Suspense fallback={<div>Loading...</div>}><ByfordPage /></Suspense> },
      { path: 'perth/carine', element: <Suspense fallback={<div>Loading...</div>}><CarinePage /></Suspense> },
      { path: 'perth/churchlands', element: <Suspense fallback={<div>Loading...</div>}><ChurchlandsPage /></Suspense> },
      { path: 'perth/city-beach', element: <Suspense fallback={<div>Loading...</div>}><CityBeachPage /></Suspense> },
      { path: 'perth/claremont', element: <Suspense fallback={<div>Loading...</div>}><ClaremontPage /></Suspense> },
      { path: 'perth/clarkson', element: <Suspense fallback={<div>Loading...</div>}><ClarksonPage /></Suspense> },
      { path: 'perth/como', element: <Suspense fallback={<div>Loading...</div>}><ComoPage /></Suspense> },
      { path: 'perth/connolly', element: <Suspense fallback={<div>Loading...</div>}><ConnollyPage /></Suspense> },
      { path: 'perth/cottesloe', element: <Suspense fallback={<div>Loading...</div>}><CottesloePage /></Suspense> },
      { path: 'perth/craigie', element: <Suspense fallback={<div>Loading...</div>}><CraigiePage /></Suspense> },
      { path: 'perth/currambine', element: <Suspense fallback={<div>Loading...</div>}><CurrambinePage /></Suspense> },
      { path: 'perth/dayton', element: <Suspense fallback={<div>Loading...</div>}><DaytonPage /></Suspense> },
      { path: 'perth/doubleview', element: <Suspense fallback={<div>Loading...</div>}><DoubleviewPage /></Suspense> },
      { path: 'perth/duncraig', element: <Suspense fallback={<div>Loading...</div>}><DuncraigPage /></Suspense> },
      { path: 'perth/edgewater', element: <Suspense fallback={<div>Loading...</div>}><EdgewaterPage /></Suspense> },
      { path: 'perth/eglinton', element: <Suspense fallback={<div>Loading...</div>}><EglintonPage /></Suspense> },
      { path: 'perth/floreat', element: <Suspense fallback={<div>Loading...</div>}><FloreatPage /></Suspense> },
      { path: 'perth/greenwood', element: <Suspense fallback={<div>Loading...</div>}><GreenwoodPage /></Suspense> },
      { path: 'perth/gwelup', element: <Suspense fallback={<div>Loading...</div>}><GwelupPage /></Suspense> },
      { path: 'perth/hamersley', element: <Suspense fallback={<div>Loading...</div>}><HamersleyPage /></Suspense> },
      { path: 'perth/harrisdale', element: <Suspense fallback={<div>Loading...</div>}><HarrisdalePage /></Suspense> },
      { path: 'perth/heathridge', element: <Suspense fallback={<div>Loading...</div>}><HeathridgePage /></Suspense> },
      { path: 'perth/henley-brook', element: <Suspense fallback={<div>Loading...</div>}><HenleyBrookPage /></Suspense> },
      { path: 'perth/hillarys', element: <Suspense fallback={<div>Loading...</div>}><HillarysPage /></Suspense> },
      { path: 'perth/hocking', element: <Suspense fallback={<div>Loading...</div>}><HockingPage /></Suspense> },
      { path: 'perth/iluka', element: <Suspense fallback={<div>Loading...</div>}><IlukaPage /></Suspense> },
      { path: 'perth/innaloo', element: <Suspense fallback={<div>Loading...</div>}><InnalooPage /></Suspense> },
      { path: 'perth/jindalee', element: <Suspense fallback={<div>Loading...</div>}><JindaleePage /></Suspense> },
      { path: 'perth/joondalup', element: <Suspense fallback={<div>Loading...</div>}><JoondalupPage /></Suspense> },
      { path: 'perth/kallaroo', element: <Suspense fallback={<div>Loading...</div>}><KallarooPage /></Suspense> },
      { path: 'perth/karrinyup', element: <Suspense fallback={<div>Loading...</div>}><KarrinyupPage /></Suspense> },
      { path: 'perth/kingsley', element: <Suspense fallback={<div>Loading...</div>}><KingsleyPage /></Suspense> },
      { path: 'perth/leederville', element: <Suspense fallback={<div>Loading...</div>}><LeedervillePage /></Suspense> },
      { path: 'perth/madeley', element: <Suspense fallback={<div>Loading...</div>}><MadeleyPage /></Suspense> },
      { path: 'perth/marmion', element: <Suspense fallback={<div>Loading...</div>}><MarmionPage /></Suspense> },
      { path: 'perth/melville', element: <Suspense fallback={<div>Loading...</div>}><MelvillePage /></Suspense> },
      { path: 'perth/merriwa', element: <Suspense fallback={<div>Loading...</div>}><MerriwaPage /></Suspense> },
      { path: 'perth/mindarie', element: <Suspense fallback={<div>Loading...</div>}><MindariePage /></Suspense> },
      { path: 'perth/mosman-park', element: <Suspense fallback={<div>Loading...</div>}><MosmanParkPage /></Suspense> },
      { path: 'perth/mount-lawley', element: <Suspense fallback={<div>Loading...</div>}><MountLawleyPage /></Suspense> },
      { path: 'perth/mullaloo', element: <Suspense fallback={<div>Loading...</div>}><MullalooPage /></Suspense> },
      { path: 'perth/nedlands', element: <Suspense fallback={<div>Loading...</div>}><NedlandsPage /></Suspense> },
      { path: 'perth/north-beach', element: <Suspense fallback={<div>Loading...</div>}><NorthBeachPage /></Suspense> },
      { path: 'perth/north-fremantle', element: <Suspense fallback={<div>Loading...</div>}><NorthFremantlePage /></Suspense> },
      { path: 'perth/ocean-reef', element: <Suspense fallback={<div>Loading...</div>}><OceanReefPage /></Suspense> },
      { path: 'perth/padbury', element: <Suspense fallback={<div>Loading...</div>}><PadburyPage /></Suspense> },
      { path: 'perth/peppermint-grove', element: <Suspense fallback={<div>Loading...</div>}><PeppermintGrovePage /></Suspense> },
      { path: 'perth/piara-waters', element: <Suspense fallback={<div>Loading...</div>}><PiaraWatersPage /></Suspense> },
      { path: 'perth/quinns-rocks', element: <Suspense fallback={<div>Loading...</div>}><QuinnsRocksPage /></Suspense> },
      { path: 'perth/ridgewood', element: <Suspense fallback={<div>Loading...</div>}><RidgewoodPage /></Suspense> },
      { path: 'perth/scarborough', element: <Suspense fallback={<div>Loading...</div>}><ScarboroughPage /></Suspense> },
      { path: 'perth/sorrento', element: <Suspense fallback={<div>Loading...</div>}><SorrentoPage /></Suspense> },
      { path: 'perth/south-perth', element: <Suspense fallback={<div>Loading...</div>}><SouthPerthPage /></Suspense> },
      { path: 'perth/stirling', element: <Suspense fallback={<div>Loading...</div>}><StirlingPage /></Suspense> },
      { path: 'perth/subiaco', element: <Suspense fallback={<div>Loading...</div>}><SubiacoPage /></Suspense> },
      { path: 'perth/success', element: <Suspense fallback={<div>Loading...</div>}><SuccessPage /></Suspense> },
      { path: 'perth/swanbourne', element: <Suspense fallback={<div>Loading...</div>}><SwanbournePage /></Suspense> },
      { path: 'perth/tamala-park', element: <Suspense fallback={<div>Loading...</div>}><TamalaParkPage /></Suspense> },
      { path: 'perth/tapping', element: <Suspense fallback={<div>Loading...</div>}><TappingPage /></Suspense> },
      { path: 'perth/trigg', element: <Suspense fallback={<div>Loading...</div>}><TriggPage /></Suspense> },
      { path: 'perth/two-rocks', element: <Suspense fallback={<div>Loading...</div>}><TwoRocksPage /></Suspense> },
      { path: 'perth/victoria-park', element: <Suspense fallback={<div>Loading...</div>}><VictoriaParkPage /></Suspense> },
      { path: 'perth/wanneroo', element: <Suspense fallback={<div>Loading...</div>}><WannerooPage /></Suspense> },
      { path: 'perth/warwick', element: <Suspense fallback={<div>Loading...</div>}><WarwickPage /></Suspense> },
      { path: 'perth/watermans-bay', element: <Suspense fallback={<div>Loading...</div>}><WatermansBayPage /></Suspense> },
      { path: 'perth/wembley-downs', element: <Suspense fallback={<div>Loading...</div>}><WembleyDownsPage /></Suspense> },
      { path: 'perth/wembley', element: <Suspense fallback={<div>Loading...</div>}><WembleyPage /></Suspense> },
      { path: 'perth/woodlands', element: <Suspense fallback={<div>Loading...</div>}><WoodlandsPage /></Suspense> },
      { path: 'perth/woodvale', element: <Suspense fallback={<div>Loading...</div>}><WoodvalePage /></Suspense> },
      { path: 'perth/yanchep', element: <Suspense fallback={<div>Loading...</div>}><YanchepPage /></Suspense> },
      
      { path: '*', element: <NotFound /> },
    ],
  },
]);