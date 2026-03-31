export function LoadingFallback() {
  return (
    <div className="w-full min-h-[400px] flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4">
        {/* Simple Spinner */}
        <div className="w-10 h-10 border-4 border-gray-100 border-t-[#00d4ff] rounded-full animate-spin" />
        <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">Loading</p>
      </div>
    </div>
  );
}
