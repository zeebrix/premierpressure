export function HomePageMinimal() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-[#0a1628]">
          Premier Pressure Solutions WA
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Professional Pressure Cleaning Services in Perth
        </p>
        <a 
          href="tel:0452579657" 
          className="inline-block bg-[#0a1628] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1a2638] transition-colors"
        >
          Call 0452 579 657
        </a>
        <div className="mt-8 text-gray-500 text-sm">
          ✓ Build System Fixed - tw-animate-css Removed
        </div>
      </div>
    </div>
  );
}
