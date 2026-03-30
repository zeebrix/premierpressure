import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { AlertTriangle, Home, Droplet, Wind, Shield, CheckCircle2, Phone, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-bold text-[#0a1628] pr-4">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-[#00d4ff] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="text-gray-700 leading-relaxed px-6 pb-6">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function OrganicStainingGuide() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What causes organic staining on exterior surfaces?",
      answer: "Organic staining is caused by living organisms including mould, mildew, algae, lichen, and moss. These organisms thrive in Perth's climate, especially in shaded, damp areas with poor air circulation. They feed on organic matter and moisture, creating unsightly stains and potential health hazards."
    },
    {
      question: "Is mould and mildew dangerous to my health?",
      answer: "Yes, mould and mildew can pose serious health risks. They release spores and mycotoxins that can trigger allergies, asthma attacks, respiratory infections, and other health issues. Children, elderly, and those with compromised immune systems are particularly vulnerable."
    },
    {
      question: "Can organic staining damage my property?",
      answer: "Absolutely. Organic growth can cause permanent discoloration, deteriorate paint and sealants, trap moisture leading to rot, damage roof tiles and shingles, and significantly reduce your property's curb appeal and value. Early intervention is crucial to prevent costly repairs."
    },
    {
      question: "How can I prevent organic staining?",
      answer: "Prevention strategies include ensuring proper drainage, trimming vegetation for better sunlight exposure, improving air circulation, scheduling regular professional cleaning, applying protective sealants, and addressing leaks promptly. Perth's climate requires proactive maintenance."
    },
    {
      question: "Should I use bleach to remove mould and algae?",
      answer: "While bleach may temporarily remove surface staining, it doesn't kill the root system and can damage surfaces, harm plants, and create toxic fumes. Professional pressure cleaning with eco-friendly solutions is more effective and safer for long-term results."
    },
    {
      question: "How often should I have my property professionally cleaned?",
      answer: "In Perth's climate, we recommend professional pressure cleaning every 12-18 months for most properties. Properties in shaded areas, near water, or with poor drainage may require cleaning every 6-12 months to prevent organic growth from becoming established."
    }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Complete Guide to Organic Staining: Mould, Algae, Mildew & Lichen",
    "description": "Learn about the causes, health risks, and solutions for organic staining including mould, algae, mildew, and lichen on your Perth property. Expert advice from Premier Pressure Solutions WA.",
    "author": {
      "@type": "Organization",
      "name": "Premier Pressure Solutions WA"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Premier Pressure Solutions WA",
      "logo": {
        "@type": "ImageObject",
        "url": "https://premierpressuresolutionswa.com.au/logo.png"
      }
    },
    "datePublished": "2026-03-13",
    "dateModified": "2026-03-13"
  };

  return (
    <>
      <Helmet>
        <title>Organic Staining Guide: Mould, Algae, Mildew & Lichen Problems | Perth WA</title>
        <meta 
          name="description" 
          content="Complete guide to organic staining problems in Perth. Learn about mould, algae, mildew, and lichen - their causes, health risks, property damage, and professional solutions." 
        />
        <meta name="keywords" content="organic staining, mould removal, algae cleaning, mildew treatment, lichen removal, Perth, Western Australia" />
        <link rel="canonical" href="https://premierpressuresolutionswa.com.au/resources/organic-staining-guide" />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-[#0a1628] text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0a1628] to-[#00d4ff]/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            The Complete Guide to Organic Staining
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-4">
            Understanding Mould, Algae, Mildew & Lichen Problems in Perth
          </p>
          <p className="text-white/70 max-w-2xl mx-auto">
            Protect your property and health with this comprehensive guide to identifying, preventing, and removing organic staining from your home or business.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you've noticed dark streaks on your roof, green patches on your driveway, or black spots creeping across your walls, you're dealing with organic staining. This common problem affects thousands of Perth properties every year, causing not just cosmetic issues but potentially serious health and structural concerns.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In this comprehensive guide, we'll explore everything you need to know about organic staining - from understanding what causes it to implementing effective prevention and removal strategies.
          </p>
        </section>

        {/* What is Organic Staining */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-6">What is Organic Staining?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Organic staining refers to discoloration caused by living organisms that colonize exterior and interior surfaces. Unlike dirt or pollution stains, organic stains are actually alive and will continue to grow and spread if left untreated.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#00d4ff]">
              <h3 className="font-bold text-[#0a1628] mb-3 flex items-center gap-2">
                <Droplet className="w-5 h-5 text-[#00d4ff]" />
                Common Types
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span><strong>Mould:</strong> Fuzzy growth, typically black, green, or white</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span><strong>Mildew:</strong> Powdery surface growth, usually grey or white</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span><strong>Algae:</strong> Green, slimy stains, often on damp surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span><strong>Lichen:</strong> Crusty, colorful patches that combine algae and fungi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span><strong>Moss:</strong> Thick, soft, green plant growth</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#00d4ff]">
              <h3 className="font-bold text-[#0a1628] mb-3 flex items-center gap-2">
                <Home className="w-5 h-5 text-[#00d4ff]" />
                Affected Surfaces
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Roofs (tiles, metal, colorbond)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Exterior walls and render</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Driveways and pathways</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Pavers and decking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Fences and retaining walls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Pool surrounds and patios</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Perth Properties Are Vulnerable */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-6">Why Perth Properties Are Particularly Vulnerable</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Perth's unique climate creates the perfect conditions for organic growth:
          </p>
          
          <div className="bg-blue-50 border-l-4 border-[#00d4ff] p-6 my-6">
            <h3 className="font-bold text-[#0a1628] mb-4">Perth's Climate Factors</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Wind className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Coastal Humidity:</strong> High moisture levels, especially in coastal suburbs, provide ideal conditions for mould and algae growth
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Droplet className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Winter Rainfall:</strong> Extended wet periods from May to September create persistent damp conditions
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Home className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Mild Temperatures:</strong> Year-round moderate temperatures allow continuous organic growth
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Wind className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Sea Breeze:</strong> The famous "Fremantle Doctor" brings salt spray that can damage protective coatings, making surfaces more vulnerable
                </div>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed">
            These conditions mean that Perth properties require more vigilant maintenance and regular cleaning compared to drier inland regions.
          </p>
        </section>

        {/* Health Risks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-6">Health Risks of Organic Staining</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
              <h3 className="font-bold text-red-900 text-lg">Warning: Serious Health Concerns</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Mould and mildew aren't just unsightly - they pose genuine health risks to you and your family. Understanding these dangers is crucial for taking timely action.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-3">Respiratory Issues</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Mould spores become airborne and can be inhaled, causing:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Asthma attacks and exacerbation of existing respiratory conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Chronic coughing and wheezing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Shortness of breath and chest tightness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Increased susceptibility to respiratory infections</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-3">Allergic Reactions</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Many people are allergic to mould spores, experiencing:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Sneezing, runny or stuffy nose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Itchy, watery eyes and throat irritation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Skin rashes and dermatitis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Sinus headaches and congestion</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-3">Vulnerable Groups</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Certain individuals are at higher risk:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Infants and children</strong> with developing immune systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Elderly individuals</strong> with weakened immunity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>People with asthma or allergies</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Immunocompromised individuals</strong> (chemotherapy, HIV, organ transplant patients)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Property Damage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-6">Property Damage from Organic Growth</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond health concerns, organic staining can cause significant and costly damage to your property:
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a1628] mb-3">Structural Deterioration</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Roof Damage:</strong> Algae and lichen retain moisture, accelerating tile deterioration and potentially causing leaks. On metal roofs, organic growth can trap moisture leading to rust and corrosion.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Paint Degradation:</strong> Mould and mildew break down paint binders, causing peeling, bubbling, and discoloration that requires expensive repainting.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Surface Erosion:</strong> Lichen roots penetrate porous surfaces like concrete and limestone, causing permanent pitting and discoloration.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Wood Rot:</strong> On timber decking, fences, and fascias, persistent moisture from organic growth leads to rot and structural weakness.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a1628] mb-3">Financial Impact</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Reduced Property Value:</strong> Visible organic staining can reduce your home's market value by 5-10%, potentially costing tens of thousands on resale.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Increased Maintenance Costs:</strong> Delayed cleaning leads to permanent damage requiring costly repairs or replacement.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Insurance Issues:</strong> Some insurance policies may not cover damage from neglected maintenance, leaving you to foot the repair bill.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#0a1628] mb-3">Safety Hazards</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Slip Hazards:</strong> Algae and moss on pathways, driveways, and pool surrounds create dangerously slippery surfaces, especially when wet.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Weakened Structures:</strong> Organic growth can compromise the integrity of walkways, steps, and balustrades.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prevention Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-6">Prevention Strategies That Work</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While Perth's climate makes organic growth inevitable, you can significantly reduce its impact with proactive measures:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#00d4ff]" />
                <h3 className="text-xl font-bold text-[#0a1628]">Improve Drainage</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Clear gutters and downpipes regularly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Ensure proper surface water runoff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Fix pooling water issues promptly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Install French drains in problem areas</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="w-6 h-6 text-[#00d4ff]" />
                <h3 className="text-xl font-bold text-[#0a1628]">Increase Sunlight</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Trim overhanging tree branches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Remove dense shrubs near walls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Thin out vegetation for air flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Consider sun exposure when landscaping</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#00d4ff]" />
                <h3 className="text-xl font-bold text-[#0a1628]">Regular Cleaning</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Schedule annual pressure washing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Clean roofs every 12-18 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Address stains when first noticed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Don't wait for heavy buildup</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#00d4ff]" />
                <h3 className="text-xl font-bold text-[#0a1628]">Protective Treatments</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Apply quality sealants to pavers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Use anti-fungal roof treatments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Maintain paint in good condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Re-seal surfaces as recommended</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* DIY vs Professional */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-6">DIY Cleaning vs. Professional Services</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-yellow-900 mb-3">Why DIY Methods Often Fail</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While it's tempting to grab a bottle of bleach and a scrub brush, DIY approaches have significant limitations:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>Bleach doesn't work:</strong> It only bleaches the surface, leaving roots alive to regrow within weeks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>Surface damage:</strong> Incorrect pressure settings or harsh chemicals can permanently damage surfaces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>Safety risks:</strong> Working on roofs, ladders, or with high-pressure equipment is dangerous without proper training</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>Environmental harm:</strong> Runoff from harsh chemicals damages gardens and waterways</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>Incomplete removal:</strong> Without proper equipment, it's nearly impossible to reach all affected areas</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#00d4ff]/10 border-l-4 border-[#00d4ff] p-6">
            <h3 className="font-bold text-[#0a1628] mb-3">Professional Pressure Cleaning Advantages</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Complete elimination:</strong> Professional-grade equipment and eco-friendly solutions kill organic growth at the root
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Surface-specific techniques:</strong> Different surfaces require different pressure levels and cleaning methods
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Long-lasting results:</strong> Proper treatment delays regrowth for 12-24 months vs. weeks with DIY
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Safe execution:</strong> Trained professionals with proper safety equipment and insurance
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Time savings:</strong> What takes you a weekend takes professionals a few hours
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Environmentally responsible:</strong> Eco-friendly solutions that are safe for plants, pets, and waterways
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* When to Call Professionals */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-6">When to Call a Professional</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You should contact professional pressure cleaning services if you notice:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
              <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0a1628]">Visible Growth</strong>
                <p className="text-sm text-gray-600 mt-1">Any visible mould, algae, or lichen on your property</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
              <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0a1628]">Roof Discoloration</strong>
                <p className="text-sm text-gray-600 mt-1">Dark streaks or green patches on your roof</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
              <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0a1628]">Slippery Surfaces</strong>
                <p className="text-sm text-gray-600 mt-1">Pathways or driveways becoming slippery</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
              <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0a1628]">Pre-Sale Cleaning</strong>
                <p className="text-sm text-gray-600 mt-1">Preparing your property for sale</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
              <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0a1628]">Annual Maintenance</strong>
                <p className="text-sm text-gray-600 mt-1">12+ months since last professional clean</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
              <AlertTriangle className="w-5 h-5 text-[#00d4ff] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#0a1628]">Health Concerns</strong>
                <p className="text-sm text-gray-600 mt-1">Family members experiencing allergies or respiratory issues</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0a1628] mb-6">Conclusion: Take Action Before It's Too Late</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Organic staining isn't just a cosmetic issue - it's a progressive problem that worsens over time, affecting your health, property value, and structural integrity. The good news is that with proper understanding and timely professional intervention, it's completely manageable.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Don't wait until you're facing expensive repairs or health concerns. Regular professional pressure cleaning is an investment in your property's longevity and your family's wellbeing.
          </p>

          <div className="bg-gradient-to-r from-[#0a1628] to-[#0a1628]/90 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Protect Your Perth Property?</h3>
            <p className="text-white/90 mb-6">
              Premier Pressure Solutions WA specializes in safe, effective removal of mould, algae, mildew, and lichen using eco-friendly solutions and professional equipment. We serve all Perth metro areas with fully insured, experienced technicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+61452579657"
                className="inline-flex items-center justify-center gap-2 bg-[#00d4ff] text-[#0a1628] px-8 py-4 rounded-lg font-bold hover:bg-[#00d4ff]/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call 0452 579 657
              </a>
              <Link
                to="/#quote"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors border border-white/20"
              >
                Get Free Quote
              </Link>
            </div>
            <p className="text-[#00d4ff] font-semibold mt-4">
              ✓ New customers save 10% • ✓ Free inspection • ✓ Same-week service available
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section>
          <h2 className="text-2xl font-bold text-[#0a1628] mb-6">Related Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              to="/services/roof-cleaning"
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <h3 className="font-bold text-[#0a1628] mb-2">Roof Cleaning</h3>
              <p className="text-sm text-gray-600">Remove algae, lichen, and moss from your roof safely</p>
            </Link>
            <Link 
              to="/services/house-washing"
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <h3 className="font-bold text-[#0a1628] mb-2">House Washing</h3>
              <p className="text-sm text-gray-600">Eliminate mould and mildew from exterior walls</p>
            </Link>
            <Link 
              to="/services/driveway-cleaning"
              className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
            >
              <h3 className="font-bold text-[#0a1628] mb-2">Driveway Cleaning</h3>
              <p className="text-sm text-gray-600">Remove slippery algae and stains from concrete</p>
            </Link>
          </div>
        </section>

      </article>
    </>
  );
}