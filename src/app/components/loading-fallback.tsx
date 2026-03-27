export function LoadingFallback() {
  return (
    <div className="w-full py-12 flex items-center justify-center bg-gray-50/50">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#00d4ff]"></div>
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    </div>
  );
}
